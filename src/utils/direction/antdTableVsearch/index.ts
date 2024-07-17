import { ComponentPublicInstance, h, render } from 'vue';
import { CloseOutlined, DownCircleOutlined, UpCircleOutlined } from '@ant-design/icons-vue';
import { debounce } from 'lodash-es';

export const antdvTableVbrowse = {
  /**
   * 디렉티브가 바인딩된 엘리먼트가 처음으로 부모 컴포넌트에 연결될 때 한 번만 호출
   * @param el
   * @param binding
   * @param vnode
   * @returns
   */
  created(el, binding) {
    const instance: ComponentPublicInstance<any> = binding.instance; // 컴포넌트 인스턴스
    const columns = instance.getColumns(); // 컬럼 정보
    el.bgColor = '#ffff0035'; // yellow 35%
    el.targetColor = '#ff000045'; // red 45%
    el.targetIdx = 0;

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
    el.activeCol = activeColumns;

    // VNode 생성
    const searchAreaVNode = h(
      'div',
      { class: 'antdv-table-vbrowse-search-area', style: { bottom: '-80px' } },
      [
        h('input', {
          lazy: false,
          placeholder: '검색어를 입력하세요.',
          onInput: (e) => debouncedHandleKeywordChange(e, el, binding),
          onKeydown: (e) => {
            if (e.keyCode == 13) {
              // Enter key 입력시 다음 검색 결과로 이동
              goNext(el, binding);
            }
          },
        }),
        h('span', {
          class: 'antdv-table-vbrowse-divider',
        }),
        h(
          'span',
          {
            class: 'antdv-table-vbrowse-search-info',
            style: {
              color: '#fff',
              fontSize: '12px',
            },
          },
          '',
        ),
        h(
          'button',
          {
            onClick: () => {
              if (el.targetIdx !== 1) {
                el.targetIdx -= 2;
                goNext(el, binding);
              } else {
                doShake(el);
              }
            },
          },
          h(UpCircleOutlined),
        ),
        h(
          'button',
          {
            onClick: () => {
              goNext(el, binding);
            },
          },
          h(DownCircleOutlined),
        ),
        h(
          'button',
          {
            onClick: closeSearch,
          },
          h(CloseOutlined),
        ),
      ],
    );

    // 임시 컨테이너 생성
    const container = document.createElement('div');

    // VNode를 임시 컨테이너에 렌더링
    render(searchAreaVNode, container);
    const searchArea = container.firstChild as HTMLElement;
    // 실제 DOM 엘리먼트에 임시 컨테이너의 자식들을 append
    el.appendChild(searchArea);

    // 전역 키보드 이벤트 리스너 추가
    const keydownHandler = (event: KeyboardEvent) => {
      if (!searchArea) return;
      if (event.shiftKey && event.key === 'F') {
        event.preventDefault();
        searchArea.style.bottom = '20px';
        const input = searchArea.querySelector('input');
        if (input) {
          input.focus();
        }
        highlightCells(el, binding);
      } else if (event.key === 'Escape') {
        clearCellColor(el);
        closeSearch();
      }
    };

    document.addEventListener('keydown', keydownHandler);

    // cleanup 함수 정의
    el._cleanup = () => {
      document.removeEventListener('keydown', keydownHandler);
    };
  },
  beforeMount(el) {
    // el에 클래스 추가
    el.classList.add('antdv-table-vbrowse');
  },
  /**
   * 컴포넌트의 VNode가 업데이트될 때마다 호출
   * @param el
   * @param bindin
   * @param vnode
   * @param prevVnode
   */
  updated(el, binding) {
    setActiveColAndHighlightCell(el, binding);
  },
  /**
   * unmounted 훅은 컴포넌트의 VNode가 제거될 때 호출
   * @param el
   */
  unmounted(el) {
    // cleanup 실행
    if (el._cleanup) {
      // 전역 키보드 이벤트 리스너 제거
      el._cleanup();
    }
  },
};

