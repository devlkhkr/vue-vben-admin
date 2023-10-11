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
        <a-button type="primary" class="my-4" @click="addUserBtnClick"> 사용자 추가 </a-button>
      </template>
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
    <component :is="userModal" v-model:visible="modalVisible" :userData="userData" />
    <userModal @register="register" />
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { userDataTypes, tblColType, setTableColumn } from './table';
  import { useModal } from '/@/components/Modal';
  import { BasicTable, ColumnChangeParam, PaginationProps } from '/@/components/Table';
  import userModal from './popup.vue';

  export default defineComponent({
    components: { BasicTable, userModal },
    setup() {
      const canResize = true;
      const loading = ref(false);
      const striped = ref(true);
      const border = ref(true);
      const pagination: PaginationProps = { pageSize: 10, current: 1 };

      const [register, { openModal: openModal }] = useModal();
      const modalVisible = ref<Boolean>(false);
      const userData = ref<any>(null);

      const handleColumnChange = (data: ColumnChangeParam[]) => {
        console.log('ColumnChanged', data);
      };

      const addUserBtnClick = () => {
        openModal(true, { data: 'test parm data', info: 'test parm info' });
      };

      const modRow = (parm) => {
        console.log(parm);
      };

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

      for (let i = 0; i < 100; i++) {
        sampleData.push({
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

      const searchedKeywords = ref({
        id: '',
        name: '',
        email: '',
        state: '',
      });

      const searchColData = (dataIdx: string, keyword: string) => {
        let searchTargetData = [...tableData.value];
        searchedKeywords.value[dataIdx] = keyword;
        let temp = searchTargetData.filter((data) => {
          let isMatch = true;
          for (let key in searchedKeywords.value) {
            if (
              searchedKeywords.value[key] &&
              data[key]
                ?.toString()
                .toLowerCase()
                .indexOf(searchedKeywords.value[key].toLowerCase()) === -1
            ) {
              isMatch = false;
              break;
            }
          }
          return isMatch;
        });
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
        pagination,
        handleColumnChange,
        addUserBtnClick,
        handleSearch,
        searchColData,

        register,
        userModal,
        openModal,
        modalVisible,
        userData,
        modRow,
      };
    },
  });
</script>
