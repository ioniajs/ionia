// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/roylin/Desktop/code/ionia/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": (props) => require('react').createElement(require('../../../../node_modules/@umijs/preset-dumi/lib/themes/default/layout.js').default, {
      ...{"menus":{"*":{"*":[{"path":"/","title":"快速上手","meta":{"order":0}},{"title":"开发规范","path":"/standard","meta":{"order":1},"children":[{"path":"/standard/git","title":"协作规范","meta":{"order":0}},{"path":"/standard/code","title":"编码规范","meta":{"order":1}},{"path":"/standard/style","title":"样式规范","meta":{"order":2}},{"path":"/standard/component","title":"组件规范","meta":{"order":3}},{"path":"/standard/protocol","title":"协议规范","meta":{"order":4}},{"path":"/standard/test","title":"测试规范","meta":{"order":5}},{"path":"/standard/document","title":"文档规范","meta":{"order":6}},{"path":"/standard/version","title":"版本规范","meta":{"order":8}}]},{"title":"基础架构","path":"/architecture","meta":{},"children":[{"path":"/architecture/structure","title":"架构分层","meta":{"order":0}},{"path":"/architecture/workspace","title":"工作区","meta":{"order":1}},{"path":"/architecture/micro-front-end","title":"微前端","meta":{"order":2}},{"path":"/architecture/component","title":"组件库","meta":{"order":3}},{"path":"/architecture/business-component","title":"业务组件","meta":{"order":4}},{"path":"/architecture/request","title":"网络请求","meta":{"order":5}},{"path":"/architecture/layout","title":"布局","meta":{"order":6}},{"path":"/architecture/route","title":"路由","meta":{"order":7}},{"path":"/architecture/tab-navigation","title":"页签导航","meta":{"order":8}},{"path":"/architecture/verification","title":"参数校验","meta":{"order":9}},{"path":"/architecture/exception","title":"异常捕获","meta":{"order":10}},{"path":"/architecture/proxy","title":"开发代理","meta":{"order":11}},{"path":"/architecture/mock","title":"接口模拟","meta":{"order":12}},{"path":"/architecture/state","title":"状态管理","meta":{"order":13}}]},{"title":"权限控制","path":"/auth","meta":{},"children":[{"path":"/auth/route","title":"路由权限","meta":{"order":0}},{"path":"/auth/feature","title":"功能权限","meta":{"order":1}},{"path":"/auth/api","title":"接口权限","meta":{"order":2}}]}]}},"locales":[],"navs":{},"title":"开发手册","mode":"doc"},
      ...props,
    }),
    "routes": [
      {
        "path": "/",
        "component": require('../../../docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1601434912074,
          "title": "快速上手",
          "order": 0,
          "slugs": [
            {
              "depth": 1,
              "value": "快速上手",
              "heading": "快速上手"
            }
          ]
        },
        "title": "快速上手"
      },
      {
        "path": "/architecture/business-component",
        "component": require('../../../docs/architecture/business-component.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/architecture/business-component.md",
          "updatedTime": 1601447547607,
          "title": "业务组件",
          "group": {
            "title": "基础架构",
            "path": "/architecture"
          },
          "order": 4,
          "slugs": [
            {
              "depth": 1,
              "value": "业务组件",
              "heading": "业务组件"
            }
          ]
        },
        "title": "业务组件"
      },
      {
        "path": "/architecture/component",
        "component": require('../../../docs/architecture/component.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/architecture/component.md",
          "updatedTime": 1601436087514,
          "title": "组件库",
          "group": {
            "title": "基础架构",
            "path": "/architecture"
          },
          "order": 3,
          "slugs": [
            {
              "depth": 1,
              "value": "组件库",
              "heading": "组件库"
            }
          ]
        },
        "title": "组件库"
      },
      {
        "path": "/architecture/exception",
        "component": require('../../../docs/architecture/exception.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/architecture/exception.md",
          "updatedTime": 1601436557017,
          "title": "异常捕获",
          "group": {
            "title": "基础架构",
            "path": "/architecture"
          },
          "order": 10,
          "slugs": [
            {
              "depth": 1,
              "value": "异常捕获",
              "heading": "异常捕获"
            }
          ]
        },
        "title": "异常捕获"
      },
      {
        "path": "/architecture/layout",
        "component": require('../../../docs/architecture/layout.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/architecture/layout.md",
          "updatedTime": 1601436291245,
          "title": "布局",
          "group": {
            "title": "基础架构",
            "path": "/architecture"
          },
          "order": 6,
          "slugs": [
            {
              "depth": 1,
              "value": "布局",
              "heading": "布局"
            }
          ]
        },
        "title": "布局"
      },
      {
        "path": "/architecture/micro-front-end",
        "component": require('../../../docs/architecture/micro-front-end.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/architecture/micro-front-end.md",
          "updatedTime": 1601436045563,
          "title": "微前端",
          "group": {
            "title": "基础架构",
            "path": "/architecture"
          },
          "order": 2,
          "slugs": [
            {
              "depth": 1,
              "value": "微前端",
              "heading": "微前端"
            }
          ]
        },
        "title": "微前端"
      },
      {
        "path": "/architecture/mock",
        "component": require('../../../docs/architecture/mock.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/architecture/mock.md",
          "updatedTime": 1601447074680,
          "title": "接口模拟",
          "group": {
            "title": "基础架构",
            "path": "/architecture"
          },
          "order": 12,
          "slugs": [
            {
              "depth": 1,
              "value": "接口模拟",
              "heading": "接口模拟"
            }
          ]
        },
        "title": "接口模拟"
      },
      {
        "path": "/architecture/proxy",
        "component": require('../../../docs/architecture/proxy.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/architecture/proxy.md",
          "updatedTime": 1601447094116,
          "title": "开发代理",
          "group": {
            "title": "基础架构",
            "path": "/architecture"
          },
          "order": 11,
          "slugs": [
            {
              "depth": 1,
              "value": "开发代理",
              "heading": "开发代理"
            }
          ]
        },
        "title": "开发代理"
      },
      {
        "path": "/architecture/request",
        "component": require('../../../docs/architecture/request.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/architecture/request.md",
          "updatedTime": 1601447551913,
          "title": "网络请求",
          "group": {
            "title": "基础架构",
            "path": "/architecture"
          },
          "order": 5,
          "slugs": [
            {
              "depth": 1,
              "value": "网络请求",
              "heading": "网络请求"
            }
          ]
        },
        "title": "网络请求"
      },
      {
        "path": "/architecture/route",
        "component": require('../../../docs/architecture/route.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/architecture/route.md",
          "updatedTime": 1601436362459,
          "title": "路由",
          "group": {
            "title": "基础架构",
            "path": "/architecture"
          },
          "order": 7,
          "slugs": [
            {
              "depth": 1,
              "value": "路由",
              "heading": "路由"
            }
          ]
        },
        "title": "路由"
      },
      {
        "path": "/architecture/state",
        "component": require('../../../docs/architecture/state.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/architecture/state.md",
          "updatedTime": 1601447539119,
          "title": "状态管理",
          "group": {
            "title": "基础架构",
            "path": "/architecture"
          },
          "order": 13,
          "slugs": [
            {
              "depth": 1,
              "value": "状态管理",
              "heading": "状态管理"
            }
          ]
        },
        "title": "状态管理"
      },
      {
        "path": "/architecture/structure",
        "component": require('../../../docs/architecture/structure.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/architecture/structure.md",
          "updatedTime": 1601435874799,
          "title": "架构分层",
          "group": {
            "title": "基础架构",
            "path": "/architecture"
          },
          "order": 0,
          "slugs": [
            {
              "depth": 1,
              "value": "架构分层",
              "heading": "架构分层"
            }
          ]
        },
        "title": "架构分层"
      },
      {
        "path": "/architecture/tab-navigation",
        "component": require('../../../docs/architecture/tab-navigation.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/architecture/tab-navigation.md",
          "updatedTime": 1601436414079,
          "title": "页签导航",
          "group": {
            "title": "基础架构",
            "path": "/architecture"
          },
          "order": 8,
          "slugs": [
            {
              "depth": 1,
              "value": "页签导航",
              "heading": "页签导航"
            }
          ]
        },
        "title": "页签导航"
      },
      {
        "path": "/architecture/verification",
        "component": require('../../../docs/architecture/verification.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/architecture/verification.md",
          "updatedTime": 1601436549859,
          "title": "参数校验",
          "group": {
            "title": "基础架构",
            "path": "/architecture"
          },
          "order": 9,
          "slugs": [
            {
              "depth": 1,
              "value": "参数校验",
              "heading": "参数校验"
            }
          ]
        },
        "title": "参数校验"
      },
      {
        "path": "/architecture/workspace",
        "component": require('../../../docs/architecture/workspace.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/architecture/workspace.md",
          "updatedTime": 1601436023740,
          "title": "工作区",
          "group": {
            "title": "基础架构",
            "path": "/architecture"
          },
          "order": 1,
          "slugs": [
            {
              "depth": 1,
              "value": "工作区",
              "heading": "工作区"
            }
          ]
        },
        "title": "工作区"
      },
      {
        "path": "/auth/api",
        "component": require('../../../docs/auth/api.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/auth/api.md",
          "updatedTime": 1601437419652,
          "title": "接口权限",
          "group": {
            "title": "权限控制",
            "path": "/auth"
          },
          "order": 2,
          "slugs": [
            {
              "depth": 1,
              "value": "接口权限",
              "heading": "接口权限"
            }
          ]
        },
        "title": "接口权限"
      },
      {
        "path": "/auth/feature",
        "component": require('../../../docs/auth/feature.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/auth/feature.md",
          "updatedTime": 1601437391586,
          "title": "功能权限",
          "group": {
            "title": "权限控制",
            "path": "/auth"
          },
          "order": 1,
          "slugs": [
            {
              "depth": 1,
              "value": "功能权限",
              "heading": "功能权限"
            }
          ]
        },
        "title": "功能权限"
      },
      {
        "path": "/auth/route",
        "component": require('../../../docs/auth/route.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/auth/route.md",
          "updatedTime": 1601437379725,
          "title": "路由权限",
          "group": {
            "title": "权限控制",
            "path": "/auth"
          },
          "order": 0,
          "slugs": [
            {
              "depth": 1,
              "value": "路由权限",
              "heading": "路由权限"
            }
          ]
        },
        "title": "路由权限"
      },
      {
        "path": "/standard/code",
        "component": require('../../../docs/standard/code.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/standard/code.md",
          "updatedTime": 1601435413155,
          "title": "编码规范",
          "group": {
            "title": "开发规范",
            "path": "/standard"
          },
          "order": 1,
          "slugs": [
            {
              "depth": 1,
              "value": "编码规范",
              "heading": "编码规范"
            }
          ]
        },
        "title": "编码规范"
      },
      {
        "path": "/standard/component",
        "component": require('../../../docs/standard/component.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/standard/component.md",
          "updatedTime": 1601435476163,
          "title": "组件规范",
          "group": {
            "title": "开发规范",
            "path": "/standard"
          },
          "order": 3,
          "slugs": [
            {
              "depth": 1,
              "value": "组件规范",
              "heading": "组件规范"
            }
          ]
        },
        "title": "组件规范"
      },
      {
        "path": "/standard/document",
        "component": require('../../../docs/standard/document.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/standard/document.md",
          "updatedTime": 1601435653608,
          "title": "文档规范",
          "group": {
            "title": "开发规范",
            "path": "/standard"
          },
          "order": 6,
          "slugs": [
            {
              "depth": 1,
              "value": "文档规范",
              "heading": "文档规范"
            }
          ]
        },
        "title": "文档规范"
      },
      {
        "path": "/standard/git",
        "component": require('../../../docs/standard/git.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/standard/git.md",
          "updatedTime": 1601452524992,
          "title": "协作规范",
          "group": {
            "title": "开发规范",
            "order": 1,
            "path": "/standard"
          },
          "order": 0,
          "slugs": [
            {
              "depth": 1,
              "value": "协作规范",
              "heading": "协作规范"
            },
            {
              "depth": 2,
              "value": "主要分支",
              "heading": "主要分支"
            },
            {
              "depth": 3,
              "value": "主分支（master）",
              "heading": "主分支（master）"
            },
            {
              "depth": 3,
              "value": "开发分支（develop）",
              "heading": "开发分支（develop）"
            },
            {
              "depth": 2,
              "value": "辅助分支",
              "heading": "辅助分支"
            },
            {
              "depth": 3,
              "value": "功能分支（feature）",
              "heading": "功能分支（feature）"
            },
            {
              "depth": 3,
              "value": "创建一个功能分支",
              "heading": "创建一个功能分支"
            },
            {
              "depth": 3,
              "value": "将功能分支合并到开发分支",
              "heading": "将功能分支合并到开发分支"
            },
            {
              "depth": 3,
              "value": "为什么要使用 --no-ff",
              "heading": "为什么要使用---no-ff"
            },
            {
              "depth": 2,
              "value": "发布分支（release）",
              "heading": "发布分支（release）"
            },
            {
              "depth": 3,
              "value": "创建一个发布分支",
              "heading": "创建一个发布分支"
            },
            {
              "depth": 3,
              "value": "完成发布",
              "heading": "完成发布"
            },
            {
              "depth": 2,
              "value": "补丁分支（hotfix）",
              "heading": "补丁分支（hotfix）"
            },
            {
              "depth": 3,
              "value": "创建一个补丁分支",
              "heading": "创建一个补丁分支"
            },
            {
              "depth": 3,
              "value": "完成补丁分支",
              "heading": "完成补丁分支"
            },
            {
              "depth": 2,
              "value": "图解",
              "heading": "图解"
            },
            {
              "depth": 2,
              "value": "约定式提交",
              "heading": "约定式提交"
            },
            {
              "depth": 3,
              "value": "为什么使用约定式提交",
              "heading": "为什么使用约定式提交"
            },
            {
              "depth": 3,
              "value": "示例",
              "heading": "示例"
            },
            {
              "depth": 2,
              "value": "总结",
              "heading": "总结"
            }
          ]
        },
        "title": "协作规范"
      },
      {
        "path": "/standard/protocol",
        "component": require('../../../docs/standard/protocol.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/standard/protocol.md",
          "updatedTime": 1601435569730,
          "title": "协议规范",
          "group": {
            "title": "开发规范",
            "path": "/standard"
          },
          "order": 4,
          "slugs": [
            {
              "depth": 1,
              "value": "协议规范",
              "heading": "协议规范"
            }
          ]
        },
        "title": "协议规范"
      },
      {
        "path": "/standard/style",
        "component": require('../../../docs/standard/style.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/standard/style.md",
          "updatedTime": 1601452603000,
          "title": "样式规范",
          "group": {
            "title": "开发规范",
            "path": "/standard"
          },
          "order": 2,
          "slugs": [
            {
              "depth": 1,
              "value": "样式规范",
              "heading": "样式规范"
            },
            {
              "depth": 2,
              "value": "常用的 CSS 类名",
              "heading": "常用的-css-类名"
            },
            {
              "depth": 2,
              "value": "BEM",
              "heading": "bem"
            },
            {
              "depth": 2,
              "value": "属性的书写顺序",
              "heading": "属性的书写顺序"
            }
          ]
        },
        "title": "样式规范"
      },
      {
        "path": "/standard/test",
        "component": require('../../../docs/standard/test.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/standard/test.md",
          "updatedTime": 1601435605003,
          "title": "测试规范",
          "group": {
            "title": "开发规范",
            "path": "/standard"
          },
          "order": 5,
          "slugs": [
            {
              "depth": 1,
              "value": "测试规范",
              "heading": "测试规范"
            }
          ]
        },
        "title": "测试规范"
      },
      {
        "path": "/standard/version",
        "component": require('../../../docs/standard/version.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/standard/version.md",
          "updatedTime": 1601452603000,
          "title": "版本规范",
          "group": {
            "title": "开发规范",
            "path": "/standard"
          },
          "order": 8,
          "slugs": [
            {
              "depth": 1,
              "value": "版本规范",
              "heading": "版本规范"
            },
            {
              "depth": 2,
              "value": "摘要",
              "heading": "摘要"
            },
            {
              "depth": 2,
              "value": "简介",
              "heading": "简介"
            },
            {
              "depth": 2,
              "value": "语义化版本控制规范（SemVer）",
              "heading": "语义化版本控制规范（semver）"
            },
            {
              "depth": 2,
              "value": "为什么要使用语义化的版本控制？",
              "heading": "为什么要使用语义化的版本控制？"
            },
            {
              "depth": 2,
              "value": "FAQ",
              "heading": "faq"
            },
            {
              "depth": 3,
              "value": "在 0.y.z 初始开发阶段，我该如何进行版本控制？",
              "heading": "在-0yz-初始开发阶段，我该如何进行版本控制？"
            },
            {
              "depth": 3,
              "value": "如何判断发布 1.0.0 版本的时机？",
              "heading": "如何判断发布-100-版本的时机？"
            },
            {
              "depth": 3,
              "value": "这不会阻碍快速开发和迭代吗？",
              "heading": "这不会阻碍快速开发和迭代吗？"
            },
            {
              "depth": 3,
              "value": "对于公共 API，若即使是最小但不向下兼容的改变都需要产生新的主版本号，岂不是很快就达到 42.0.0 版？",
              "heading": "对于公共-api，若即使是最小但不向下兼容的改变都需要产生新的主版本号，岂不是很快就达到-4200-版？"
            },
            {
              "depth": 3,
              "value": "为整个公共 API 写文件太费事了！",
              "heading": "为整个公共-api-写文件太费事了！"
            },
            {
              "depth": 3,
              "value": "万一不小心把一个不兼容的改版当成了次版本号发行了该怎么办？",
              "heading": "万一不小心把一个不兼容的改版当成了次版本号发行了该怎么办？"
            },
            {
              "depth": 3,
              "value": "如果我更新了自己的依赖但没有改变公共 API 该怎么办？",
              "heading": "如果我更新了自己的依赖但没有改变公共-api-该怎么办？"
            },
            {
              "depth": 3,
              "value": "如果我变更了公共 API 但无意中未遵循版本号的改动怎么办呢？（意即在修订等级的发布中，误将重大且不兼容的改变加到代码之中）",
              "heading": "如果我变更了公共-api-但无意中未遵循版本号的改动怎么办呢？（意即在修订等级的发布中，误将重大且不兼容的改变加到代码之中）"
            },
            {
              "depth": 3,
              "value": "我该如何处理即将弃用的功能？",
              "heading": "我该如何处理即将弃用的功能？"
            },
            {
              "depth": 3,
              "value": "语义化版本对于版本的字串长度是否有限制呢？",
              "heading": "语义化版本对于版本的字串长度是否有限制呢？"
            }
          ]
        },
        "title": "版本规范"
      },
      {
        "path": "/architecture",
        "meta": {},
        "exact": true,
        "redirect": "/architecture/structure"
      },
      {
        "path": "/auth",
        "meta": {},
        "exact": true,
        "redirect": "/auth/route"
      },
      {
        "path": "/standard",
        "meta": {},
        "exact": true,
        "redirect": "/standard/git"
      }
    ],
    "title": "开发手册"
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
