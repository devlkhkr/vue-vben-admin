<template>
  <PageWrapper
    contentFullHeight
    title="기본 구성 요소"
    content=" 기본 구성 요소는 ant-design-vue에 종속되며, 구성 요소 라이브러리에 이미 기본 구성 요소가 있으므로 프로젝트에서는 데모 표시를 다시하지 않습니다. (2차 래핑된 구성 요소는 예외입니다)"
  >
    <a-row :gutter="[20, 20]">
      <a-col :xl="10" :lg="24">
        <a-card title="BasicButton Color">
          <div class="my-2">
            <h3>success</h3>
            <div class="py-2">
              <a-button color="success"> 성공 </a-button>
              <a-button color="success" class="ml-2" disabled> 비활성화 </a-button>
              <a-button color="success" class="ml-2" loading> loading </a-button>
              <a-button color="success" type="link" class="ml-2"> link </a-button>
              <a-button color="success" type="link" class="ml-2" loading> loading link </a-button>
              <a-button color="success" type="link" class="ml-2" disabled> disabled link </a-button>
            </div>
          </div>

          <div class="my-2">
            <h3>warning</h3>
            <a-button color="warning"> 경고 </a-button>
            <a-button color="warning" class="ml-2" disabled> 비활성화 </a-button>
            <a-button color="warning" class="ml-2" loading> loading </a-button>
            <a-button color="warning" type="link" class="ml-2"> link </a-button>
            <a-button color="warning" type="link" class="ml-2" loading> loading link </a-button>
            <a-button color="warning" type="link" class="ml-2" disabled> disabled link </a-button>
          </div>

          <div class="my-2">
            <h3>error</h3>
            <a-button color="error"> 오류 </a-button>
            <a-button color="error" class="ml-2" disabled> 비활성화 </a-button>
            <a-button color="error" class="ml-2" loading> loading </a-button>
            <a-button color="error" type="link" class="ml-2"> link </a-button>
            <a-button color="error" type="link" class="ml-2" loading> loading link </a-button>
            <a-button color="error" type="link" class="ml-2" disabled> disabled link </a-button>
          </div>

          <div class="my-2">
            <h3>ghost</h3>
            <a-button ghost color="success" class="ml-2"> 투명배경버튼 성공 </a-button>
            <a-button ghost color="warning" class="ml-2"> 투명배경버튼 경고 </a-button>
            <a-button ghost color="error" class="ml-2"> 투명배경버튼 오류 </a-button>
            <a-button ghost type="dashed" color="warning" class="ml-2">
              투명배경버튼 경고dashed
            </a-button>
            <a-button ghost danger class="ml-2"> 투명배경버튼 위험 </a-button>
          </div>
        </a-card>
      </a-col>
      <a-col :xl="14" :lg="24">
        <a-card title="BasicButton Types">
          <div class="my-2">
            <h3>primary</h3>
            <a-button type="primary" pre-icon="mdi-page-next-outline"> 기본 버튼 </a-button>
            <a-button type="primary" class="ml-2" disabled> 비활성화 </a-button>
            <a-button type="primary" class="ml-2" danger pre-icon="mdi-page-next-outline">
              위험
            </a-button>
            <a-button type="primary" class="ml-2" loading> loading </a-button>
            <a-button type="link" class="ml-2"> link </a-button>
            <a-button type="link" class="ml-2" loading> loading link </a-button>
            <a-button type="link" class="ml-2" disabled> disabled link </a-button>
          </div>

          <div class="my-2">
            <h3>default</h3>
            <a-button type="default"> 기본 </a-button>
            <a-button type="default" class="ml-2" disabled> 비활성화 </a-button>
            <a-button type="default" class="ml-2" danger> 위험 </a-button>
            <a-button type="default" class="ml-2" loading> loading </a-button>
            <a-button type="link" class="ml-2"> link </a-button>
            <a-button type="link" class="ml-2" loading> loading link </a-button>
            <a-button type="link" class="ml-2" disabled> disabled link </a-button>
          </div>

          <div class="my-2">
            <h3>dashed</h3>
            <a-button type="dashed"> dashed </a-button>
            <a-button type="dashed" class="ml-2" disabled> 비활성화 </a-button>
            <a-button type="dashed" class="ml-2" danger> 위험 </a-button>
            <a-button type="dashed" class="ml-2" loading> loading </a-button>
          </div>

          <div class="my-2">
            <h3>일반 투명배경버튼은 일반적으로 색상 배경 아래에 사용됩니다.</h3>
            <div class="bg-gray-400 py-2">
              <a-button ghost type="primary" class="ml-2"> 투명배경버튼 기본 </a-button>
              <a-button ghost type="default" class="ml-2"> 투명배경버튼 기본 </a-button>
              <a-button ghost type="dashed" class="ml-2"> 투명배경버튼 dashed </a-button>
              <a-button ghost type="primary" class="ml-2" disabled> 비활성화 </a-button>
              <a-button ghost type="primary" class="ml-2" loading> 로딩 </a-button>
            </div>
            <!-- antd 按钮不能同时使用ghost和link -->
            <!--      <a-button ghost type="link" class="ml-2"> link </a-button>-->
            <!--      <a-button ghost type="link" class="ml-2" loading> loading link </a-button>-->
            <!--      <a-button ghost type="link" class="ml-2" disabled> disabled link </a-button>-->
          </div>
        </a-card>
      </a-col>
    </a-row>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import { Card, Row, Col } from 'ant-design-vue';
  export default defineComponent({
    components: { PageWrapper, ACard: Card, ARow: Row, ACol: Col },
  });
</script>
