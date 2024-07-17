<template>
  <div class="p-4">
    <BasicTable
      title="사용자"
      titleHelpMessage="사용자 테이블 도움말"
      :columns="testCol"
      :dataSource="MOCK_DATA"
      :canResize="canResize"
      :loading="loading"
      :striped="striped"
      :bordered="border"
      :pagination="pagination"
      :use-search-form="true"
      @columns-change="handleColumnChange"
      :show-table-setting="false"
      :show-index-column="false"
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
  import { BasicTable, ColumnChangeParam, PaginationProps } from '/@/components/Table';
  import { MOCK_DATA } from './mock';
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

  const testCol = [
    {
      dataIndex: 'id',
      label: 'id',
    },
    {
      dataIndex: 'albumId',
      label: 'albumId',
    },
    {
      dataIndex: 'title',
      label: 'title',
    },
    {
      dataIndex: 'url',
      label: 'url',
    },
    {
      dataIndex: 'thumbnailUrl',
      label: 'thumbnailUrl',
    },
  ];
</script>
