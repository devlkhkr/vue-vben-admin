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
    tblColConfig.push({
      title: columns[i].label,
      dataIndex: columns[i].key,
      filterSearch: true,
    });
  }

  return { tblFormConfig, tblColConfig };
}
