<template>
  <BasicTable @register="registerTable">
    <template #form-custom> 사용자 지정 슬롯 </template>
    <template #headerTop>
      <a-alert type="info" show-icon>
        <template #message>
          <template v-if="checkedKeys.length > 0">
            <span>선택된 {{ checkedKeys.length }}개 레코드(페이지 전체 선택 가능) </span>
            <a-button type="link" @click="checkedKeys = []" size="small">지우기</a-button>
          </template>
          <template v-else>
            <span>선택된 항목이 없습니다.</span>
          </template>
        </template>
      </a-alert>
    </template>
    <template #toolbar>
      <a-button type="primary" @click="getFormValues">양식 데이터 가져오기</a-button>
    </template>
  </BasicTable>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { BasicTable, useTable } from '/@/components/Table';
  import { getBasicColumns, getFormConfig } from './tableData';
  import { Alert } from 'ant-design-vue';

  import { demoListApi } from '/@/api/demo/table';

  export default defineComponent({
    components: { BasicTable, AAlert: Alert },
    setup() {
      const checkedKeys = ref<Array<string | number>>([]);
      const [registerTable, { getForm }] = useTable({
        title: '사용자',
        api: demoListApi,
        columns: getBasicColumns(),
        useSearchForm: true,
        formConfig: getFormConfig(),
        showTableSetting: true,
        tableSetting: { fullScreen: true },
        showIndexColumn: false,
        rowKey: 'id',
        rowSelection: {
          type: 'checkbox',
          selectedRowKeys: checkedKeys,
          onSelect: onSelect,
          onSelectAll: onSelectAll,
        },
      });

      function getFormValues() {
        console.log(getForm().getFieldsValue());
      }

      function onSelect(record, selected) {
        if (selected) {
          checkedKeys.value = [...checkedKeys.value, record.id];
        } else {
          checkedKeys.value = checkedKeys.value.filter((id) => id !== record.id);
        }
      }
      function onSelectAll(selected, selectedRows, changeRows) {
        const changeIds = changeRows.map((item) => item.id);
        if (selected) {
          checkedKeys.value = [...checkedKeys.value, ...changeIds];
        } else {
          checkedKeys.value = checkedKeys.value.filter((id) => {
            return !changeIds.includes(id);
          });
        }
      }

      return {
        registerTable,
        getFormValues,
        checkedKeys,
        onSelect,
        onSelectAll,
      };
    },
  });
</script>
