import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const stat: AppRouteModule = {
  path: '/notice',
  name: 'Notice',
  component: LAYOUT,
  redirect: '/notice/index',
  meta: {
    hideChildrenInMenu: true,
    icon: 'icon-park-outline:volume-notice',
    title: t('routes.syncany.notice'),
    orderNo: 9,
  },
  children: [
    {
      path: 'index',
      name: 'NoticePage',
      component: () => import('/@/views/syncany/notice/index.vue'),
      meta: {
        title: t('routes.syncany.notice'),
        icon: 'simple-icons:about-dot-me',
        hideMenu: true,
      },
    },
  ],
};

export default stat;
