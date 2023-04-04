<template>
  <PageWrapper title="모달 컴포넌트 사용 예시">
    <Alert
      message="useModal을 사용하여 모달창을 열 수 있습니다. 드래그로 이동 가능 여부는 draggable 속성으로 제어할 수 있으며 모달 내부에서 동적으로 컨텐츠를 로드하고 자동으로 높이를 조정하는 것을 보여줍니다."
      show-icon
    />
    <a-button type="primary" class="my-4" @click="openModalLoading">
      모달 열기, 동적 데이터 로드 및 자동 높이 조정 (기본적으로 드래그 가능 / 전체 화면 가능)
    </a-button>

    <Alert message="내부 및 외부 동시 표시 및 숨김" show-icon />
    <a-button type="primary" class="my-4" @click="openModal2"> 모달 열기 </a-button>
    <Alert message="자동 높이 조정" show-icon />
    <a-button type="primary" class="my-4" @click="openModal3"> 모달 열기 </a-button>

    <Alert message="내부 및 외부 데이터 교환" show-icon />
    <a-button type="primary" class="my-4" @click="send"> 모달 열고 데이터 전달하기 </a-button>

    <Alert
      message="여러 모달창을 페이지 내에서 동적으로 사용하는 방법 (동적 컴포넌트 사용)"
      show-icon
    />
    <a-space>
      <a-button type="primary" class="my-4" @click="openTargetModal(1)"> 모달 1 열기 </a-button>
      <a-button type="primary" class="my-4" @click="openTargetModal(2)"> 모달 2 열기 </a-button>
      <a-button type="primary" class="my-4" @click="openTargetModal(3)"> 모달 3 열기 </a-button>
      <a-button type="primary" class="my-4" @click="openTargetModal(4)"> 모달 4 열기 </a-button>
    </a-space>

    <component :is="currentModal" v-model:visible="modalVisible" :userData="userData" />

    <Modal1 @register="register1" :minHeight="100" />
    <Modal2 @register="register2" />
    <Modal3 @register="register3" />
    <Modal4 @register="register4" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, shallowRef, ComponentOptions, ref, nextTick } from 'vue';
  import { Alert, Space } from 'ant-design-vue';
  import { useModal } from '/@/components/Modal';
  import Modal1 from './Modal1.vue';
  import Modal2 from './Modal2.vue';
  import Modal3 from './Modal3.vue';
  import Modal4 from './Modal4.vue';
  import { PageWrapper } from '/@/components/Page';

  export default defineComponent({
    components: { Alert, Modal1, Modal2, Modal3, Modal4, PageWrapper, ASpace: Space },
    setup() {
      const currentModal = shallowRef<Nullable<ComponentOptions>>(null);
      const [register1, { openModal: openModal1 }] = useModal();
      const [register2, { openModal: openModal2 }] = useModal();
      const [register3, { openModal: openModal3 }] = useModal();
      const [register4, { openModal: openModal4 }] = useModal();
      const modalVisible = ref<Boolean>(false);
      const userData = ref<any>(null);

      function send() {
        openModal4(true, {
          data: 'content',
          info: 'Info',
        });
      }
      function openModalLoading() {
        openModal1(true);
        // setModalProps({ loading: true });
        // setTimeout(() => {
        //   setModalProps({ loading: false });
        // }, 2000);
      }

      function openTargetModal(index) {
        switch (index) {
          case 1:
            currentModal.value = Modal1;
            break;
          case 2:
            currentModal.value = Modal2;
            break;
          case 3:
            currentModal.value = Modal3;
            break;
          default:
            currentModal.value = Modal4;
            break;
        }
        nextTick(() => {
          // `useModal` not working with dynamic component
          // passing data through `userData` prop
          userData.value = { data: Math.random(), info: 'Info222' };
          // open the target modal
          modalVisible.value = true;
        });
      }

      return {
        register1,
        openModal1,
        register2,
        openModal2,
        register3,
        openModal3,
        register4,
        openModal4,
        modalVisible,
        userData,
        openTargetModal,
        send,
        currentModal,
        openModalLoading,
      };
    },
  });
</script>
