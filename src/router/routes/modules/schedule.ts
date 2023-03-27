import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const schedule: AppRouteModule = {
  path: '/schedule',
  name: 'Schedule',
  component: LAYOUT,
  redirect: '/schedule/index',
  meta: {
    hideChildrenInMenu: true,
    icon: 'ion:calendar-outline',
    title: t('routes.syncany.schedule'),
    orderNo: 5,
  },
  children: [
    {
      path: 'index',
      name: 'SchedulePage',
      component: () => import('/@/views/syncany/schedule/index.vue'),
      meta: {
        title: t('routes.syncany.schedule'),
        icon: 'simple-icons:about-dot-me',
        hideMenu: true,
      },
    },
  ],
};

export default schedule;
