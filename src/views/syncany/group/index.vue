<template>
  <div class="p-4">
    <BasicTable
      title="사용자"
      titleHelpMessage="사용자 테이블 도움말"
      :columns="columns"
      :dataSource="data"
      :canResize="canResize"
      :loading="loading"
      :striped="striped"
      :bordered="border"
      :form-config="formConfig"
      :pagination="pagination"
      :use-search-form="true"
      :handle-search-info-fn="handleSearch"
      @columns-change="handleColumnChange"
      :show-table-setting="false"
    >
      <template #toolbar>
        <a-button type="primary" class="my-4">엑셀 다운로드</a-button>
      </template>
      <template #bodyCell="{ column }">
        <slot name="bodyCell" v-bind="{ column }">
          <template v-if="column.key === 'actions'">
            <a-button
              :ghost="true"
              type="success"
              @click="
                () => {
                  modRow(column);
                }
              "
              >수정</a-button
            >
            <a-button :ghost="true" type="danger" class="ml-2">삭제</a-button>
          </template>
        </slot>
      </template>
    </BasicTable>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import { userDataTypes, tblColType, setTableColumn } from './table';
  import { BasicTable, ColumnChangeParam, PaginationProps } from '/@/components/Table';
  const canResize = true;
  const loading = ref(false);
  const striped = ref(true);
  const border = ref(true);
  const pagination: PaginationProps = { pageSize: 50, current: 1 };

  const handleColumnChange = (data: ColumnChangeParam[]) => {
    console.log('ColumnChanged', data);
  };

  const modRow = (parm) => {
    console.log(parm);
  };

  const sampleData: userDataTypes[] = [];

  for (let i = 0; i < 10000; i++) {
    sampleData.push({
      index: `index ${i}`,
      id: 'dummy',
      name: 'dummy',
      email: 'dummy@basicit.co.kr',
      state: 'disabled',
    });
  }

  const tableData = ref(sampleData);
  let filterdData = ref([...tableData.value]);

  const handleSearch = () => {
    tableData.value = [];
  };

  const testCol: tblColType[] = [
    {
      key: 'index',
      label: '인덱스',
      type: 'Input',
      search: true,
    },
    {
      key: 'id',
      label: '아이디',
      type: 'Input',
      search: true,
    },
    {
      key: 'name',
      label: '이름',
      type: 'Input',
      search: true,
    },
    {
      key: 'email',
      label: '이메일',
      type: 'Input',
      search: true,
    },
    {
      key: 'state',
      label: '상태',
      type: 'Input',
      search: true,
    },
  ];

  const columns = setTableColumn(testCol).tblColConfig;
  const data = filterdData;
  const formConfig = setTableColumn(testCol).tblFormConfig;
</script>
