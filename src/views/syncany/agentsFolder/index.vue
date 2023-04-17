<template>
  <PageWrapper :title="t('routes.syncany.agentsFolder')">
    <template #headerContent></template>
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { useI18n } from '/@/hooks/web/useI18n';
  import { PageWrapper } from '/@/components/Page';

  const { t } = useI18n();
</script>
