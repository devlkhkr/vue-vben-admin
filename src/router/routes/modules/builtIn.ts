import type { AppRouteModule } from '/@/router/types';

import { getParentLayout, LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';
import { ExceptionEnum } from '/@/enums/exceptionEnum';
const IFrame = () => import('/@/views/sys/iframe/FrameBlank.vue');
const ExceptionPage = () => import('/@/views/sys/exception/Exception.vue');
import { RoleEnum } from '/@/enums/roleEnum';

const builtIn: AppRouteModule = {
  path: '/components',
  name: 'Components',
  component: LAYOUT,
  redirect: '/components/dashboard',
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    title: t('routes.syncany.builtIn'),
  },
  children: [
    // S : dashboard
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: LAYOUT,
      redirect: '/dashboard/analysis',
      meta: {
        orderNo: 10,
        icon: 'ion:grid-outline',
        title: t('routes.dashboard.dashboard'),
      },
      children: [
        {
          path: 'analysis',
          name: 'Analysis',
          component: () => import('/@/views/dashboard/analysis/index.vue'),
          meta: {
            // affix: true,
            title: t('routes.dashboard.analysis'),
          },
        },
        {
          path: 'workbench',
          name: 'Workbench',
          component: () => import('/@/views/dashboard/workbench/index.vue'),
          meta: {
            title: t('routes.dashboard.workbench'),
          },
        },
      ],
    },
    // E : dashboard
    // S : form design
    {
      path: '/form-designer',
      name: 'Form-designer',
      component: LAYOUT,
      meta: {
        orderNo: 10000,
        icon: 'ion:build-outline',
        title: t('routes.syncany.formDesign'),
      },
      children: [
        {
          path: 'design',
          name: 'Design',
          meta: {
            title: t('routes.syncany.formDesign'),
          },
          component: () => import('/@/views/form-design/index.vue'),
        },
      ],
    },
    // E : form design
    // S : charts
    {
      path: '/charts',
      name: 'Charts',
      component: LAYOUT,
      redirect: '/charts/echarts/map',
      meta: {
        orderNo: 500,
        icon: 'ion:bar-chart-outline',
        title: t('routes.demo.charts.charts'),
      },
      children: [
        {
          path: 'baiduMap',
          name: 'BaiduMap',
          meta: {
            title: t('routes.demo.charts.baiduMap'),
          },
          component: () => import('/@/views/demo/charts/map/Baidu.vue'),
        },
        {
          path: 'aMap',
          name: 'AMap',
          meta: {
            title: t('routes.demo.charts.aMap'),
          },
          component: () => import('/@/views/demo/charts/map/Gaode.vue'),
        },
        {
          path: 'googleMap',
          name: 'GoogleMap',
          meta: {
            title: t('routes.demo.charts.googleMap'),
          },
          component: () => import('/@/views/demo/charts/map/Google.vue'),
        },

        {
          path: 'echarts',
          name: 'Echarts',
          component: getParentLayout('Echarts'),
          meta: {
            title: 'Echarts',
          },
          redirect: '/charts/echarts/map',
          children: [
            {
              path: 'map',
              name: 'Map',
              component: () => import('/@/views/demo/charts/Map.vue'),
              meta: {
                title: t('routes.demo.charts.map'),
              },
            },
            {
              path: 'line',
              name: 'Line',
              component: () => import('/@/views/demo/charts/Line.vue'),
              meta: {
                title: t('routes.demo.charts.line'),
              },
            },
            {
              path: 'pie',
              name: 'Pie',
              component: () => import('/@/views/demo/charts/Pie.vue'),
              meta: {
                title: t('routes.demo.charts.pie'),
              },
            },
          ],
        },
      ],
    },
    // E : charts
    // S : components
    {
      path: '/comp',
      name: 'Comp',
      component: LAYOUT,
      redirect: '/comp/basic',
      meta: {
        orderNo: 30,
        icon: 'ion:layers-outline',
        title: t('routes.demo.comp.comp'),
      },

      children: [
        {
          path: 'basic',
          name: 'BasicDemo',
          component: () => import('/@/views/demo/comp/button/index.vue'),
          meta: {
            title: t('routes.demo.comp.basic'),
          },
        },

        {
          path: 'form',
          name: 'FormDemo',
          redirect: '/comp/form/basic',
          component: getParentLayout('FormDemo'),
          meta: {
            // icon: 'mdi:form-select',
            title: t('routes.demo.form.form'),
          },
          children: [
            {
              path: 'basic',
              name: 'FormBasicDemo',
              component: () => import('/@/views/demo/form/index.vue'),
              meta: {
                title: t('routes.demo.form.basic'),
              },
            },
            {
              path: 'useForm',
              name: 'UseFormDemo',
              component: () => import('/@/views/demo/form/UseForm.vue'),
              meta: {
                title: t('routes.demo.form.useForm'),
              },
            },
            {
              path: 'refForm',
              name: 'RefFormDemo',
              component: () => import('/@/views/demo/form/RefForm.vue'),
              meta: {
                title: t('routes.demo.form.refForm'),
              },
            },
            {
              path: 'advancedForm',
              name: 'AdvancedFormDemo',
              component: () => import('/@/views/demo/form/AdvancedForm.vue'),
              meta: {
                title: t('routes.demo.form.advancedForm'),
              },
            },
            {
              path: 'ruleForm',
              name: 'RuleFormDemo',
              component: () => import('/@/views/demo/form/RuleForm.vue'),
              meta: {
                title: t('routes.demo.form.ruleForm'),
              },
            },
            {
              path: 'dynamicForm',
              name: 'DynamicFormDemo',
              component: () => import('/@/views/demo/form/DynamicForm.vue'),
              meta: {
                title: t('routes.demo.form.dynamicForm'),
              },
            },
            {
              path: 'customerForm',
              name: 'CustomerFormDemo',
              component: () => import('/@/views/demo/form/CustomerForm.vue'),
              meta: {
                title: t('routes.demo.form.customerForm'),
              },
            },
            {
              path: 'appendForm',
              name: 'appendFormDemo',
              component: () => import('/@/views/demo/form/AppendForm.vue'),
              meta: {
                title: t('routes.demo.form.appendForm'),
              },
            },
            {
              path: 'tabsForm',
              name: 'tabsFormDemo',
              component: () => import('/@/views/demo/form/TabsForm.vue'),
              meta: {
                title: t('routes.demo.form.tabsForm'),
              },
            },
          ],
        },
        {
          path: 'table',
          name: 'TableDemo',
          redirect: '/comp/table/basic',
          component: getParentLayout('TableDemo'),
          meta: {
            // icon: 'carbon:table-split',
            title: t('routes.demo.table.table'),
          },

          children: [
            {
              path: 'basic',
              name: 'TableBasicDemo',
              component: () => import('/@/views/demo/table/Basic.vue'),
              meta: {
                title: t('routes.demo.table.basic'),
              },
            },
            {
              path: 'treeTable',
              name: 'TreeTableDemo',
              component: () => import('/@/views/demo/table/TreeTable.vue'),
              meta: {
                title: t('routes.demo.table.treeTable'),
              },
            },
            {
              path: 'fetchTable',
              name: 'FetchTableDemo',
              component: () => import('/@/views/demo/table/FetchTable.vue'),
              meta: {
                title: t('routes.demo.table.fetchTable'),
              },
            },
            {
              path: 'fixedColumn',
              name: 'FixedColumnDemo',
              component: () => import('/@/views/demo/table/FixedColumn.vue'),
              meta: {
                title: t('routes.demo.table.fixedColumn'),
              },
            },
            {
              path: 'customerCell',
              name: 'CustomerCellDemo',
              component: () => import('/@/views/demo/table/CustomerCell.vue'),
              meta: {
                title: t('routes.demo.table.customerCell'),
              },
            },
            {
              path: 'formTable',
              name: 'FormTableDemo',
              component: () => import('/@/views/demo/table/FormTable.vue'),
              meta: {
                title: t('routes.demo.table.formTable'),
              },
            },
            {
              path: 'useTable',
              name: 'UseTableDemo',
              component: () => import('/@/views/demo/table/UseTable.vue'),
              meta: {
                title: t('routes.demo.table.useTable'),
              },
            },
            {
              path: 'refTable',
              name: 'RefTableDemo',
              component: () => import('/@/views/demo/table/RefTable.vue'),
              meta: {
                title: t('routes.demo.table.refTable'),
              },
            },
            {
              path: 'multipleHeader',
              name: 'MultipleHeaderDemo',
              component: () => import('/@/views/demo/table/MultipleHeader.vue'),
              meta: {
                title: t('routes.demo.table.multipleHeader'),
              },
            },
            {
              path: 'mergeHeader',
              name: 'MergeHeaderDemo',
              component: () => import('/@/views/demo/table/MergeHeader.vue'),
              meta: {
                title: t('routes.demo.table.mergeHeader'),
              },
            },
            {
              path: 'expandTable',
              name: 'ExpandTableDemo',
              component: () => import('/@/views/demo/table/ExpandTable.vue'),
              meta: {
                title: t('routes.demo.table.expandTable'),
              },
            },
            {
              path: 'fixedHeight',
              name: 'FixedHeightDemo',
              component: () => import('/@/views/demo/table/FixedHeight.vue'),
              meta: {
                title: t('routes.demo.table.fixedHeight'),
              },
            },
            {
              path: 'footerTable',
              name: 'FooterTableDemo',
              component: () => import('/@/views/demo/table/FooterTable.vue'),
              meta: {
                title: t('routes.demo.table.footerTable'),
              },
            },
            {
              path: 'editCellTable',
              name: 'EditCellTableDemo',
              component: () => import('/@/views/demo/table/EditCellTable.vue'),
              meta: {
                title: t('routes.demo.table.editCellTable'),
              },
            },
            {
              path: 'editRowTable',
              name: 'EditRowTableDemo',
              component: () => import('/@/views/demo/table/EditRowTable.vue'),
              meta: {
                title: t('routes.demo.table.editRowTable'),
              },
            },
            {
              path: 'authColumn',
              name: 'AuthColumnDemo',
              component: () => import('/@/views/demo/table/AuthColumn.vue'),
              meta: {
                title: t('routes.demo.table.authColumn'),
              },
            },
            {
              path: 'resizeParentHeightTable',
              name: 'ResizeParentHeightTable',
              component: () => import('/@/views/demo/table/ResizeParentHeightTable.vue'),
              meta: {
                title: t('routes.demo.table.resizeParentHeightTable'),
              },
            },
            {
              path: 'vxeTable',
              name: 'VxeTableDemo',
              component: () => import('/@/views/demo/table/VxeTable.vue'),
              meta: {
                title: t('routes.demo.table.vxeTable'),
              },
            },
          ],
        },
        {
          path: 'transition',
          name: 'transitionDemo',
          component: () => import('/@/views/demo/comp/transition/index.vue'),
          meta: {
            title: t('routes.demo.comp.transition'),
          },
        },
        {
          path: 'cropper',
          name: 'CropperDemo',
          component: () => import('/@/views/demo/comp/cropper/index.vue'),
          meta: {
            title: t('routes.demo.comp.cropperImage'),
          },
        },

        {
          path: 'timestamp',
          name: 'TimeDemo',
          component: () => import('/@/views/demo/comp/time/index.vue'),
          meta: {
            title: t('routes.demo.comp.time'),
          },
        },
        {
          path: 'countTo',
          name: 'CountTo',
          component: () => import('/@/views/demo/comp/count-to/index.vue'),
          meta: {
            title: t('routes.demo.comp.countTo'),
          },
        },
        {
          path: 'tree',
          name: 'TreeDemo',
          redirect: '/comp/tree/basic',
          component: getParentLayout('TreeDemo'),
          meta: {
            // icon: 'clarity:tree-view-line',
            title: t('routes.demo.comp.tree'),
          },
          children: [
            {
              path: 'basic',
              name: 'BasicTreeDemo',
              component: () => import('/@/views/demo/tree/index.vue'),
              meta: {
                title: t('routes.demo.comp.treeBasic'),
              },
            },
            {
              path: 'editTree',
              name: 'EditTreeDemo',
              component: () => import('/@/views/demo/tree/EditTree.vue'),
              meta: {
                title: t('routes.demo.comp.editTree'),
              },
            },
            {
              path: 'actionTree',
              name: 'ActionTreeDemo',
              component: () => import('/@/views/demo/tree/ActionTree.vue'),
              meta: {
                title: t('routes.demo.comp.actionTree'),
              },
            },
          ],
        },
        {
          path: 'editor',
          name: 'EditorDemo',
          redirect: '/comp/editor/markdown',
          component: getParentLayout('EditorDemo'),
          meta: {
            // icon: 'carbon:table-split',
            title: t('routes.demo.editor.editor'),
          },
          children: [
            {
              path: 'json',
              component: () => import('/@/views/demo/editor/json/index.vue'),
              name: 'JsonEditorDemo',
              meta: {
                title: t('routes.demo.editor.jsonEditor'),
              },
            },
            {
              path: 'markdown',
              component: getParentLayout('MarkdownDemo'),
              name: 'MarkdownDemo',
              meta: {
                title: t('routes.demo.editor.markdown'),
              },
              redirect: '/comp/editor/markdown/index',
              children: [
                {
                  path: 'index',
                  name: 'MarkDownBasicDemo',
                  component: () => import('/@/views/demo/editor/markdown/index.vue'),
                  meta: {
                    title: t('routes.demo.editor.tinymceBasic'),
                  },
                },
                {
                  path: 'editor',
                  name: 'MarkDownFormDemo',
                  component: () => import('/@/views/demo/editor/markdown/Editor.vue'),
                  meta: {
                    title: t('routes.demo.editor.tinymceForm'),
                  },
                },
              ],
            },

            {
              path: 'tinymce',
              component: getParentLayout('TinymceDemo'),
              name: 'TinymceDemo',
              meta: {
                title: t('routes.demo.editor.tinymce'),
              },
              redirect: '/comp/editor/tinymce/index',
              children: [
                {
                  path: 'index',
                  name: 'TinymceBasicDemo',
                  component: () => import('/@/views/demo/editor/tinymce/index.vue'),
                  meta: {
                    title: t('routes.demo.editor.tinymceBasic'),
                  },
                },
                {
                  path: 'editor',
                  name: 'TinymceFormDemo',
                  component: () => import('/@/views/demo/editor/tinymce/Editor.vue'),
                  meta: {
                    title: t('routes.demo.editor.tinymceForm'),
                  },
                },
              ],
            },
          ],
        },
        {
          path: 'scroll',
          name: 'ScrollDemo',
          redirect: '/comp/scroll/basic',
          component: getParentLayout('ScrollDemo'),
          meta: {
            title: t('routes.demo.comp.scroll'),
          },
          children: [
            {
              path: 'basic',
              name: 'BasicScrollDemo',
              component: () => import('/@/views/demo/comp/scroll/index.vue'),
              meta: {
                title: t('routes.demo.comp.scrollBasic'),
              },
            },
            {
              path: 'action',
              name: 'ActionScrollDemo',
              component: () => import('/@/views/demo/comp/scroll/Action.vue'),
              meta: {
                title: t('routes.demo.comp.scrollAction'),
              },
            },
            {
              path: 'virtualScroll',
              name: 'VirtualScrollDemo',
              component: () => import('/@/views/demo/comp/scroll/VirtualScroll.vue'),
              meta: {
                title: t('routes.demo.comp.virtualScroll'),
              },
            },
          ],
        },

        {
          path: 'modal',
          name: 'ModalDemo',
          component: () => import('/@/views/demo/comp/modal/index.vue'),
          meta: {
            title: t('routes.demo.comp.modal'),
          },
        },
        {
          path: 'drawer',
          name: 'DrawerDemo',
          component: () => import('/@/views/demo/comp/drawer/index.vue'),
          meta: {
            title: t('routes.demo.comp.drawer'),
          },
        },
        {
          path: 'desc',
          name: 'DescDemo',
          component: () => import('/@/views/demo/comp/desc/index.vue'),
          meta: {
            title: t('routes.demo.comp.desc'),
          },
        },

        {
          path: 'lazy',
          name: 'LazyDemo',
          component: getParentLayout('LazyDemo'),
          redirect: '/comp/lazy/basic',
          meta: {
            title: t('routes.demo.comp.lazy'),
          },
          children: [
            {
              path: 'basic',
              name: 'BasicLazyDemo',
              component: () => import('/@/views/demo/comp/lazy/index.vue'),
              meta: {
                title: t('routes.demo.comp.lazyBasic'),
              },
            },
            {
              path: 'transition',
              name: 'BasicTransitionDemo',
              component: () => import('/@/views/demo/comp/lazy/Transition.vue'),
              meta: {
                title: t('routes.demo.comp.lazyTransition'),
              },
            },
          ],
        },
        {
          path: 'verify',
          name: 'VerifyDemo',
          component: getParentLayout('VerifyDemo'),
          redirect: '/comp/verify/drag',
          meta: {
            title: t('routes.demo.comp.verify'),
          },
          children: [
            {
              path: 'drag',
              name: 'VerifyDragDemo',
              component: () => import('/@/views/demo/comp/verify/index.vue'),
              meta: {
                title: t('routes.demo.comp.verifyDrag'),
              },
            },
            {
              path: 'rotate',
              name: 'VerifyRotateDemo',
              component: () => import('/@/views/demo/comp/verify/Rotate.vue'),
              meta: {
                title: t('routes.demo.comp.verifyRotate'),
              },
            },
          ],
        },
        //

        {
          path: 'qrcode',
          name: 'QrCodeDemo',
          component: () => import('/@/views/demo/comp/qrcode/index.vue'),
          meta: {
            title: t('routes.demo.comp.qrcode'),
          },
        },
        {
          path: 'strength-meter',
          name: 'StrengthMeterDemo',
          component: () => import('/@/views/demo/comp/strength-meter/index.vue'),
          meta: {
            title: t('routes.demo.comp.strength'),
          },
        },
        {
          path: 'upload',
          name: 'UploadDemo',
          component: () => import('/@/views/demo/comp/upload/index.vue'),
          meta: {
            title: t('routes.demo.comp.upload'),
          },
        },
        {
          path: 'loading',
          name: 'LoadingDemo',
          component: () => import('/@/views/demo/comp/loading/index.vue'),
          meta: {
            title: t('routes.demo.comp.loading'),
          },
        },
        {
          path: 'cardList',
          name: 'CardListDemo',
          component: () => import('/@/views/demo/comp/card-list/index.vue'),
          meta: {
            title: t('routes.demo.comp.cardList'),
          },
        },
      ],
    },
    // E : components
    // S : page functions
    {
      path: '/feat',
      name: 'FeatDemo',
      component: LAYOUT,
      redirect: '/feat/icon',
      meta: {
        orderNo: 19,
        icon: 'ion:git-compare-outline',
        title: t('routes.demo.feat.feat'),
      },

      children: [
        {
          path: 'icon',
          name: 'IconDemo',
          component: () => import('/@/views/demo/feat/icon/index.vue'),
          meta: {
            title: t('routes.demo.feat.icon'),
          },
        },
        {
          path: 'ws',
          name: 'WebSocket',
          component: () => import('/@/views/demo/feat/ws/index.vue'),
          meta: {
            title: t('routes.demo.feat.ws'),
          },
        },
        {
          path: 'request',
          name: 'RequestDemo',
          // @ts-ignore
          component: () => import('/@/views/demo/feat/request-demo/index.vue'),
          meta: {
            title: t('routes.demo.feat.requestDemo'),
          },
        },
        {
          path: 'session-timeout',
          name: 'SessionTimeout',
          component: () => import('/@/views/demo/feat/session-timeout/index.vue'),
          meta: {
            title: t('routes.demo.feat.sessionTimeout'),
          },
        },
        {
          path: 'print',
          name: 'Print',
          component: () => import('/@/views/demo/feat/print/index.vue'),
          meta: {
            title: t('routes.demo.feat.print'),
          },
        },
        {
          path: 'tabs',
          name: 'TabsDemo',
          component: () => import('/@/views/demo/feat/tabs/index.vue'),
          meta: {
            title: t('routes.demo.feat.tabs'),
            hideChildrenInMenu: true,
          },
          children: [
            {
              path: 'detail/:id',
              name: 'TabDetail',
              component: () => import('/@/views/demo/feat/tabs/TabDetail.vue'),
              meta: {
                currentActiveMenu: '/feat/tabs',
                title: t('routes.demo.feat.tabDetail'),
                hideMenu: true,
                dynamicLevel: 3,
                realPath: '/feat/tabs/detail',
              },
            },
          ],
        },
        {
          path: 'breadcrumb',
          name: 'BreadcrumbDemo',
          redirect: '/feat/breadcrumb/flat',
          component: getParentLayout('BreadcrumbDemo'),
          meta: {
            title: t('routes.demo.feat.breadcrumb'),
          },

          children: [
            {
              path: 'flat',
              name: 'BreadcrumbFlatDemo',
              component: () => import('/@/views/demo/feat/breadcrumb/FlatList.vue'),
              meta: {
                title: t('routes.demo.feat.breadcrumbFlat'),
              },
            },
            {
              path: 'flatDetail',
              name: 'BreadcrumbFlatDetailDemo',
              component: () => import('/@/views/demo/feat/breadcrumb/FlatListDetail.vue'),
              meta: {
                title: t('routes.demo.feat.breadcrumbFlatDetail'),
                hideMenu: true,
                hideTab: true,
                currentActiveMenu: '/feat/breadcrumb/flat',
              },
            },
            {
              path: 'children',
              name: 'BreadcrumbChildrenDemo',
              component: () => import('/@/views/demo/feat/breadcrumb/ChildrenList.vue'),
              meta: {
                title: t('routes.demo.feat.breadcrumbChildren'),
              },
              children: [
                {
                  path: 'childrenDetail',
                  name: 'BreadcrumbChildrenDetailDemo',
                  component: () => import('/@/views/demo/feat/breadcrumb/ChildrenListDetail.vue'),
                  meta: {
                    currentActiveMenu: '/feat/breadcrumb/children',
                    title: t('routes.demo.feat.breadcrumbChildrenDetail'),
                    //hideTab: true,
                    // hideMenu: true,
                  },
                },
              ],
            },
          ],
        },

        {
          path: 'context-menu',
          name: 'ContextMenuDemo',
          component: () => import('/@/views/demo/feat/context-menu/index.vue'),
          meta: {
            title: t('routes.demo.feat.contextMenu'),
          },
        },
        {
          path: 'download',
          name: 'DownLoadDemo',
          component: () => import('/@/views/demo/feat/download/index.vue'),
          meta: {
            title: t('routes.demo.feat.download'),
          },
        },
        {
          path: 'click-out-side',
          name: 'ClickOutSideDemo',
          component: () => import('/@/views/demo/feat/click-out-side/index.vue'),
          meta: {
            title: t('routes.demo.feat.clickOutSide'),
          },
        },
        {
          path: 'img-preview',
          name: 'ImgPreview',
          component: () => import('/@/views/demo/feat/img-preview/index.vue'),
          meta: {
            title: t('routes.demo.feat.imgPreview'),
          },
        },
        {
          path: 'copy',
          name: 'CopyDemo',
          component: () => import('/@/views/demo/feat/copy/index.vue'),
          meta: {
            title: t('routes.demo.feat.copy'),
          },
        },
        {
          path: 'msg',
          name: 'MsgDemo',
          component: () => import('/@/views/demo/feat/msg/index.vue'),
          meta: {
            title: t('routes.demo.feat.msg'),
          },
        },
        {
          path: 'watermark',
          name: 'WatermarkDemo',
          component: () => import('/@/views/demo/feat/watermark/index.vue'),
          meta: {
            title: t('routes.demo.feat.watermark'),
          },
        },
        {
          path: 'ripple',
          name: 'RippleDemo',
          component: () => import('/@/views/demo/feat/ripple/index.vue'),
          meta: {
            title: t('routes.demo.feat.ripple'),
          },
        },
        {
          path: 'full-screen',
          name: 'FullScreenDemo',
          component: () => import('/@/views/demo/feat/full-screen/index.vue'),
          meta: {
            title: t('routes.demo.feat.fullScreen'),
          },
        },
        {
          path: '/error-log',
          name: 'ErrorLog',
          component: () => import('/@/views/sys/error-log/index.vue'),
          meta: {
            title: t('routes.demo.feat.errorLog'),
          },
        },
        {
          path: 'excel',
          name: 'Excel',
          redirect: '/feat/excel/customExport',
          component: getParentLayout('Excel'),
          meta: {
            // icon: 'mdi:microsoft-excel',
            title: t('routes.demo.excel.excel'),
          },

          children: [
            {
              path: 'customExport',
              name: 'CustomExport',
              component: () => import('/@/views/demo/excel/CustomExport.vue'),
              meta: {
                title: t('routes.demo.excel.customExport'),
              },
            },
            {
              path: 'jsonExport',
              name: 'JsonExport',
              component: () => import('/@/views/demo/excel/JsonExport.vue'),
              meta: {
                title: t('routes.demo.excel.jsonExport'),
              },
            },
            {
              path: 'arrayExport',
              name: 'ArrayExport',
              component: () => import('/@/views/demo/excel/ArrayExport.vue'),
              meta: {
                title: t('routes.demo.excel.arrayExport'),
              },
            },
            {
              path: 'importExcel',
              name: 'ImportExcel',
              component: () => import('/@/views/demo/excel/ImportExcel.vue'),
              meta: {
                title: t('routes.demo.excel.importExcel'),
              },
            },
          ],
        },
        {
          path: 'testTab/:id',
          name: 'TestTab',
          component: () => import('/@/views/demo/feat/tab-params/index.vue'),
          meta: {
            title: t('routes.demo.feat.tab'),
            carryParam: true,
            hidePathForChildren: true,
          },
          children: [
            {
              path: 'testTab/id1',
              name: 'TestTab1',
              component: () => import('/@/views/demo/feat/tab-params/index.vue'),
              meta: {
                title: t('routes.demo.feat.tab1'),
                carryParam: true,
                ignoreRoute: true,
              },
            },
            {
              path: 'testTab/id2',
              name: 'TestTab2',
              component: () => import('/@/views/demo/feat/tab-params/index.vue'),
              meta: {
                title: t('routes.demo.feat.tab2'),
                carryParam: true,
                ignoreRoute: true,
              },
            },
          ],
        },
        {
          path: 'testParam/:id',
          name: 'TestParam',
          component: getParentLayout('TestParam'),
          meta: {
            title: t('routes.demo.feat.menu'),
            ignoreKeepAlive: true,
          },
          children: [
            {
              path: 'sub1',
              name: 'TestParam_1',
              component: () => import('/@/views/demo/feat/menu-params/index.vue'),
              meta: {
                title: t('routes.demo.feat.menu1'),
                ignoreKeepAlive: true,
              },
            },
            {
              path: 'sub2',
              name: 'TestParam_2',
              component: () => import('/@/views/demo/feat/menu-params/index.vue'),
              meta: {
                title: t('routes.demo.feat.menu2'),
                ignoreKeepAlive: true,
              },
            },
          ],
        },
      ],
    },
    // E : page functions
    // S : graphic editor
    {
      path: '/flow',
      name: 'FlowDemo',
      component: LAYOUT,
      redirect: '/flow/flowChart',
      meta: {
        orderNo: 5000,
        icon: 'tabler:chart-dots',
        title: t('routes.demo.flow.name'),
      },
      children: [
        {
          path: 'flowChart',
          name: 'flowChartDemo',
          component: () => import('/@/views/demo/comp/flow-chart/index.vue'),
          meta: {
            title: t('routes.demo.flow.flowChart'),
          },
        },
      ],
    },
    // E : graphic editor
    {
      path: '/frame',
      name: 'Frame',
      component: LAYOUT,
      redirect: '/frame/doc',
      meta: {
        orderNo: 1000,
        icon: 'ion:tv-outline',
        title: t('routes.demo.iframe.frame'),
      },

      children: [
        {
          path: 'doc',
          name: 'Doc',
          component: IFrame,
          meta: {
            frameSrc: 'https://doc.vvbin.cn/',
            title: t('routes.demo.iframe.doc'),
          },
        },
        {
          path: 'https://google.com/',
          name: 'DocExternal',
          component: IFrame,
          meta: {
            title: t('routes.demo.iframe.docExternal'),
          },
        },
      ],
    },
    // S : multi menu
    {
      path: '/level',
      name: 'Level',
      component: LAYOUT,
      redirect: '/level/menu1/menu1-1/menu1-1-1',
      meta: {
        orderNo: 2000,
        icon: 'ion:menu-outline',
        title: t('routes.demo.level.level'),
      },

      children: [
        {
          path: 'menu1',
          name: 'Menu1Demo',
          component: getParentLayout('Menu1Demo'),
          meta: {
            title: 'Menu1',
          },
          redirect: '/level/menu1/menu1-1/menu1-1-1',
          children: [
            {
              path: 'menu1-1',
              name: 'Menu11Demo',
              component: getParentLayout('Menu11Demo'),
              meta: {
                title: 'Menu1-1',
              },
              redirect: '/level/menu1/menu1-1/menu1-1-1',
              children: [
                {
                  path: 'menu1-1-1',
                  name: 'Menu111Demo',
                  component: () => import('/@/views/demo/level/Menu111.vue'),
                  meta: {
                    title: 'Menu111',
                  },
                },
              ],
            },
            {
              path: 'menu1-2',
              name: 'Menu12Demo',
              component: () => import('/@/views/demo/level/Menu12.vue'),
              meta: {
                title: 'Menu1-2',
              },
            },
          ],
        },
        {
          path: 'menu2',
          name: 'Menu2Demo',
          component: () => import('/@/views/demo/level/Menu2.vue'),
          meta: {
            title: 'Menu2',
            // ignoreKeepAlive: true,
          },
        },
      ],
    },
    // E : multi menu
    // S : permission
    {
      path: '/permission',
      name: 'Permission',
      component: LAYOUT,
      redirect: '/permission/front/page',
      meta: {
        orderNo: 15,
        icon: 'ion:key-outline',
        title: t('routes.demo.permission.permission'),
      },

      children: [
        {
          path: 'front',
          name: 'PermissionFrontDemo',
          component: getParentLayout('PermissionFrontDemo'),
          meta: {
            title: t('routes.demo.permission.front'),
          },
          children: [
            {
              path: 'page',
              name: 'FrontPageAuth',
              component: () => import('/@/views/demo/permission/front/index.vue'),
              meta: {
                title: t('routes.demo.permission.frontPage'),
              },
            },
            {
              path: 'btn',
              name: 'FrontBtnAuth',
              component: () => import('/@/views/demo/permission/front/Btn.vue'),
              meta: {
                title: t('routes.demo.permission.frontBtn'),
              },
            },
            {
              path: 'auth-pageA',
              name: 'FrontAuthPageA',
              component: () => import('/@/views/demo/permission/front/AuthPageA.vue'),
              meta: {
                title: t('routes.demo.permission.frontTestA'),
                roles: [RoleEnum.SUPER],
              },
            },
            {
              path: 'auth-pageB',
              name: 'FrontAuthPageB',
              component: () => import('/@/views/demo/permission/front/AuthPageB.vue'),
              meta: {
                title: t('routes.demo.permission.frontTestB'),
                roles: [RoleEnum.TEST],
              },
            },
          ],
        },
        {
          path: 'back',
          name: 'PermissionBackDemo',
          component: getParentLayout('PermissionBackDemo'),
          meta: {
            title: t('routes.demo.permission.back'),
          },
          children: [
            {
              path: 'page',
              name: 'BackAuthPage',
              component: () => import('/@/views/demo/permission/back/index.vue'),
              meta: {
                title: t('routes.demo.permission.backPage'),
              },
            },
            {
              path: 'btn',
              name: 'BackAuthBtn',
              component: () => import('/@/views/demo/permission/back/Btn.vue'),
              meta: {
                title: t('routes.demo.permission.backBtn'),
              },
            },
          ],
        },
      ],
    },
    // E : permission
    // S : page demo
    {
      path: '/page-demo',
      name: 'PageDemo',
      component: LAYOUT,
      redirect: '/page-demo/form/basic',
      meta: {
        orderNo: 20,
        icon: 'ion:aperture-outline',
        title: t('routes.demo.page.page'),
      },
      children: [
        // =============================form start=============================
        {
          path: 'form',
          name: 'FormPage',
          redirect: '/page-demo/form/basic',
          component: getParentLayout('FormPage'),
          meta: {
            title: t('routes.demo.page.form'),
          },
          children: [
            {
              path: 'basic',
              name: 'FormBasicPage',
              component: () => import('/@/views/demo/page/form/basic/index.vue'),
              meta: {
                title: t('routes.demo.page.formBasic'),
              },
            },
            {
              path: 'step',
              name: 'FormStepPage',
              component: () => import('/@/views/demo/page/form/step/index.vue'),
              meta: {
                title: t('routes.demo.page.formStep'),
              },
            },
            {
              path: 'high',
              name: 'FormHightPage',
              component: () => import('/@/views/demo/page/form/high/index.vue'),
              meta: {
                title: t('routes.demo.page.formHigh'),
              },
            },
          ],
        },
        // =============================form end=============================
        // =============================desc start=============================
        {
          path: 'desc',
          name: 'DescPage',
          component: getParentLayout('DescPage'),
          redirect: '/page-demo/desc/basic',
          meta: {
            title: t('routes.demo.page.desc'),
          },
          children: [
            {
              path: 'basic',
              name: 'DescBasicPage',
              component: () => import('/@/views/demo/page/desc/basic/index.vue'),
              meta: {
                title: t('routes.demo.page.descBasic'),
              },
            },
            {
              path: 'high',
              name: 'DescHighPage',
              component: () => import('/@/views/demo/page/desc/high/index.vue'),
              meta: {
                title: t('routes.demo.page.descHigh'),
              },
            },
          ],
        },
        // =============================desc end=============================

        // =============================result start=============================
        {
          path: 'result',
          name: 'ResultPage',
          redirect: '/page-demo/result/success',
          component: getParentLayout('ResultPage'),

          meta: {
            title: t('routes.demo.page.result'),
          },
          children: [
            {
              path: 'success',
              name: 'ResultSuccessPage',
              component: () => import('/@/views/demo/page/result/success/index.vue'),
              meta: {
                title: t('routes.demo.page.resultSuccess'),
              },
            },
            {
              path: 'fail',
              name: 'ResultFailPage',
              component: () => import('/@/views/demo/page/result/fail/index.vue'),
              meta: {
                title: t('routes.demo.page.resultFail'),
              },
            },
          ],
        },
        // =============================result end=============================

        // =============================account start=============================
        {
          path: 'account',
          name: 'AccountPage',
          component: getParentLayout('AccountPage'),
          redirect: '/page-demo/account/setting',
          meta: {
            title: t('routes.demo.page.account'),
          },
          children: [
            {
              path: 'center',
              name: 'AccountCenterPage',
              component: () => import('/@/views/demo/page/account/center/index.vue'),
              meta: {
                title: t('routes.demo.page.accountCenter'),
              },
            },
            {
              path: 'setting',
              name: 'AccountSettingPage',
              component: () => import('/@/views/demo/page/account/setting/index.vue'),
              meta: {
                title: t('routes.demo.page.accountSetting'),
              },
            },
          ],
        },
        // =============================account end=============================
        // =============================exception start=============================
        {
          path: 'exception',
          name: 'ExceptionPage',
          component: getParentLayout('ExceptionPage'),
          redirect: '/page-demo/exception/404',
          meta: {
            title: t('routes.demo.page.exception'),
          },
          children: [
            {
              path: '403',
              name: 'PageNotAccess',
              component: ExceptionPage,
              props: {
                status: ExceptionEnum.PAGE_NOT_ACCESS,
              },
              meta: {
                title: '403',
              },
            },
            {
              path: '404',
              name: 'PageNotFound',
              component: ExceptionPage,
              props: {
                status: ExceptionEnum.PAGE_NOT_FOUND,
              },
              meta: {
                title: '404',
              },
            },
            {
              path: '500',
              name: 'ServiceError',
              component: ExceptionPage,
              props: {
                status: ExceptionEnum.ERROR,
              },
              meta: {
                title: '500',
              },
            },
            {
              path: 'net-work-error',
              name: 'NetWorkError',
              component: ExceptionPage,
              props: {
                status: ExceptionEnum.NET_WORK_ERROR,
              },
              meta: {
                title: t('routes.demo.page.netWorkError'),
              },
            },
            {
              path: 'not-data',
              name: 'NotData',
              component: ExceptionPage,
              props: {
                status: ExceptionEnum.PAGE_NOT_DATA,
              },
              meta: {
                title: t('routes.demo.page.notData'),
              },
            },
          ],
        },
        // =============================exception end=============================
        // =============================list start=============================
        {
          path: 'list',
          name: 'ListPage',
          component: getParentLayout('ListPage'),
          redirect: '/page-demo/list/card',
          meta: {
            title: t('routes.demo.page.list'),
          },
          children: [
            {
              path: 'basic',
              name: 'ListBasicPage',
              component: () => import('/@/views/demo/page/list/basic/index.vue'),
              meta: {
                title: t('routes.demo.page.listBasic'),
              },
            },
            {
              path: 'card',
              name: 'ListCardPage',
              component: () => import('/@/views/demo/page/list/card/index.vue'),
              meta: {
                title: t('routes.demo.page.listCard'),
              },
            },
            {
              path: 'search',
              name: 'ListSearchPage',
              component: () => import('/@/views/demo/page/list/search/index.vue'),
              meta: {
                title: t('routes.demo.page.listSearch'),
              },
            },
          ],
        },
        // =============================list end=============================
      ],
    },
    // E : page demo
    // S : set up
    {
      path: '/setup',
      name: 'SetupDemo',
      component: LAYOUT,
      redirect: '/setup/index',
      meta: {
        orderNo: 90000,
        hideChildrenInMenu: true,
        icon: 'whh:paintroll',
        title: t('routes.demo.setup.page'),
      },
      children: [
        {
          path: 'index',
          name: 'SetupDemoPage',
          component: () => import('/@/views/demo/setup/index.vue'),
          meta: {
            title: t('routes.demo.setup.page'),
            icon: 'whh:paintroll',
            hideMenu: true,
          },
        },
      ],
    },
    // E : set up
    // S : system
    {
      path: '/system',
      name: 'System',
      component: LAYOUT,
      redirect: '/system/account',
      meta: {
        orderNo: 2000,
        icon: 'ion:settings-outline',
        title: t('routes.demo.system.moduleName'),
      },
      children: [
        {
          path: 'account',
          name: 'AccountManagement',
          meta: {
            title: t('routes.demo.system.account'),
            ignoreKeepAlive: false,
          },
          component: () => import('/@/views/demo/system/account/index.vue'),
        },
        {
          path: 'account_detail/:id',
          name: 'AccountDetail',
          meta: {
            hideMenu: true,
            title: t('routes.demo.system.account_detail'),
            ignoreKeepAlive: true,
            showMenu: false,
            currentActiveMenu: '/system/account',
          },
          component: () => import('/@/views/demo/system/account/AccountDetail.vue'),
        },
        {
          path: 'role',
          name: 'RoleManagement',
          meta: {
            title: t('routes.demo.system.role'),
            ignoreKeepAlive: true,
          },
          component: () => import('/@/views/demo/system/role/index.vue'),
        },

        {
          path: 'menu',
          name: 'MenuManagement',
          meta: {
            title: t('routes.demo.system.menu'),
            ignoreKeepAlive: true,
          },
          component: () => import('/@/views/demo/system/menu/index.vue'),
        },
        {
          path: 'dept',
          name: 'DeptManagement',
          meta: {
            title: t('routes.demo.system.dept'),
            ignoreKeepAlive: true,
          },
          component: () => import('/@/views/demo/system/dept/index.vue'),
        },
        {
          path: 'changePassword',
          name: 'ChangePassword',
          meta: {
            title: t('routes.demo.system.password'),
            ignoreKeepAlive: true,
          },
          component: () => import('/@/views/demo/system/password/index.vue'),
        },
      ],
    },
    // E : system
  ],
};

export default builtIn;
