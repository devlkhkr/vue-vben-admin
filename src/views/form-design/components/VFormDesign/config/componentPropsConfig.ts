import { IBaseFormAttrs } from './formItemPropsConfig';

interface IBaseComponentProps {
  [key: string]: IBaseFormAttrs[];
}

type BaseFormAttrs = Omit<IBaseFormAttrs, 'tag'>;

export const baseComponentControlAttrs: Omit<IBaseFormAttrs, 'tag'>[] = [
  {
    // disabled 속성이 없는 컨트롤은 폼 컨트롤로 사용할 수 없습니다.
    name: 'disabled',
    label: '비활성화',
  },
  {
    // disabled 속성이 없는 컨트롤은 폼 컨트롤로 사용할 수 없습니다.
    name: 'autofocus',
    label: '자동 포커스',
    includes: [
      'Input',
      'Select',
      'InputTextArea',
      'InputNumber',
      'DatePicker',
      'RangePicker',
      'MonthPicker',
      'TimePicker',
      'Cascader',
      'TreeSelect',
      'Switch',
      'AutoComplete',
      'Slider',
    ],
  },
  {
    name: 'allowClear',
    label: '지울 수 있음',
    includes: [
      'Input',
      'Select',
      'InputTextArea',
      'InputNumber',
      'DatePicker',
      'RangePicker',
      'MonthPicker',
      'TimePicker',
      'Cascader',
      'TreeSelect',
      'AutoComplete',
    ],
  },
  { name: 'fullscreen', label: '전체 화면', includes: ['Calendar'] },
  {
    name: 'showSearch',
    label: '검색 가능',
    includes: ['Select', 'TreeSelect', 'Cascader', 'Transfer'],
  },
  {
    name: 'showTime',
    label: '시간 표시',
    includes: ['DatePicker', 'RangePicker', 'MonthPicker'],
  },
  {
    name: 'range',
    label: '양방향 슬라이더',
    includes: [],
  },
  {
    name: 'allowHalf',
    label: '반 값 허용',
    includes: ['Rate'],
  },
  {
    name: 'multiple',
    label: '다중 선택',
    includes: ['Select', 'TreeSelect', 'Upload'],
  },
  {
    name: 'directory',
    label: '디렉토리',
    includes: ['Upload'],
  },
  {
    name: 'withCredentials',
    label: '쿠키 전송',
    includes: ['Upload'],
  },
  {
    name: 'bordered',
    label: '테두리 여부',
    includes: ['Select', 'Input'],
  },
  {
    name: 'defaultActiveFirstOption',
    label: '첫 번째 옵션 강조',
    component: 'Checkbox',
    includes: ['Select', 'AutoComplete'],
  },
  {
    name: 'dropdownMatchSelectWidth',
    label: '드롭다운 메뉴와 선택기 너비 동일',
    component: 'Checkbox',
    includes: ['Select', 'TreeSelect', 'AutoComplete'],
  },
];

// 공용 속성
export const baseComponentCommonAttrs: Omit<IBaseFormAttrs, 'tag'>[] = [
  {
    name: 'size',
    label: '크기',
    component: 'RadioGroup',
    componentProps: {
      options: [
        {
          label: '기본',
          value: 'default',
        },
        {
          label: '크게',
          value: 'large',
        },
        {
          label: '작게',
          value: 'small',
        },
      ],
    },
    includes: ['InputNumber', 'Input', 'Cascader', 'Button'],
  },
  {
    name: 'placeholder',
    label: '플레이스홀더',
    component: 'Input',
    componentProps: {
      placeholder: '플레이스홀더를 입력하세요',
    },
    includes: [
      'AutoComplete',
      'InputTextArea',
      'InputNumber',
      'Input',
      'InputTextArea',
      'Select',
      'DatePicker',
      'MonthPicker',
      'TimePicker',
      'TreeSelect',
      'Cascader',
    ],
  },
  {
    name: 'style',
    label: '스타일',
    component: 'Input',
    componentProps: {
      placeholder: '스타일을 입력하세요',
    },
  },
  {
    name: 'open',
    label: '항상 드롭다운 메뉴 열기',
    component: 'RadioGroup',
    componentProps: {
      options: [
        {
          label: '기본값',
          value: undefined,
        },
        {
          label: '예',
          value: true,
        },
        {
          label: '아니요',
          value: false,
        },
      ],
    },
    includes: ['Select', 'AutoComplete'],
  },
];

