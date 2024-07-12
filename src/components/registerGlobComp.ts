import { h, render, type App } from 'vue';
import { Button } from './Button';
import { Input, Layout } from 'ant-design-vue';
import VueShortKey from 'vue-shortkey';
import VXETable from 'vxe-table';

export function registerGlobComp(app: App) {
  app.use(Input).use(Button).use(Layout).use(VXETable).use(VueShortKey);

  app.directive('antdv-table-vscroll', {
    created(el, binding, vnode) {
      console.log(vnode);
      const instance = binding.instance; // 컴포넌트 인스턴스
      const columns = instance.getColumns(); // 컬럼 정보
      const dataSource = instance.getDataSource(); // 데이터 정보
      const setTableData = instance.setTableData; // 데이터 정보 변경 메소드
      const pagination = instance.getPaginationRef(); // 페이징 정보
      const setPagination = instance.setPagination; // 페이징 정보 변경 메소드

      console.log(pagination);
      console.log(vnode);
      console.log(setTableData);

      // 컬럼 정보가 없으면 에러 출력
      if (!columns) {
        console.error('columns is required');
        return;
      }

      // 활성화된 컬럼 정보 추출
      const activeColumns: Array<string> = [];
      columns.map((column) => {
        if (column.dataIndex) activeColumns.push(column.dataIndex);
      });

      // VNode 생성
      const searchAreaVNode = h('div', { class: 'antdv-table-vscroll-search-area' }, [
        h('input', {
          lazy: false,
          placeholder: '검색어를 입력하세요.',
          onInput: (e) => {
            const targetIdx = 0;
            const searchKeyword = e.target.value;
            el.searchKeyword = searchKeyword; // searchKeyword를 el 객체에 저장
            const filterdDataIndex: Array<number> = [];
            const filteredData = dataSource.filter((data, index) => {
              let isMatch = false;
              activeColumns.map((column) => {
                if (data[column].includes(searchKeyword)) {
                  isMatch = true;
                  data._index = index;
                  filterdDataIndex.push(index);
                }
              });
              console.log(filteredData);
              return isMatch;
            });

            // setTableData(filteredData);
            el.targetIdx = targetIdx;

            // 검색 결과가 없을 경우
            if (filterdDataIndex.length === 0) {
              const cells = el.querySelectorAll('.ant-table-cell');
              cells.forEach((cell) => {
                // 기존 mark 태그 제거
                cell.innerHTML = cell.innerHTML.replace(
                  /<mark class="antdv-table-cell-mark">(.*?)<\/mark>/g,
                  '$1',
                );

                // 검색어가 비어있지 않은 경우에만 강조
                if (searchKeyword && cell.textContent.includes(searchKeyword)) {
                  const regex = new RegExp(`(${searchKeyword})`, 'gi');
                  const highlightedText = cell.textContent.replace(
                    regex,
                    '<mark class="antdv-table-cell-mark">$1</mark>',
                  );
                  cell.innerHTML = highlightedText;
                }
              });
              console.log('검색 결과가 없습니다.');
              return;
            }

            const dataAt = filterdDataIndex[targetIdx] / pagination.pageSize;
            const page = dataAt < 1 ? 1 : Math.ceil(dataAt);
            const scrollPer = parseFloat((dataAt - Math.floor(dataAt)).toFixed(2));

            console.log('dataAt:', dataAt);
            setPagination({
              ...pagination,
              current: page,
            });

            const tBody = el.querySelector('.ant-table-body');
            const scrollY = tBody.offsetHeight * scrollPer + el.offsetTop;
            console.log('scrollY:', scrollY);
            document.body.scrollTo(document.body.scrollLeft, scrollY);

            // nextTick(() => {

            // });
          },
        }),
        h(
          'button',
          {
            onClick: () => {
              console.log('검색 버튼 클릭');
            },
            directives: [
              {
                name: 'shortkey',
                value: ['d', 'f'],
              },
            ],
            onShortkey: () => {
              console.log('shortKey!');
            },
          },
          '검색',
        ),
      ]);

      // 임시 컨테이너 생성
      const container = document.createElement('div');

      // VNode를 임시 컨테이너에 렌더링
      render(searchAreaVNode, container);

      // 실제 DOM 엘리먼트에 임시 컨테이너의 자식들을 append
      el.appendChild(container.firstChild);
    },
    beforeMount(el, binding, vnode, prevVnode) {
      console.log(el, binding, vnode, prevVnode);
      // el에 클래스 추가
      el.classList.add('antdv-table-vscroll');
    },
    updated(el, binding, vnode, prevVnode) {
      console.log(el, binding, vnode, prevVnode);
      const searchKeyword = el.searchKeyword || ''; // el 객체에서 searchKeyword를 가져옴
      console.log('updated::', searchKeyword);

      const cells = el.querySelectorAll('.ant-table-cell');
      cells.forEach((cell) => {
        // 기존 mark 태그 제거
        cell.innerHTML = cell.innerHTML.replace(
          /<mark class="antdv-table-cell-mark">(.*?)<\/mark>/g,
          '$1',
        );

        // 검색어가 비어있지 않은 경우에만 강조
        if (searchKeyword && cell.textContent.includes(searchKeyword)) {
          const regex = new RegExp(`(${searchKeyword})`, 'gi');
          const highlightedText = cell.textContent.replace(
            regex,
            '<mark class="antdv-table-cell-mark">$1</mark>',
          );
          cell.innerHTML = highlightedText;
        }
      });
    },
  });
}
