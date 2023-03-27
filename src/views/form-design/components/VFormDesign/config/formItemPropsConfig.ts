import { IAnyObject } from '../../../typings/base-type';
import { baseComponents, customComponents } from '../../../core/formItemConfig';

export const globalConfigState: { span: number } = {
  span: 24,
};
export interface IBaseFormAttrs {
  name: string; // 字段名
  label: string; // 字段标签
  component?: string; // 属性控件
  componentProps?: IAnyObject; // 传递给控件的属性
  exclude?: string[]; // 需要排除的控件
  includes?: string[]; // 符合条件的组件
  on?: IAnyObject;
  children?: IBaseFormAttrs[];
  category?: 'control' | 'input';
}

export interface IBaseFormItemControlAttrs extends IBaseFormAttrs {
  target?: 'props' | 'options'; // 绑定到对象下的某个目标key中
}

export const baseItemColumnProps: IBaseFormAttrs[] = [
  {
    name: 'span',
    label: '그리드 수',
    component: 'Slider',
    on: {
      change(value: number) {
        globalConfigState.span = value;
      },
    },
    componentProps: {
      max: 24,
      min: 0,
      marks: { 12: '' },
    },
  },

  {
    name: 'offset',
    label: '그리드 왼쪽 간격 수',
    component: 'Slider',
    componentProps: {
      max: 24,
      min: 0,
      marks: { 12: '' },
    },
  },
  {
    name: 'order',
    label: '그리드 순서, flex 레이아웃 모드에서 유효',
    component: 'Slider',
    componentProps: {
      max: 24,
      min: 0,
      marks: { 12: '' },
    },
  },
  {
    name: 'pull',
    label: '그리드 왼쪽으로 이동',
    component: 'Slider',
    componentProps: {
      max: 24,
      min: 0,
      marks: { 12: '' },
    },
  },
  {
    name: 'push',
    label: '그리드 오른쪽으로 이동',
    component: 'Slider',
    componentProps: {
      max: 24,
      min: 0,
      marks: { 12: '' },
    },
  },
  {
    name: 'xs',
    label: '<576px 반응형 그리드',
    component: 'Slider',
    componentProps: {
      max: 24,
      min: 0,
      marks: { 12: '' },
    },
  },
  {
    name: 'sm',
    label: '≥576px 반응형 그리드',
    component: 'Slider',
    componentProps: {
      max: 24,
      min: 0,
      marks: { 12: '' },
    },
  },
  {
    name: 'md',
    label: '≥768px 반응형 그리드',
    component: 'Slider',

    componentProps: {
      max: 24,
      min: 0,
      marks: { 12: '' },
    },
  },
  {
    name: 'lg',
    label: '≥992px 반응형 그리드',
    component: 'Slider',
    componentProps: {
      max: 24,
      min: 0,
      marks: { 12: '' },
    },
  },
  {
    name: 'xl',
    label: '≥1200px 반응형 그리드',
    component: 'Slider',
    componentProps: {
      max: 24,
      min: 0,
      marks: { 12: '' },
    },
  },
  {
    name: 'xxl',
    label: '≥1600px 반응형 그리드',
    component: 'Slider',
    componentProps: {
      max: 24,
      min: 0,
      marks: { 12: '' },
    },
  },
  {
    name: '≥2000px',
    label: '≥2000px 반응형 그리드',
    component: 'Slider',
    componentProps: {
      max: 24,
      min: 0,
      marks: { 12: '' },
    },
  },
];

