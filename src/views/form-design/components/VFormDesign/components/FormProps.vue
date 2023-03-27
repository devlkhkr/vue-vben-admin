<!--
 * @Description: 右侧属性面板控件 表单属性面板
-->
<template>
  <div class="properties-content">
    <Form class="properties-body" label-align="left" layout="vertical">
      <!--      <e-upload v-model="fileList"></e-upload>-->

      <FormItem label="폼 레이아웃">
        <RadioGroup button-style="solid" v-model:value="formConfig.layout">
          <RadioButton value="horizontal">가로형</RadioButton>
          <RadioButton value="vertical" :disabled="formConfig.labelLayout === 'Grid'">
            세로형
          </RadioButton>
          <RadioButton value="inline" :disabled="formConfig.labelLayout === 'Grid'">
            인라인
          </RadioButton>
        </RadioGroup>
      </FormItem>

      <!-- <Row> -->
      <FormItem label="라벨 레이아웃">
        <RadioGroup
          buttonStyle="solid"
          v-model:value="formConfig.labelLayout"
          @change="lableLayoutChange"
        >
          <RadioButton value="flex">Flex</RadioButton>
          <RadioButton value="Grid" :disabled="formConfig.layout !== 'horizontal'">
            Grid
          </RadioButton>
        </RadioGroup>
      </FormItem>
      <!-- </Row> -->
      <FormItem label="라벨 너비（px）" v-show="formConfig.labelLayout === 'flex'">
        <InputNumber
          :style="{ width: '100%' }"
          v-model:value="formConfig.labelWidth"
          :min="0"
          :step="1"
        />
      </FormItem>
      <div v-if="formConfig.labelLayout === 'Grid'">
        <FormItem label="labelCol">
          <Slider v-model:value="formConfig.labelCol!.span" :max="24" />
        </FormItem>
        <FormItem label="wrapperCol">
          <Slider v-model:value="formConfig.wrapperCol!.span" :max="24" />
        </FormItem>

        <FormItem label="라벨 정렬">
          <RadioGroup button-style="solid" v-model:value="formConfig.labelAlign">
            <RadioButton value="left">왼쪽정렬</RadioButton>
            <RadioButton value="right">오른쪽정렬</RadioButton>
          </RadioGroup>
        </FormItem>

        <FormItem label="컨트롤 크기">
          <RadioGroup button-style="solid" v-model:value="formConfig.size">
            <RadioButton value="default">기본값</RadioButton>
            <RadioButton value="small">작게</RadioButton>
            <RadioButton value="large">크게</RadioButton>
          </RadioGroup>
        </FormItem>
      </div>
      <FormItem label="폼 속성">
        <Col
          ><Checkbox v-model:checked="formConfig.colon" v-if="formConfig.layout == 'horizontal'"
            >라벨 뒤 콜론(:) 표시</Checkbox
          ></Col
        >
        <Col><Checkbox v-model:checked="formConfig.disabled">비활성화</Checkbox></Col>
        <Col
          ><Checkbox v-model:checked="formConfig.hideRequiredMark"
            >필수선택표시 숨기기</Checkbox
          ></Col
        >
      </FormItem>
    </Form>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { useFormDesignState } from '../../../hooks/useFormDesignState';
  import { InputNumber, Slider, Checkbox, Col, RadioChangeEvent } from 'ant-design-vue';
  // import RadioButtonGroup from '/@/components/RadioButtonGroup.vue';
  import { Form, FormItem, Radio } from 'ant-design-vue';
  export default defineComponent({
    name: 'FormProps',
    components: {
      InputNumber,
      Slider,
      Checkbox,
      RadioGroup: Radio.Group,
      RadioButton: Radio.Button,
      Form,
      FormItem,
      Col,
    },
    setup() {
      const { formConfig } = useFormDesignState();

      formConfig.value = formConfig.value || {
        labelCol: { span: 24 },
        wrapperCol: { span: 24 },
      };

      const lableLayoutChange = (e: RadioChangeEvent) => {
        if (e.target.value === 'Grid') {
          formConfig.value.layout = 'horizontal';
        }
      };

      return { formConfig, lableLayoutChange };
    },
  });
</script>
