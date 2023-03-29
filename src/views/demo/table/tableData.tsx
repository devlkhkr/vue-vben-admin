import { optionsListApi } from '/@/api/demo/select';
import { FormProps, FormSchema } from '/@/components/Table';
import { BasicColumn } from '/@/components/Table/src/types/table';
import { VxeFormItemProps, VxeGridPropTypes } from '/@/components/VxeTable';

export function getBasicColumns(): BasicColumn[] {
  return [
    {
      title: '아이디',
      dataIndex: 'id',
      fixed: 'left',
    },
    {
      title: '이름',
      dataIndex: 'name',
      width: 150,
      filters: [
        { text: 'Male', value: 'male' },
        { text: 'Female', value: 'female' },
      ],
    },
    {
      title: '주소',
      dataIndex: 'address',
    },
    {
      title: '번호',
      dataIndex: 'no',
      width: 150,
      sorter: true,
      defaultHidden: true,
    },
    {
      title: '시작 시간',
      width: 150,
      sorter: true,
      dataIndex: 'beginTime',
    },
    {
      title: '종료 시간',
      width: 150,
      sorter: true,
      dataIndex: 'endTime',
    },
  ];
}

export function getBasicShortColumns(): BasicColumn[] {
  return [
    {
      title: 'ID',
      width: 150,
      dataIndex: 'id',
      sorter: true,
      sortOrder: 'ascend',
    },
    {
      title: '이름',
      dataIndex: 'name',
      width: 120,
    },
    {
      title: '주소',
      dataIndex: 'address',
    },
    {
      title: '번호',
      dataIndex: 'no',
      width: 80,
    },
  ];
}

export function getMultipleHeaderColumns(): BasicColumn[] {
  return [
    {
      title: 'ID',
      dataIndex: 'id',
      width: 200,
    },
    {
      title: '이름',
      dataIndex: 'name',
      width: 120,
    },
    {
      title: '주소',
      dataIndex: 'address',
      sorter: true,
      children: [
        {
          title: '번호',
          dataIndex: 'no',
          width: 120,
          filters: [
            { text: '남성', value: 'male', children: [] },
            { text: '여성', value: 'female', children: [] },
          ],
        },
        {
          title: '시작 시간',
          dataIndex: 'beginTime',
          width: 120,
        },
        {
          title: '종료 시간',
          dataIndex: 'endTime',
          width: 120,
        },
      ],
    },
  ];
}
export function getCustomHeaderColumns(): BasicColumn[] {
  return [
    {
      title: 'ID',
      dataIndex: 'id',
      helpMessage: '헤더 도움말 예시 1',
      width: 200,
    },
    {
      // title: '이름',
      dataIndex: 'name',
      width: 120,
      // slots: { title: 'customTitle' },
    },
    {
      // title: '주소',
      dataIndex: 'address',
      width: 120,
      // slots: { title: 'customAddress' },
      sorter: true,
    },
    {
      title: '번호',
      dataIndex: 'no',
      width: 120,
      filters: [
        { text: '남성', value: 'male', children: [] },
        { text: '여성', value: 'female', children: [] },
      ],
    },
    {
      title: '시작 시간',
      dataIndex: 'beginTime',
      width: 120,
    },
    {
      title: '종료 시간',
      dataIndex: 'endTime',
      width: 120,
    },
  ];
}

const cellContent = (_, index) => ({
  colSpan: index === 9 ? 0 : 1,
});

export function getMergeHeaderColumns(): BasicColumn[] {
  return [
    {
      title: '아이디',
      dataIndex: 'id',
      width: 300,
      customCell: (_, index) => ({
        colSpan: index === 9 ? 6 : 1,
      }),
    },
    {
      title: '이름',
      dataIndex: 'name',
      width: 300,
      customCell: cellContent,
    },
    {
      title: '주소',
      dataIndex: 'address',
      colSpan: 2,
      width: 120,
      sorter: true,
      customCell: (_, index) => ({
        rowSpan: index === 2 ? 2 : 1,
        colSpan: index === 3 || index === 9 ? 0 : 1,
      }),
    },
    {
      title: '번호',
      dataIndex: 'no',
      colSpan: 0,
      filters: [
        { text: 'Male', value: 'male', children: [] },
        { text: 'Female', value: 'female', children: [] },
      ],
      customCell: cellContent,
    },
    {
      title: '시작 시간',
      dataIndex: 'beginTime',
      width: 200,
      customCell: cellContent,
    },
    {
      title: '종료 시간',
      dataIndex: 'endTime',
      width: 200,
      customCell: cellContent,
    },
  ];
}
export const getAdvanceSchema = (itemNumber = 6): FormSchema[] => {
  const arr: any = [];
  for (let index = 0; index < itemNumber; index++) {
    arr.push({
      field: `field${index}`,
      label: `옵션${index}`,
      component: 'Input',
      colProps: {
        xl: 12,
        xxl: 8,
      },
    });
  }
  return arr;
};
export function getFormConfig(): Partial<FormProps> {
  return {
    labelWidth: 100,
    schemas: [
      ...getAdvanceSchema(5),
      {
        field: `field11`,
        label: `Slot 예제`,
        component: 'Select',
        slot: 'custom',
        colProps: {
          xl: 12,
          xxl: 8,
        },
      },
    ],
  };
}

