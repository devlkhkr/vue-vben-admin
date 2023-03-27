import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const agentsFolder: AppRouteModule = {
  path: '/agentsFolder',
  name: 'AgentsFolder',
  component: LAYOUT,
  redirect: '/agentsFolder/index',
  meta: {
    hideChildrenInMenu: true,
    icon: 'material-symbols:folder-open',
    title: t('routes.syncany.agentsFolder'),
    orderNo: 3,
  },
  children: [
    {
      path: 'index',
      name: 'AgentsFolderPage',
      component: () => import('/@/views/syncany/agentsFolder/index.vue'),
      meta: {
        title: t('routes.syncany.agentsFolder'),
        icon: 'simple-icons:about-dot-me',
        hideMenu: true,
      },
    },
  ],
};

export default agentsFolder;
