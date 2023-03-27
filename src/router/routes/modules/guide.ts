import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';
const IFrame = () => import('/@/views/sys/iframe/FrameBlank.vue');

const stat: AppRouteModule = {
  path: '/guide',
  name: 'Guide',
  component: LAYOUT,
  redirect: '/guide/index',
  meta: {
    orderNo: 1000,
    icon: 'material-symbols:book-outline',
    title: t('routes.syncany.guide'),
    hideChildrenInMenu: true,
  },

  children: [
    {
      path: 'index',
      name: 'Index',
      component: IFrame,
      meta: {
        frameSrc: 'https://v2-embednotion.com/vue-vben-admin-2d5706d42eaa4b7f88537277bb674c5f',
        title: t('routes.syncany.guide'),
        hideMenu: true,
      },
    },
  ],
};

export default stat;
