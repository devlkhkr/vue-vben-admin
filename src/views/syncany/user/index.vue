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
      showTableSetting
      :form-config="formConfig"
      :pagination="pagination"
      :use-search-form="true"
      :handle-search-info-fn="handleSearch"
      @columns-change="handleColumnChange"
    >
      <template #form-custom></template>
      <!-- <template #headerCell>
        <a-input />
      </template> -->
      <template #headerCell="{ column }">
        <div class="custom-header-cell" v-if="column.customTitle != undefined">
          {{ column.customTitle }}
        </div>
        <div class="custom-header-cell" v-else
          ><a-input
            :placeholder="`search ${column.dataIndex}`"
            :onChange="
              (event) => {
                searchColData(column.dataIndex, event.target.value);
              }
            "
        /></div>
      </template>
      <template #toolbar>
        <a-button type="primary" @click="toggleCanResize">
          {{ !canResize ? '테이블 접기' : '테이블 펼치기' }}
        </a-button>
        <a-button type="primary" @click="toggleBorder">
          {{ !border ? '테두리 표시' : '테두리 제거' }}
        </a-button>
        <a-button type="primary" @click="toggleLoading"> 재로드 </a-button>
        <a-button type="primary" @click="toggleStriped">
          {{ !striped ? '행 구분색 켜기' : '행 구분색 끄기' }}
        </a-button>
      </template>
    </BasicTable>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import {
    // getUserColumn,
    getUserData,
    userDataTypes,
    // getUserFormConfig,
    tblColType,
    setTableColumn,
  } from './table';
  import { BasicTable, ColumnChangeParam } from '/@/components/Table';

  // import { useI18n } from '/@/hooks/web/useI18n';
  // const { t } = useI18n();

  export default defineComponent({
    components: { BasicTable },
    setup() {
      const canResize = ref(false);
      const loading = ref(false);
      const striped = ref(true);
      const border = ref(true);
      const pagination = ref<any>(false);
      function toggleCanResize() {
        canResize.value = !canResize.value;
      }
      function toggleStriped() {
        striped.value = !striped.value;
      }
      function toggleLoading() {
        loading.value = true;
        setTimeout(() => {
          loading.value = false;
          pagination.value = { pageSize: 20 };
        }, 3000);
      }
      function toggleBorder() {
        border.value = !border.value;
      }

      function handleColumnChange(data: ColumnChangeParam[]) {
        console.log('ColumnChanged', data);
      }

      const sampleData: userDataTypes[] = [
        {
          id: 'crefia1',
          name: 'crefia',
          email: 'crefia@basicit.co.kr',
          state: 'active',
        },
        {
          id: 'basic1',
          name: 'basic',
          email: 'basic@basicit.co.kr',
          state: 'disabled',
        },
        {
          id: 'tester',
          name: 'tester',
          email: 'tester@basicit.co.kr',
          state: 'active',
        },
      ];

      // const searchForm: Object = {
      //   formItems: [
      //     {
      //       label: 'id',
      //       prop: 'id',
      //       type: 'input',
      //     },
      //     {
      //       label: 'name',
      //       prop: 'name',
      //       type: 'input',
      //     },
      //     {
      //       label: 'email',
      //       prop: 'email',
      //       type: 'input',
      //     },
      //     {
      //       label: 'state',
      //       prop: 'state',
      //       type: 'select',
      //       options: [
      //         {
      //           label: '활성',
      //           value: 'active',
      //         },
      //         {
      //           label: '비활성',
      //           value: 'disabled',
      //         },
      //       ],
      //     },
      //   ],
      // };

      const tableData = ref(getUserData(sampleData));
      let filterdData = ref([...tableData.value]);

      const handleSearch = () => {
        tableData.value = [];
      };

      const searchColData = (dataIdx: string, keyword: string) => {
        // console.log(dataIdx, keyword);
        let searchTargetData = [...tableData.value];
        let temp = searchTargetData.filter((data) => data[dataIdx]?.toString().includes(keyword));
        filterdData.value = temp;
      };

      const testCol: tblColType[] = [
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

      return {
        columns: setTableColumn(testCol).tblColConfig,
        data: filterdData,
        formConfig: setTableColumn(testCol).tblFormConfig,
        canResize,
        loading,
        striped,
        border,
        toggleStriped,
        toggleCanResize,
        toggleLoading,
        toggleBorder,
        pagination,
        handleColumnChange,
        // searchForm,
        handleSearch,
        searchColData,
      };
    },
  });
</script>