const componentAttrs: IBaseComponentProps = {
  AutoComplete: [
    {
      name: 'backfill',
      label: '자동 채우기',
      component: 'Switch',
      componentProps: {
        span: 8,
      },
    },
    {
      name: 'defaultOpen',
      label: '드롭다운 메뉴 기본 열기',
      component: 'Checkbox',
    },
  ],
  IconPicker: [
    {
      name: 'mode',
      label: '모드',
      component: 'RadioGroup',
      componentProps: {
        options: [
          { label: 'ICONIFY', value: null },
          { label: 'SVG', value: 'svg' },
          // { label: '콤보박스', value: 'combobox' },
        ],
      },
    },
  ],

  // https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#%3Cinput%3E_types
  Input: [
    {
      name: 'type',
      label: '유형',
      component: 'Select',
      componentProps: {
        options: [
          { value: 'text', label: '텍스트' },
          { value: 'search', label: '검색' },
          { value: 'number', label: '숫자' },
          { value: 'range', label: '숫자 범위' },
          { value: 'password', label: '비밀번호' },
          { value: 'date', label: '날짜' },
          { value: 'datetime-local', label: '날짜-시간대 없음' },
          { value: 'time', label: '시간' },
          { value: 'month', label: '연월' },
          { value: 'week', label: '요일' },
          { value: 'email', label: '이메일' },
          { value: 'url', label: 'URL' },
          { value: 'tel', label: '전화번호' },
          { value: 'file', label: '파일' },
          { value: 'button', label: '버튼' },
          { value: 'submit', label: '제출 버튼' },
          { value: 'reset', label: '재설정 버튼' },
          { value: 'radio', label: '라디오 버튼' },
          { value: 'checkbox', label: '체크박스' },
          { value: 'color', label: '색상' },
          { value: 'image', label: '이미지' },
          { value: 'hidden', label: '숨김' },
        ],
      },
    },
    {
      name: 'defaultValue',
      label: '기본 값',
      component: 'Input',
      componentProps: {
        type: 'text',
        placeholder: '기본 값을 입력하세요',
      },
    },
    {
      name: 'prefix',
      label: '접두사',
      component: 'Input',
      componentProps: {
        type: 'text',
        placeholder: '접두사를 입력하세요',
      },
    },
    {
      name: 'suffix',
      label: '접미사',
      component: 'Input',
      componentProps: {
        type: 'text',
        placeholder: '접미사를 입력하세요',
      },
    },
    {
      name: 'addonBefore',
      label: '전위 라벨',
      component: 'Input',
      componentProps: {
        type: 'text',
        placeholder: '전위 라벨을 입력하세요',
      },
    },
    {
      name: 'addonAfter',
      label: '후위 라벨',
      component: 'Input',
      componentProps: {
        type: 'text',
        placeholder: '후위 라벨을 입력하세요',
      },
    },
    {
      name: 'maxLength',
      label: '최대 길이',
      component: 'InputNumber',
      componentProps: {
        type: 'text',
        placeholder: '최대 길이를 입력하세요',
      },
    },
  ],

  InputNumber: [
    {
      name: 'defaultValue',
      label: '기본 값',
      component: 'InputNumber',
      componentProps: {
        placeholder: '기본 값을 입력하세요',
      },
    },
    {
      name: 'min',
      label: '최소값',
      component: 'InputNumber',
      componentProps: {
        type: 'text',
        placeholder: '최소값을 입력하세요',
      },
    },
    {
      name: 'max',
      label: '최대값',
      component: 'InputNumber',
      componentProps: {
        type: 'text',
        placeholder: '최대값을 입력하세요',
      },
    },
    {
      name: 'precision',
      label: '숫자 정확도',
      component: 'InputNumber',
      componentProps: {
        type: 'text',
        placeholder: '숫자 정확도를 입력하세요',
      },
    },
    {
      name: 'step',
      label: '증감 간격',
      component: 'InputNumber',
      componentProps: {
        type: 'text',
        placeholder: '증감 간격을 입력하세요',
      },
    },
    {
      name: 'decimalSeparator',
      label: '소수점',
      component: 'Input',
      componentProps: { type: 'text', placeholder: '소수점을 입력하세요' },
    },
    {
      name: 'addonBefore',
      label: '앞 라벨',
      component: 'Input',
      componentProps: {
        type: 'text',
        placeholder: '앞 라벨을 입력하세요',
      },
    },
    {
      name: 'addonAfter',
      label: '뒷 라벨',
      component: 'Input',
      componentProps: {
        type: 'text',
        placeholder: '뒷 라벨을 입력하세요',
      },
    },
    {
      name: 'controls',
      label: '증감 버튼 표시 여부',
      component: 'Checkbox',
    },
    {
      name: 'keyboard',
      label: '키보드 단축키 사용 여부',
      component: 'Checkbox',
    },
    {
      name: 'stringMode',
      label: '문자열 값 모드',
      component: 'Checkbox',
    },
    {
      name: 'bordered',
      label: '테두리 표시 여부',
      component: 'Checkbox',
    },
  ],
  InputTextArea: [
    {
      name: 'defaultValue',
      label: '기본값',
      component: 'Input',
      componentProps: {
        type: 'text',
        placeholder: '기본값을 입력하세요',
      },
    },
    {
      name: 'maxlength',
      label: '최대 길이',
      component: 'InputNumber',
      componentProps: {
        placeholder: '최대 길이를 입력하세요',
      },
    },
    {
      name: 'minlength',
      label: '최소 길이',
      component: 'InputNumber',
      componentProps: {
        placeholder: '최소 길이를 입력하세요',
      },
    },
    {
      name: 'cols',
      label: '가로 길이',
      component: 'InputNumber',
      componentProps: {
        placeholder: '가로 길이를 입력하세요',
        min: 0,
      },
    },
    {
      name: 'rows',
      label: '세로 길이',
      component: 'InputNumber',
      componentProps: {
        placeholder: '세로 길이를 입력하세요',
        min: 0,
      },
    },
    {
      name: 'autosize',
      label: '내용에 맞게 자동 조정',
      component: 'Checkbox',
    },
    {
      name: 'showCount',
      label: '글자 수 표시',
      component: 'Checkbox',
    },
    {
      name: 'readonly',
      label: '읽기 전용',
      component: 'Checkbox',
    },
    {
      name: 'spellcheck',
      label: '맞춤법 검사',
      component: 'Checkbox',
    },
    {
      name: 'autocomplete',
      label: '자동 완성',
      component: 'RadioGroup',
      componentProps: {
        options: [
          { label: '정상', value: null },
          { label: '켜기', value: 'on' },
          { label: '끄기', value: 'off' },
        ],
      },
    },
    {
      name: 'autocorrect',
      label: '자동 수정',
      component: 'RadioGroup',
      componentProps: {
        options: [
          { label: '정상', value: null },
          { label: '켜기', value: 'on' },
          { label: '끄기', value: 'off' },
        ],
      },
    },
  ],
  Select: [
    {
      name: 'mode',
      label: '선택 모드 (기본값은 단일 선택)',
      component: 'RadioGroup',
      componentProps: {
        options: [
          { label: '단일 선택', value: null },
          { label: '다중 선택', value: 'multiple' },
          { label: '태그 선택', value: 'tags' },
          // { label: '콤보박스', value: 'combobox' },
        ],
      },
    },
    {
      name: 'autoClearSearchValue',
      label: '선택 항목 후 검색 상자 비우기',
      component: 'Checkbox',
    },
    {
      name: 'labelInValue',
      label: '옵션의 레이블을 값으로 래핑',
      component: 'Checkbox',
    },
    {
      name: 'showArrow',
      label: '화살표 표시',
      component: 'Checkbox',
    },
    {
      name: 'defaultOpen',
      label: '기본으로 열려있기',
      component: 'Checkbox',
    },
  ],
  Checkbox: [
    {
      name: 'indeterminate',
      label: 'indeterminate 설정',
      component: 'Checkbox',
    },
  ],
  CheckboxGroup: [],
  RadioGroup: [
    {
      name: 'defaultValue',
      label: '기본값',
      component: 'Input',
      componentProps: {
        placeholder: '기본값을 입력하세요',
      },
    },
    {
      name: 'buttonStyle',
      label: 'RadioButton 스타일',
      component: 'RadioGroup',
      componentProps: {
        options: [
          {
            label: 'outline',
            value: 'outline',
          },
          {
            label: 'solid',
            value: 'solid',
          },
        ],
      },
    },
    {
      name: 'optionType',
      label: 'options 타입',
      component: 'RadioGroup',
      componentProps: {
        options: [
          {
            label: '기본',
            value: 'default',
          },
          {
            label: '버튼',
            value: 'button',
          },
        ],
        // 다른 선택 항목의 값을 기반으로 자체 구성 값을 업데이트합니다.
        // compProp: 현재 구성 요소의 속성,
        // configProps: 현재 구성 요소의 모든 구성 옵션
        // self: 현재 구성의 componentProps 속성
        // 업데이트하려면 참 값을 반환합니다.
        // _propsFunc: (compProp, configProps, self) => {
        // console.log("i'm called");
        // console.log(compProp, configProps, self);
        // if (compProp['buttonStyle'] && compProp['buttonStyle'] == 'outline') {
        // if (!self['disabled']) {
        // self['disabled'] = true;
        // return 1;
        // }
        // } else {
        // if (self['disabled']) {
        // self['disabled'] = false;
        // return 1;
        // }
        // }

        //   // return prop.optionType == 'button';
        // },
      },
    },
    {
      name: 'size',
      label: '크기',
      component: 'RadioGroup',
      componentProps: {
        options: [
          {
            label: '기본',
            value: 'default',
          },
          {
            label: '큰',
            value: 'large',
          },
          {
            label: '작은',
            value: 'small',
          },
        ],
      },
    },
  ],
  DatePicker: [
    {
      name: 'format',
      label: '표시 형식(format)',
      component: 'Input',
      componentProps: {
        placeholder: 'YYYY-MM-DD',
      },
    },
    {
      name: 'valueFormat',
      label: '바인딩 값 형식(valueFormat)',
      component: 'Input',
      componentProps: {
        placeholder: 'YYYY-MM-DD',
      },
    },
  ],
  RangePicker: [
    {
      name: 'placeholder',
      label: '자리 표시자',
      children: [
        {
          name: '',
          label: '',
          component: 'Input',
        },
        {
          name: '',
          label: '',
          component: 'Input',
        },
      ],
    },
    {
      name: 'format',
      label: '표시 형식(format)',
      component: 'Input',
      componentProps: {
        placeholder: 'YYYY-MM-DD HH:mm:ss',
      },
    },
    {
      name: 'valueFormat',
      label: '값 형식（valueFormat）',
      component: 'Input',
      componentProps: {
        placeholder: 'YYYY-MM-DD',
      },
    },
  ],
  MonthPicker: [
    {
      name: 'format',
      label: '표시 형식(format)',
      component: 'Input',
      componentProps: {
        placeholder: 'YYYY-MM',
      },
    },
    {
      name: 'valueFormat',
      label: '바인딩 값 형식(valueFormat)',
      component: 'Input',
      componentProps: {
        placeholder: 'YYYY-MM',
      },
    },
  ],
  TimePicker: [
    {
      name: 'format',
      label: '표시 형식(format)',
      component: 'Input',
      componentProps: {
        placeholder: 'YYYY-MM',
      },
    },
    {
      name: 'valueFormat',
      label: '바인딩 값 형식(valueFormat)',
      component: 'Input',
      componentProps: {
        placeholder: 'YYYY-MM',
      },
    },
  ],
  Slider: [
    {
      name: 'defaultValue',
      label: '기본값',
      component: 'InputNumber',
      componentProps: {
        placeholder: '기본값 입력',
      },
    },
    {
      name: 'min',
      label: '최소값',
      component: 'InputNumber',
      componentProps: {
        placeholder: '최소값 입력',
      },
    },
    {
      name: 'max',
      label: '최대값',
      component: 'InputNumber',
      componentProps: {
        placeholder: '최대값 입력',
      },
    },
    {
      name: 'step',
      label: '단계',
      component: 'InputNumber',
      componentProps: {
        placeholder: '단계 입력',
      },
    },
    {
      name: 'tooltipPlacement',
      label: 'Tooltip 표시 위치',
      component: 'Select',
      componentProps: {
        options: [
          { value: 'top', label: '위' },
          { value: 'left', label: '왼쪽' },
          { value: 'right', label: '오른쪽' },
          { value: 'bottom', label: '아래' },
          { value: 'topLeft', label: '위 왼쪽' },
          { value: 'topRight', label: '위 오른쪽' },
          { value: 'bottomLeft', label: '아래 왼쪽' },
          { value: 'bottomRight', label: '아래 오른쪽' },
          { value: 'leftTop', label: '왼쪽 위' },
          { value: 'leftBottom', label: '왼쪽 아래' },
          { value: 'rightTop', label: '오른쪽 위' },
          { value: 'rightBottom', label: '오른쪽 아래' },
        ],
      },
    },
    {
      name: 'tooltipVisible',
      label: '항상 Tooltip 표시',
      component: 'Checkbox',
    },
    {
      name: 'dots',
      label: '단계별 이동',
      component: 'Checkbox',
    },
    {
      name: 'range',
      label: '이중 슬라이더 모드',
      component: 'Checkbox',
    },
    {
      name: 'reverse',
      label: '반전 좌표축',
      component: 'Checkbox',
    },
    {
      name: 'vertical',
      label: '수직 방향',
      component: '체크박스',
    },
    {
      name: 'included',
      label: '값이 포함 관계',
      component: '체크박스',
    },
  ],
  Rate: [
    {
      name: 'defaultValue',
      label: '기본값',
      component: 'InputNumber',
      componentProps: {
        placeholder: '기본값을 입력하세요',
      },
    },
    {
      name: 'character',
      label: '사용자 지정 문자',
      component: 'Input',
      componentProps: {
        placeholder: '사용자 지정 문자를 입력하세요',
      },
    },
    {
      name: 'count',
      label: '시작 총 수',
      component: 'InputNumber',
      componentProps: {
        placeholder: '시작 총 수를 입력하세요',
      },
    },
  ],
  Switch: [
    {
      name: 'checkedChildren',
      label: '선택된 경우 내용',
      component: 'Input',
      componentProps: {
        placeholder: '선택된 경우 내용을 입력하세요',
      },
    },
    {
      name: 'checkedValue',
      label: '선택된 경우 값',
      component: 'Input',
      componentProps: {
        placeholder: '선택된 경우 값 입력',
      },
    },
    {
      name: 'unCheckedChildren',
      label: '선택되지 않은 경우 내용',
      component: 'Input',
      componentProps: {
        placeholder: '선택되지 않은 경우 내용 입력',
      },
    },
    {
      name: 'unCheckedValue',
      label: '선택되지 않은 경우 값',
      component: 'Input',
      componentProps: {
        placeholder: '선택되지 않은 경우 값 입력',
      },
    },
    {
      name: 'loading',
      label: '로딩 중 스위치',
      component: 'Checkbox',
    },
    {
      name: 'size',
      label: '크기',
      component: 'RadioGroup',
      componentProps: {
        options: [
          {
            label: '기본',
            value: 'default',
          },
          {
            label: '작은 크기',
            value: 'small',
          },
        ],
      },
    },
  ],
  TreeSelect: [
    {
      name: 'defaultValue',
      label: '기본값',
      component: 'Input',
      componentProps: {
        placeholder: '기본값을 입력하세요',
      },
    },
    {
      name: 'searchPlaceholder',
      label: '검색 상자의 기본 텍스트',
      component: 'Input',
      componentProps: {
        placeholder: '검색 상자의 기본 텍스트를 입력하세요',
      },
    },
    {
      name: 'treeNodeFilterProp',
      label: '입력 항목 필터링에 대한 treeNode 속성',
      component: 'Input',
      componentProps: {
        defaultValue: 'value',
      },
    },
    {
      name: 'treeNodeLabelProp',
      label: '표시용 prop 설정',
      component: 'Input',
      componentProps: {
        defaultValue: 'title',
      },
    },
    {
      name: 'dropdownClassName',
      label: '드롭다운 메뉴의 className 속성',
      component: 'Input',
      componentProps: {
        placeholder: '드롭다운 메뉴의 className 속성을 입력하세요',
      },
    },
    {
      name: 'labelInValue',
      label: '옵션의 라벨을 value에 포함',
      component: 'Checkbox',
    },
    {
      name: 'treeIcon',
      label: 'TreeNode 타이틀 앞에 아이콘 표시',
      component: 'Checkbox',
    },
    {
      name: 'treeCheckable',
      label: '옵션 선택 가능',
      component: 'Checkbox',
    },
    {
      name: 'treeCheckStrictly',
      label: '노드 선택을 완전히 제어',
      component: 'Checkbox',
    },
    {
      name: 'treeDefaultExpandAll',
      label: '기본적으로 모두 펼치기',
      component: 'Checkbox',
    },
    {
      name: 'treeLine',
      label: '선 스타일 표시 여부',
      component: 'Checkbox',
    },
    {
      name: 'maxTagCount',
      label: '태그를 최대 몇 개까지 표시할지 결정',
      component: 'InputNumber',
      componentProps: {
        placeholder: '태그를 최대 몇 개까지 표시할지 입력하세요.',
      },
    },
    {
      name: 'size',
      label: '크기',
      component: 'RadioGroup',
      componentProps: {
        options: [
          {
            label: '기본',
            value: 'default',
          },
          {
            label: '작은 크기',
            value: 'small',
          },
        ],
      },
    },
  ],
  Cascader: [
    {
      name: 'expandTrigger',
      label: '하위 수준 펼치기 방식(기본값: 클릭)',
      component: 'RadioGroup',
      componentProps: {
        options: [
          {
            label: '클릭',
            value: 'click',
          },
          {
            label: '마우스 호버',
            value: 'hover',
          },
        ],
      },
    },
  ],
  Button: [
    {
      name: 'type',
      label: '유형',
      component: 'RadioGroup',
      componentProps: {
        options: [
          {
            label: '기본',
            value: 'default',
          },
          {
            label: '기본 색상(주요)',
            value: 'primary',
          },
          {
            label: '위험한 작업',
            value: 'danger',
          },
          {
            label: '점선',
            value: 'dashed',
          },
        ],
      },
    },
    {
      name: 'handle',
      label: '작업',
      component: 'RadioGroup',
      componentProps: {
        options: [
          {
            label: '제출',
            value: 'submit',
          },
          {
            label: '초기화',
            value: 'reset',
          },
        ],
      },
    },
  ],
  Upload: [
    {
      name: 'action',
      label: '업로드 주소',
      component: 'Input',
    },
    {
      name: 'name',
      label: '첨부 파일 매개 변수 이름',
      component: 'Input',
    },
  ],
  // ColorPicker: [
  // {
  // name: 'defaultValue',
  // label: '기본값',
  // component: 'AColorPicker',
  // },
  // ],
  slot: [
    {
      name: 'slotName',
      label: '슬롯 이름',
      component: 'Input',
    },
  ],
  Transfer: [
    // {
    // name: 'operations',
    // label: '작업 안내 문구 컬렉션, 위에서 아래로 정렬',
    // component: 'Input',
    // componentProps: {
    // type: 'text',
    // // defaultValue: ['>', '<'],
    // },
    // },
    // {
    // name: 'titles',
    // label: '제목 컬렉션, 왼쪽에서 오른쪽으로 정렬',
    // component: 'Input',
    // componentProps: {
    // type: 'text',
    // // defaultValue: ['', ''],
    // },
    // },
    {
      name: 'oneWay',
      label: '단방향 스타일로 표시',
      component: 'Checkbox',
    },
    {
      name: 'pagination',
      label: '페이지 스타일 사용',
      component: 'Checkbox',
    },
    {
      name: 'showSelectAll',
      label: '전체 선택 확인란 표시',
      component: 'Checkbox',
    },
  ],
};

