<template>
  <PageWrapper :title="123">
    <template #headerContent></template>
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
        :pagination="pagination"
        @columns-change="handleColumnChange"
      >
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
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { BasicTable, ColumnChangeParam } from '/@/components/Table';
  import { getBasicColumns, getBasicData } from '/@/views/demo/table/tableData';
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
      return {
        columns: getBasicColumns(),
        data: getBasicData(),
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
      };
    },
  });
</script>
