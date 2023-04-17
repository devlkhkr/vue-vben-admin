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
