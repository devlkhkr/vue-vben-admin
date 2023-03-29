import { BasicColumn } from '/@/components/Table';
import { FormProps } from '/@/components/Table';
import { ComponentType } from '/@/components/Table/src/types/componentType';

export interface userDataTypes {
  id: string;
  name: string;
  email: string;
  state: string;
  actions?: JSX.Element;
  [key: string]: string | number | JSX.Element | undefined;
}

export interface tblColType {
  key: string;
  label: string;
  search: boolean;
  type: ComponentType;
}

export function setTableColumn(columns: tblColType[]) {
  const tblFormConfig: Partial<FormProps> = {
    labelWidth: 100,
    schemas: [],
  };
  const tblColConfig: BasicColumn[] = [];

  for (let i = 0; i < columns.length; i++) {
    columns[i].search === true
      ? tblFormConfig.schemas?.push({
          field: columns[i].key,
          label: columns[i].label,
          component: columns[i].type,
          colProps: {
            xl: 12,
            xxl: 8,
          },
        })
      : void 0;

    tblColConfig.push({
      title: columns[i].label,
      dataIndex: columns[i].key,
      filterSearch: true,
      children: [
        {
          dataIndex: columns[i].key,
        },
      ],
    });
  }

  tblColConfig.push({
    title: 'Actions',
    dataIndex: 'actions',
    filterSearch: true,
  });

  return { tblFormConfig, tblColConfig };
}

// export function getUserFormConfig(): Partial<FormProps> {
//   return {
//     labelWidth: 100,
//     schemas: [
//       {
//         field: `id`,
//         label: `아이디`,
//         component: 'Input',
//         colProps: {
//           xl: 12,
//           xxl: 8,
//         },
//       },
//       {
//         field: `name`,
//         label: `이름`,
//         component: 'Input',
//         colProps: {
//           xl: 12,
//           xxl: 8,
//         },
//       },
//       {
//         field: `name`,
//         label: `이메일`,
//         component: 'Input',
//         colProps: {
//           xl: 12,
//           xxl: 8,
//         },
//       },
//     ],
//   };
// }

// export function getUserColumn() {
//   const columns: BasicColumn[] = [
//     {
//       title: '아이디',
//       dataIndex: 'id',
//       filterSearch: true,
//     },
//     {
//       title: '이름',
//       dataIndex: 'name',
//       filterSearch: true,
//     },
//     {
//       title: '이메일',
//       dataIndex: 'email',
//       filterSearch: true,
//     },
//     {
//       title: '상태',
//       dataIndex: 'state',
//       filterSearch: true,
//     },
//     {
//       title: 'Actions',
//       dataIndex: 'actions',
//       filterSearch: true,
//     },
//   ];
//   return columns;
// }

export function getUserData(data: userDataTypes[]) {
  return (() => {
    const arr: userDataTypes[] = [];
    data.map((user: userDataTypes, index: number) => {
      arr.push({
        id: user.id,
        name: user.name,
        email: user.email,
        state: user.state,
        actions: (() => {
          return (
            <div key={index}>
              <a-button
                ghost
                color="success"
                onClick={() => {
                  console.log('수정이벤트');
                }}
              >
                수정
              </a-button>
              <a-button
                ghost
                color="error"
                class="ml-2"
                onClick={() => {
                  console.log('삭제이벤트');
                }}
              >
                삭제
              </a-button>
            </div>
          );
        })(),
      });
    });

    return arr;
  })();
}
