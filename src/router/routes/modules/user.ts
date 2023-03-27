import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const user: AppRouteModule = {
  path: '/user',
  name: 'User',
  component: LAYOUT,
  redirect: '/user/index',
  meta: {
    hideChildrenInMenu: true,
    icon: 'mdi:user',
    title: t('routes.syncany.user'),
    orderNo: 0,
  },
  children: [
    {
      path: 'index',
      name: 'UserPage',
      component: () => import('/@/views/syncany/user/index.vue'),
      meta: {
        title: t('routes.syncany.user'),
        icon: 'simple-icons:about-dot-me',
        hideMenu: true,
      },
    },
  ],
};

export default user;