export function getBasicData() {
  return (() => {
    const arr: any = [];
    for (let index = 0; index < 40; index++) {
      arr.push({
        id: `crefia_${index}`,
        name: 'crefia',
        email: 'crefia@basicit.co.kr',
        state: 'active',
        actions: (() => {
          return (
            <div>
              <a-button ghost color="success">
                수정
              </a-button>
              <a-button ghost color="error" class="ml-2">
                삭제
              </a-button>
            </div>
          );
        })(),
      });
    }
    return arr;
  })();
}

export function getTreeTableData() {
  return (() => {
    const arr: any = [];
    for (let index = 0; index < 40; index++) {
      arr.push({
        id: `${index}`,
        name: 'John Brown',
        age: `1${index}`,
        no: `${index + 10}`,
        address: 'New York No. 1 Lake ParkNew York No. 1 Lake Park',
        beginTime: new Date().toLocaleString(),
        endTime: new Date().toLocaleString(),
        children: [
          {
            id: `l2-${index}`,
            name: 'John Brown',
            age: `1${index}`,
            no: `${index + 10}`,
            address: 'New York No. 1 Lake ParkNew York No. 1 Lake Park',
            beginTime: new Date().toLocaleString(),
            endTime: new Date().toLocaleString(),
          },
        ],
      });
    }
    return arr;
  })();
}

export const vxeTableColumns: VxeGridPropTypes.Columns = [
  {
    title: '일련번호',
    type: 'seq',
    fixed: 'left',
    width: '50',
    align: 'center',
  },
  {
    title: '고정 열',
    field: 'name',
    width: 150,
    showOverflow: 'tooltip',
    fixed: 'left',
  },
  {
    title: '자동 조정 열',
    field: 'address',
  },
  {
    title: '사용자 지정 열(사용자 지정 내보내기)',
    field: 'no',
    width: 200,
    showOverflow: 'tooltip',
    align: 'center',
    slots: {
      default: ({ row }) => {
        const text = `사용자 정의${row.no}`;
        return [<div class="text-red-500">{text}</div>];
      },
    },
    exportMethod: ({ row }) => {
      return `사용자 정의${row.no} 내보내기`;
    },
  },
  {
    title: '사용자 정의 편집',
    width: 150,
    field: 'name1',
    align: 'center',
    editRender: {
      name: 'AInput',
      placeholder: '클릭하여 입력하세요',
    },
  },
  {
    title: '시작 시간',
    width: 150,
    field: 'beginTime',
    showOverflow: 'tooltip',
    align: 'center',
  },
  {
    title: '종료 시간',
    width: 150,
    field: 'endTime',
    showOverflow: 'tooltip',
    align: 'center',
  },
  {
    width: 160,
    title: '조작',
    align: 'center',
    slots: { default: '작업' },
    fixed: 'right',
  },
];

export const vxeTableFormSchema: VxeFormItemProps[] = [
  {
    field: 'field0',
    title: 'field0',
    itemRender: {
      name: 'AInput',
    },
    span: 6,
  },
  {
    field: 'field1',
    title: 'field1',
    itemRender: {
      name: 'AApiSelect',
      props: {
        api: optionsListApi,
        resultField: 'list',
        labelField: 'name',
        valueField: 'id',
      },
    },
    span: 6,
  },
  {
    span: 12,
    align: 'right',
    className: '!pr-0',
    itemRender: {
      name: 'AButtonGroup',
      children: [
        {
          props: { type: 'primary', content: '查询', htmlType: 'submit' },
          attrs: { class: 'mr-2' },
        },
        { props: { type: 'default', htmlType: 'reset', content: '重置' } },
      ],
    },
  },
];
