/**
 * @description：表单配置
 */
import { IVFormComponent } from '../typings/v-form-component';
import { isArray } from 'lodash-es';
import { componentMap as VbenCmp, add } from '/@/components/Form/src/componentMap';
import { ComponentType } from '/@/components/Form/src/types';

import { componentMap as Cmp } from '../components';
import { Component } from 'vue';

const componentMap = new Map<string, Component>();

//如果有其它控件，可以在这里初始化

//注册Ant控件库
Cmp.forEach((value, key) => {
  componentMap.set(key, value);
  if (VbenCmp[key] == null) {
    add(key as ComponentType, value);
  }
});
//注册vben控件库
VbenCmp.forEach((value, key) => {
  componentMap.set(key, value);
});

export { componentMap };

/**
 * 设置自定义表单控件
 * @param {IVFormComponent | IVFormComponent[]} config
 */
export function setFormDesignComponents(config: IVFormComponent | IVFormComponent[]) {
  if (isArray(config)) {
    config.forEach((item) => {
      const { componentInstance: component, ...rest } = item;
      componentMap[item.component] = component;
      customComponents.push(Object.assign({ props: {} }, rest));
    });
  } else {
    const { componentInstance: component, ...rest } = config;
    componentMap[config.component] = component;
    customComponents.push(Object.assign({ props: {} }, rest));
  }
}

//外部设置的自定义控件
export const customComponents: IVFormComponent[] = [];