function setActiveColAndHighlightCell(el, binding) {
  const instance: ComponentPublicInstance<any> = binding.instance; // 컴포넌트 인스턴스
  const columns = instance.getColumns(); // 컬럼 정보

  // 활성화된 컬럼 정보 추출
  const activeColumns: Array<string> = [];
  columns.map((column) => {
    if (!column.defaultHidden && typeof column.dataIndex === 'string')
      activeColumns.push(column.dataIndex);
  });
  el.activeCol = activeColumns;

  // 하이라이팅 로직을 Vue의 반응성 시스템에 통합
  // Vue의 다음 렌더링 사이클에서 하이라이팅 수행
  instance.$nextTick(() => {
    highlightCells(el, binding);
  });
}

/**
 * 현재 page에서 searchKeyword가 포함된 cell의 색상 강조
 * @param el
 * @param activeColumns
 * @param searchKeyword
 */
function highlightCells(el, binding) {
  if (!el.filteredDataIndex) return; // 검색 결과가 없으면 return
  const instance: ComponentPublicInstance<any> = binding.instance; // 컴포넌트 인스턴스
  const pagination = instance.getPaginationRef(); // 페이징 정보
  const _dataSource = instance.getDataSource();

  const pgStartRowIdx = (pagination.current - 1) * pagination.pageSize;
  const pgEndRowIdx = Math.min(pagination.current * pagination.pageSize - 1, _dataSource.length);

  // 키워드가 포함된 데이터중 현재 페이지에 해당하는 데이터만 필터링
  const pgFilterdData = el.filteredDataIndex.filter((fd) => {
    return fd.rowIndex >= pgStartRowIdx && fd.rowIndex <= pgEndRowIdx;
  });

  clearCellColor(el);

  if (el.searchKeyword) {
    pgFilterdData.forEach((fd) => {
      fd.matchedCellCols.forEach((colIdx) => {
        // 색이 칠해져야 하는 cell 검색
        const rowIdx = fd.rowIndex - pgStartRowIdx + 2;
        const cell = el.querySelector(
          `tbody .ant-table-row:nth-child(${rowIdx}) .ant-table-cell:nth-child(${colIdx + 1})`,
        ); // 검색된 cell
        if (cell) {
          cell.setAttribute('data-searched-idx', `${fd.rowIndex}_${colIdx}`);
          // cell이 존재하면
          if (el.targetDataKey === `${fd.rowIndex}_${colIdx}`) {
            // 현재 타겟 cell이면 targetColor로 색상 변경
            cell.style.backgroundColor = el.targetColor;
          } else {
            // el.targetIdx를 계산하기 위한 targetCell용 data-searched-idx 속성 추가
            cell.style.backgroundColor = el.bgColor;
          }
        } else {
          // cell이 존재하지 않으면
          console.error('cell not found');
        }
      });
    });
  }

  const cell = el.querySelector(
    `.ant-table-cell[data-searched-idx="${el.targetDataKey}"]`,
  ) as HTMLElement;

  let cellPosX = 0;
  let cellPosY = 0;

  if (cell) {
    cell.style.backgroundColor = el.targetColor;
    cellPosX = cell.offsetLeft;
    cellPosY = cell.offsetTop;
  }
  // E : 타겟 Cell 찾기

  // 스크롤 위치 조정
  cellPosX = cellPosX >= window.innerWidth ? cellPosX - 100 : 0;
  const scrollX = el.offsetLeft + cellPosX;
  const scrollY = el.offsetTop + cellPosY;
  document.body.scrollTo(scrollX, scrollY);
}

export interface IFilteredDataIndex {
  rowIndex: number;
  matchedCellCols: Array<number>;
}

export interface IRowCol {
  row: number;
  col: number;
}

