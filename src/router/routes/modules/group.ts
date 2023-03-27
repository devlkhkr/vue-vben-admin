import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const group: AppRouteModule = {
  path: '/group',
  name: 'Group',
  component: LAYOUT,
  redirect: '/group/index',
  meta: {
    hideChildrenInMenu: true,
    icon: 'mdi:users',
    title: t('routes.syncany.group'),
    orderNo: 1,
  },
  children: [
    {
      path: 'index',
      name: 'groupPage',
      component: () => import('/@/views/syncany/group/index.vue'),
      meta: {
        title: t('routes.syncany.group'),
        icon: 'simple-icons:about-dot-me',
        hideMenu: true,
      },
    },
  ],
};

export default group;