function deleteProps(list: Omit<IBaseFormAttrs, 'tag'>[], key: string) {
  list.forEach((element, index) => {
    if (element.name == key) {
      list.splice(index, 1);
    }
  });
}

componentAttrs['StrengthMeter'] = componentAttrs['Input'];
componentAttrs['StrengthMeter'].push({
  name: 'visibilityToggle',
  label: '가시성 토글',
  component: 'Checkbox',
});

deleteProps(componentAttrs['StrengthMeter'], 'type');
deleteProps(componentAttrs['StrengthMeter'], 'prefix');
deleteProps(componentAttrs['StrengthMeter'], 'defaultValue');
deleteProps(componentAttrs['StrengthMeter'], 'suffix');
//组件属性
// name 控件的属性
export const baseComponentAttrs: IBaseComponentProps = componentAttrs;

//在所有的选项中查找需要配置项
const findCompoentProps = (props, name) => {
  const idx = props.findIndex((value: BaseFormAttrs, _index) => {
    return value.name == name;
  });
  if (idx) {
    if (props[idx].componentProps) {
      return props[idx].componentProps;
    }
  }
};

// 根据其它选项的值更新自身控件配置值
export const componentPropsFuncs = {
  RadioGroup: (compProp, options: BaseFormAttrs[]) => {
    const props = findCompoentProps(options, 'size');
    if (props) {
      if (compProp['optionType'] && compProp['optionType'] != 'button') {
        props['disabled'] = true;
        compProp['size'] = null;
      } else {
        props['disabled'] = false;
      }
    }
  },
};