// 검색 키워드가 변경되었을 때 호출되는 함수
function handleKeywordChange(e, el, binding) {
  const instance: ComponentPublicInstance<any> = binding.instance; // 컴포넌트 인스턴스
  const searchKeyword = e.target.value; // 검색어
  if (searchKeyword == el.searchKeyword) return; // 검색어가 변경되지 않았으면 return
  el.searchKeyword = searchKeyword; // searchKeyword를 el 객체에 저장

  const _dataSource = instance.getDataSource();
  const targetIdx = 0; // 검색 키워드가 변경되었으므로 targetIdx를 0으로 초기화

  const filteredDataIndex: Array<IFilteredDataIndex> = []; // 검색어와 일치하는 데이터의 인덱스와 matchedCellCols 배열
  let totalMatches = 0; // 검색어와 일치하는 총 cell의 갯수

  if (searchKeyword && searchKeyword.trim().length) {
    _dataSource.forEach((data, index) => {
      const matchedCellCols: Array<number> = [];

      for (let i = 0; i < el.activeCol.length; i++) {
        if (data[el.activeCol[i]] && data[el.activeCol[i]].toString().includes(searchKeyword)) {
          totalMatches++;
          matchedCellCols.push(i);
        }
      }

      if (matchedCellCols.length > 0) {
        filteredDataIndex.push({
          rowIndex: index, // 일치한 cell이 한개라도 있는 row의 인덱스
          matchedCellCols: matchedCellCols, // 해당 row에서 검색어와 일치하는 cell의 컬럼 indexes
        });
      }
    });
  }

  el.targetIdx = targetIdx;
  el.filteredDataIndex = filteredDataIndex;
  el.totalMatches = totalMatches;

  // 검색 결과가 없을 경우
  if (filteredDataIndex.length === 0 || !searchKeyword) {
    const cells = el.querySelectorAll('td.ant-table-cell');
    setSearchInfoTxt(el, binding, targetIdx, searchKeyword);
    cells.forEach((cell) => {
      // 기존 mark 태그 제거
      cell.style.backgroundColor = '';
    });
    if (filteredDataIndex.length === 0) {
      console.log('검색 결과가 없습니다.');
    } else if (!searchKeyword) {
      console.log('검색어를 입력하세요.');
    }
    return;
  }

  goNext(el, binding);
}

// 키워드 변경 디바운스
const debouncedHandleKeywordChange = debounce(handleKeywordChange, 300);

// 검색 닫기
function closeSearch() {
  const search = document.querySelector('.antdv-table-vbrowse-search-area') as HTMLElement;
  if (search) {
    search.style.bottom = '-80px';
  }
}

// 숫자를 입력하여 searched data의 해당 index로 바로 이동
function handleJumperChange(event, el, binding) {
  let jumpTo = parseInt(event.target.value);

  // 입력 받은 값이 숫자가 아니면 기존 targetIdx 값으로 롤백
  if (isNaN(jumpTo)) {
    el.targetIdx -= 1;
    goNext(el, binding);
    return;
  }

  // 입력 받은 값이 totalMatches 보다 크거나 1보다 작을 때 max, min 처리
  jumpTo = jumpTo > el.totalMatches ? el.totalMatches : jumpTo;
  jumpTo = jumpTo < 1 ? 1 : jumpTo;

  el.targetIdx = jumpTo - 1;
  goNext(el, binding);
}

