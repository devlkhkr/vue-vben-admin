import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const agents: AppRouteModule = {
  path: '/agents',
  name: 'Agents',
  component: LAYOUT,
  redirect: '/agents/index',
  meta: {
    hideChildrenInMenu: true,
    icon: 'material-symbols:monitor-outline',
    title: t('routes.syncany.agents'),
    orderNo: 2,
  },
  children: [
    {
      path: 'index',
      name: 'AgentsPage',
      component: () => import('/@/views/syncany/agents/index.vue'),
      meta: {
        title: t('routes.syncany.agents'),
        icon: 'simple-icons:about-dot-me',
        hideMenu: true,
      },
    },
  ],
};

export default agents;
