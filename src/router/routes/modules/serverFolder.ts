import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const serverFolder: AppRouteModule = {
  path: '/serverFolder',
  name: 'ServerFolder',
  component: LAYOUT,
  redirect: '/serverFolder/index',
  meta: {
    hideChildrenInMenu: true,
    icon: 'material-symbols:folder-open',
    title: t('routes.syncany.serverFolder'),
    orderNo: 3,
  },
  children: [
    {
      path: 'index',
      name: 'ServerFolderPage',
      component: () => import('/@/views/syncany/serverFolder/index.vue'),
      meta: {
        title: t('routes.syncany.serverFolder'),
        icon: 'simple-icons:about-dot-me',
        hideMenu: true,
      },
    },
  ],
};

export default serverFolder;