// 控件属性面板的配置项
export const advanceFormItemColProps: IBaseFormAttrs[] = [
  {
    name: 'labelCol',
    label: 'label Col',
    component: 'Slider',
    componentProps: {
      max: 24,
      min: 0,
      marks: { 12: '' },
    },
    exclude: ['Grid'],
  },
  {
    name: 'wrapperCol',
    label: 'wrapper Col',
    component: 'Slider',
    componentProps: {
      max: 24,
      min: 0,
      marks: { 12: '' },
    },
    exclude: ['Grid'],
  },
];
// 컨트롤 속성 패널의 구성 항목
export const baseFormItemProps: IBaseFormAttrs[] = [
  {
    // 동적으로 컨트롤 유형을 전환합니다.
    name: 'component',
    label: '컨트롤-FormItem',
    component: 'Select',
    componentProps: {
      options: baseComponents
        .concat(customComponents)
        .map((item) => ({ value: item.component, label: item.label })),
    },
  },
  {
    name: 'label',
    label: '라벨',
    component: 'Input',
    componentProps: {
      type: 'Input',
      placeholder: '라벨을 입력하세요',
    },
    exclude: ['Grid'],
  },
  {
    name: 'field',
    label: '필드 식별자',
    component: 'Input',
    componentProps: {
      type: 'InputTextArea',
      placeholder: '필드 식별자를 입력하세요',
    },
    exclude: ['Grid'],
  },
  {
    name: 'helpMessage',
    label: 'helpMessage',
    component: 'Input',
    componentProps: {
      placeholder: '도움말 메시지를 입력하세요',
    },
    exclude: ['Grid'],
  },
];
// 控件属性面板的配置项
export const advanceFormItemProps: IBaseFormAttrs[] = [
  {
    name: 'labelAlign',
    label: '라벨 정렬',
    component: 'RadioGroup',
    componentProps: {
      options: [
        {
          label: '왼쪽',
          value: 'left',
        },
        {
          label: '오른쪽',
          value: 'right',
        },
      ],
    },
    exclude: ['Grid'],
  },

  {
    name: 'help',
    label: '도움말',
    component: 'Input',
    componentProps: {
      placeholder: '도움말을 입력하세요',
    },
    exclude: ['Grid'],
  },
  {
    name: 'extra',
    label: '추가 메시지',
    component: 'Input',
    componentProps: {
      type: 'InputTextArea',
      placeholder: '추가 메시지를 입력하세요',
    },
    exclude: ['Grid'],
  },
  {
    name: 'validateTrigger',
    label: 'validateTrigger',
    component: 'Input',
    componentProps: {
      type: 'InputTextArea',
      placeholder: 'validateTrigger를 입력하세요',
    },
    exclude: ['Grid'],
  },
  {
    name: 'validateStatus',
    label: '검증 상태',
    component: 'RadioGroup',
    componentProps: {
      options: [
        {
          label: '기본',
          value: '',
        },
        {
          label: '성공',
          value: 'success',
        },
        {
          label: '경고',
          value: 'warning',
        },
        {
          label: '오류',
          value: 'error',
        },
        {
          label: '검증 중',
          value: 'validating',
        },
      ],
    },
    exclude: ['Grid'],
  },
];

export const baseFormItemControlAttrs: IBaseFormItemControlAttrs[] = [
  {
    name: 'required',
    label: '필수 항목',
    component: 'Checkbox',
    exclude: ['alert'],
  },
  {
    name: 'hidden',
    label: '숨김',
    component: 'Checkbox',
    exclude: ['alert'],
  },
  {
    name: 'hiddenLabel',
    component: 'Checkbox',
    exclude: ['Grid'],
    label: '라벨 숨기기',
  },
  {
    name: 'colon',
    label: '라벨 뒤에 콜론 표시',
    component: 'Checkbox',
    componentProps: {},
    exclude: ['Grid'],
  },
  {
    name: 'hasFeedback',
    label: '입력 피드백',
    component: 'Checkbox',
    componentProps: {},
    includes: ['Input'],
  },
  {
    name: 'autoLink',
    label: '자동 연결',
    component: 'Checkbox',
    componentProps: {},
    includes: ['Input'],
  },
  {
    name: 'validateFirst',
    label: '검증 오류 발생 시 중지',
    component: 'Checkbox',
    componentProps: {},
    includes: ['Input'],
  },
];