// 검색결과 text 업데이트
function setSearchInfoTxt(el, binding, targetIdx, searchKeyword, isEnd?) {
  if (isEnd) {
    doShake(el);
    return;
  }

  const searchInfoSpan = el.querySelector('.antdv-table-vbrowse-search-info');
  const jumperInput = document.createElement('input');
  const domTotalMatches = document.createElement('span');
  domTotalMatches.textContent = ` / ${el.totalMatches}`;
  jumperInput.type = 'text';
  jumperInput.value = targetIdx + 1;
  jumperInput.style.width = '60px';
  jumperInput.style.textAlign = 'right';
  jumperInput.onchange = (event) => {
    handleJumperChange(event, el, binding);
  };

  searchInfoSpan.innerHTML = '';

  if (searchInfoSpan && searchKeyword) {
    searchInfoSpan.style.maxWidth = '500px';
    searchInfoSpan.style.opacity = 1;
    if (el.totalMatches) {
      searchInfoSpan.style.color = '#fff';
      searchInfoSpan.appendChild(jumperInput);
      searchInfoSpan.appendChild(domTotalMatches);
    } else if (el.totalMatches === 0) {
      searchInfoSpan.style.color = '#ff935e';
      searchInfoSpan.innerHTML = '검색 결과가 없습니다.';
      doShake(el);
    }
  } else {
    searchInfoSpan.style.maxWidth = 0;
    searchInfoSpan.style.opacity = 0;
    searchInfoSpan.innerHTML = '';
  }
}

// 더이상 동작할 수 없는 경우 검색박스 흔들기 애니메이션
function doShake(el) {
  const wrapper = el.querySelector('.antdv-table-vbrowse-search-area');
  wrapper.classList.add('shake');
  setTimeout(() => {
    wrapper.classList.remove('shake');
  }, 300);
}

// 다음 검색 결과로 이동
function goNext(el, binding) {
  const instance: ComponentPublicInstance<any> = binding.instance; // 컴포넌트 인스턴스
  const pagination = instance.getPaginationRef(); // 페이징 정보
  const setPagination = instance.setPagination; // 페이징 정보 변경 메소드

  const filteredDataIndex = el.filteredDataIndex;
  const searchKeyword = el.searchKeyword;
  const targetIdx = el.targetIdx;
  const isEnd = targetIdx == el.totalMatches;

  if (filteredDataIndex.length === 0 || !searchKeyword) return;

  setSearchInfoTxt(el, binding, targetIdx, searchKeyword, isEnd);

  if (isEnd) return; // 마지막 검색결과면 종료

  const targetRowCol = getCombinedValue(filteredDataIndex, targetIdx); // 현재 타겟 Cell 데이터 키 저장

  const dataAt = targetRowCol.row / pagination.pageSize;
  let page = dataAt < 1 ? 1 : Math.ceil(dataAt);

  const scrollPer = parseFloat((dataAt - Math.floor(dataAt)).toFixed(2));
  if (scrollPer === 0 && dataAt >= 1) {
    // FIXME :: scrollPer가 0이면 다음페이지의 첫번째 row로 생성됨 (이유분석 해야함 )
    page += 1;
  }

  if (!searchKeyword || (searchKeyword && !searchKeyword.trim().length)) {
    return;
  }

  // page가 넘어가야하는 경우 페이징 정보 변경
  if (page !== pagination.current) {
    setPagination({
      ...pagination,
      current: page,
    });
  } else {
    setActiveColAndHighlightCell(el, binding);
  }

  el.targetDataKey = `${targetRowCol.row}_${targetRowCol.col}`;
  el.targetIdx = targetIdx + 1;

  instance.$nextTick(() => {});
}

// 검색 결과에서 targetIndex에 해당하는 데이터의 키를 찾는 함수 [row_columnIdx 형식 : (예)2097_2]
function getCombinedValue(data, targetIndex): IRowCol {
  let currentIndex = 0;

  for (const item of data) {
    for (const col of item.matchedCellCols) {
      if (currentIndex === targetIndex) {
        return {
          row: item.rowIndex,
          col: col,
        };
      }
      currentIndex++;
    }
  }

  // 매칭된 CombinedValue가 없을 때
  return {
    row: 0,
    col: 0,
  };
}

// 하이라이팅 전 || esc(검색 종료) 누를 시 셀 컬러 비우기
function clearCellColor(el) {
  const cells = el.querySelectorAll('td.ant-table-cell');
  cells.forEach((cell) => {
    // 기존 mark 태그 제거
    cell.style.backgroundColor = '';
    cell.removeAttribute('data-searched-idx');
  });
}