// 左侧控件列表与初始化的控件属性
// props.slotName,会在formitem级别生成一个slot,并绑定当前record值
// 属性props，类型为对象，不能为undefined或是null。
export const baseComponents: IVFormComponent[] = [
  {
    component: 'InputCountDown',
    label: '카운트다운',
    icon: 'line-md:iconify2',
    colProps: { span: 24 },
    field: '',
    componentProps: {},
  },
  {
    component: 'IconPicker',
    label: '아이콘',
    icon: 'line-md:iconify2',
    colProps: { span: 24 },
    field: '',
    componentProps: {},
  },
  {
    component: 'StrengthMeter',
    label: '암호강도',
    icon: 'wpf:password1',
    colProps: { span: 24 },
    field: '',
    componentProps: {},
  },
  {
    component: 'AutoComplete',
    label: '자동완성',
    icon: 'wpf:password1',
    colProps: { span: 24 },
    field: '',
    componentProps: {
      placeholder: '정규식을 입력하세요',
      options: [
        {
          value: '/^(?:(?:+|00)86)?1[3-9]d{9}$/',
          label: '휴대전화 번호',
        },
        {
          value: '/^((ht|f)tps?://)?[w-]+(.[w-]+)+:d{1,5}/?$/',
          label: '포트 번호가 있는 URL',
        },
      ],
    },
  },
  {
    component: 'Divider',
    label: '구분선',
    icon: 'radix-icons:divider-horizontal',
    colProps: { span: 24 },
    field: '',
    componentProps: {
      orientation: 'center',
      dashed: true,
    },
  },
  {
    component: 'Checkbox',
    label: '체크박스',
    icon: 'ant-design:check-circle-outlined',
    colProps: { span: 24 },
    field: '',
  },
  {
    component: 'CheckboxGroup',
    label: '체크 그룹',
    icon: 'ant-design:check-circle-filled',
    field: '',
    colProps: { span: 24 },
    componentProps: {
      options: [
        {
          label: '옵션1',
          value: '1',
        },
        {
          label: '옵션2',
          value: '2',
        },
      ],
    },
  },
  {
    component: 'Input',
    label: '입력창',
    icon: 'bi:input-cursor-text',
    field: '',
    colProps: { span: 24 },
    componentProps: {
      type: 'text',
    },
  },
  {
    component: 'InputNumber',
    label: '숫자 입력창',
    icon: 'ant-design:field-number-outlined',
    field: '',
    colProps: { span: 24 },
    componentProps: { style: 'width:200px' },
  },
  {
    component: 'InputTextArea',
    label: '텍스트 영역',
    icon: 'ant-design:file-text-filled',
    field: '',
    colProps: { span: 24 },
    componentProps: {},
  },

  {
    component: 'Select',
    label: '드롭다운',
    icon: 'gg:select',
    field: '',
    colProps: { span: 24 },
    componentProps: {
      options: [
        {
          label: '옵션1',
          value: '1',
        },
        {
          label: '옵션2',
          value: '2',
        },
      ],
    },
  },

  {
    component: 'Radio',
    label: '라디오',
    icon: 'ant-design:check-circle-outlined',
    field: '',
    colProps: { span: 24 },
    componentProps: {},
  },
  {
    component: 'RadioGroup',
    label: '라디오 그룹',
    icon: 'carbon:radio-button-checked',
    field: '',
    colProps: { span: 24 },
    componentProps: {
      options: [
        {
          label: '옵션1',
          value: '1',
        },
        {
          label: '옵션2',
          value: '2',
        },
      ],
    },
  },
  {
    component: 'DatePicker',
    label: '날짜 선택',
    icon: 'healthicons:i-schedule-school-date-time-outline',
    field: '',
    colProps: { span: 24 },
    componentProps: {},
  },
  {
    component: 'RangePicker',
    label: '날짜 범위',
    icon: 'healthicons:i-schedule-school-date-time-outline',
    field: '',
    colProps: { span: 24 },
    componentProps: {
      placeholder: ['시작 날짜', '끝 날짜'],
    },
  },
  {
    component: 'MonthPicker',
    label: '월 선택',
    icon: 'healthicons:i-schedule-school-date-time-outline',
    field: '',
    colProps: { span: 24 },
    componentProps: {
      placeholder: '월을 선택해주세요',
    },
  },
  {
    component: 'TimePicker',
    label: '시간 선택',
    icon: 'healthicons:i-schedule-school-date-time',
    field: '',
    colProps: { span: 24 },
    componentProps: {},
  },
  {
    component: 'Slider',
    label: '슬라이더',
    icon: 'vaadin:slider',
    field: '',
    colProps: { span: 24 },
    componentProps: {},
  },
  {
    component: 'Rate',
    label: '별점',
    icon: 'ic:outline-star-rate',
    field: '',
    colProps: { span: 24 },
    componentProps: {},
  },
  {
    component: 'Switch',
    label: '스위치',
    icon: 'entypo:switch',
    field: '',
    colProps: { span: 24 },
    componentProps: {},
  },
  {
    component: 'TreeSelect',
    label: '트리형 선택',
    icon: 'clarity:tree-view-line',
    field: '',
    colProps: { span: 24 },
    componentProps: {
      treeData: [
        {
          label: '옵션1',
          value: '1',
          children: [
            {
              label: '옵션3',
              value: '1-1',
            },
          ],
        },
        {
          label: '옵션2',
          value: '2',
        },
      ],
    },
  },

  {
    component: 'Upload',
    label: '업로드',
    icon: 'ant-design:upload-outlined',
    field: '',
    colProps: { span: 24 },
    componentProps: {
      api: () => 1,
    },
  },
  {
    component: 'Cascader',
    label: '폭포형 선택',
    icon: 'ant-design:check-outlined',
    field: '',
    colProps: { span: 24 },
    componentProps: {
      options: [
        {
          label: '옵션 1',
          value: '1',
          children: [
            {
              label: '옵션 3',
              value: '1-1',
            },
          ],
        },
        {
          label: '옵션 2',
          value: '2',
        },
      ],
    },
  },
  // {
  // component: 'Button',
  // label: '버튼',
  // icon: 'dashicons:button',
  // field: '',
  // colProps: { span: 24 },
  // hiddenLabel: true,
  // componentProps: {},
  // },
  // {
  // component: 'ColorPicker',
  // label: '색상 선택기',
  // icon: 'carbon:color-palette',
  // field: '',
  // colProps: { span: 24 },
  // componentProps: {
  // defaultValue: '',
  // value: '',
  // },
  // },

  {
    component: 'slot',
    label: '슬롯',
    icon: 'vs:timeslot-question',
    field: '',
    colProps: { span: 24 },
    componentProps: {
      slotName: 'slotName',
    },
  },
];

// https://next.antdv.com/components/transfer-cn
const transferControl = {
  component: 'Transfer',
  label: '트랜스퍼',
  icon: 'bx:bx-transfer-alt',
  field: '',
  colProps: { span: 24 },
  componentProps: {
    render: (item) => item.title,
    dataSource: [
      {
        key: 'key-1',
        title: '제목 1',
        description: '설명',
        disabled: false,
        chosen: true,
      },
      {
        key: 'key-2',
        title: '제목 2',
        description: '설명 2',
        disabled: true,
      },
      {
        key: 'key-3',
        title: '제목 3',
        description: '설명 3',
        disabled: false,
        chosen: true,
      },
    ],
  },
};

baseComponents.push(transferControl);

export const layoutComponents: IVFormComponent[] = [
  {
    field: '',
    component: 'Grid',
    label: '그리드',
    icon: 'icon-grid',
    componentProps: {},
    columns: [
      {
        span: 12,
        children: [],
      },
      {
        span: 12,
        children: [],
      },
    ],
    colProps: { span: 24 },
    options: {
      gutter: 0,
    },
  },
];
