// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from 'C:/Users/zhuliequn/Desktop/ionia/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": (props) => require('react').createElement(require('../../../../node_modules/@umijs/preset-dumi/lib/themes/default/layout.js').default, {
      ...{"menus":{"*":{"*":[{"path":"/","title":"快速上手","meta":{"order":0}},{"path":"/rely","title":"开发环境搭建","meta":{"order":1}},{"title":"开发规范","path":"/standard","meta":{"order":1},"children":[{"path":"/standard/git","title":"协作规范","meta":{"order":0}},{"path":"/standard/html","title":"HTML 规范","meta":{"order":1}},{"path":"/standard/css","title":"CSS 规范","meta":{"order":2}},{"path":"/standard/typescript","title":"TypeScript 规范","meta":{"order":3}},{"path":"/standard/react","title":"React 规范","meta":{"order":4}},{"path":"/standard/security","title":"安全规范","meta":{"order":5}},{"path":"/standard/license","title":"协议规范","meta":{"order":6}},{"path":"/standard/test","title":"测试规范","meta":{"order":7}},{"path":"/standard/version","title":"版本规范","meta":{"order":8}},{"path":"/standard/document","title":"文档规范","meta":{"order":9}}]},{"title":"基础架构","path":"/architecture","meta":{},"children":[{"path":"/architecture/workspace","title":"工作区","meta":{"order":1}},{"path":"/architecture/micro-front-end","title":"微前端","meta":{"order":2}},{"path":"/architecture/component","title":"组件库","meta":{"order":3}},{"path":"/architecture/business-component","title":"业务组件","meta":{"order":4}},{"path":"/architecture/request","title":"网络请求","meta":{"order":5}},{"path":"/architecture/layout","title":"布局","meta":{"order":6}},{"path":"/architecture/route","title":"路由","meta":{"order":7}},{"path":"/architecture/tab-navigation","title":"页签导航","meta":{"order":8}},{"path":"/architecture/verification","title":"参数校验","meta":{"order":9}},{"path":"/architecture/exception","title":"异常捕获","meta":{"order":10}},{"path":"/architecture/proxy","title":"开发代理","meta":{"order":11}},{"path":"/architecture/mock","title":"接口模拟","meta":{"order":12}},{"path":"/architecture/state","title":"状态管理","meta":{"order":13}}]},{"title":"权限控制","path":"/auth","meta":{},"children":[{"path":"/auth/route","title":"路由权限","meta":{"order":0}},{"path":"/auth/feature","title":"功能权限","meta":{"order":1}},{"path":"/auth/api","title":"接口权限","meta":{"order":2}}]}]}},"locales":[],"navs":{},"title":"开发手册","mode":"doc"},
      ...props,
    }),
    "routes": [
      {
        "path": "/",
        "component": require('../../../docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1602049835000,
          "title": "快速上手",
          "order": 0,
          "slugs": [
            {
              "depth": 1,
              "value": "快速上手",
              "heading": "快速上手"
            },
            {
              "depth": 2,
              "value": "环境",
              "heading": "环境"
            },
            {
              "depth": 2,
              "value": "启动项目",
              "heading": "启动项目"
            },
            {
              "depth": 2,
              "value": "启动组件库",
              "heading": "启动组件库"
            },
            {
              "depth": 2,
              "value": "启动文档",
              "heading": "启动文档"
            }
          ]
        },
        "title": "快速上手"
      },
      {
        "path": "/rely",
        "component": require('../../../docs/rely.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/rely.md",
          "updatedTime": 1603182077000,
          "title": "开发环境搭建",
          "order": 1,
          "slugs": [
            {
              "depth": 1,
              "value": "开发环境搭建",
              "heading": "开发环境搭建"
            },
            {
              "depth": 2,
              "value": "yarn、yrm的安装",
              "heading": "yarn、yrm的安装"
            },
            {
              "depth": 3,
              "value": "安装yarn",
              "heading": "安装yarn"
            },
            {
              "depth": 3,
              "value": "安装yrm",
              "heading": "安装yrm"
            },
            {
              "depth": 2,
              "value": "git的使用",
              "heading": "git的使用"
            },
            {
              "depth": 3,
              "value": "git本地与服务器进行绑定",
              "heading": "git本地与服务器进行绑定"
            },
            {
              "depth": 3,
              "value": "将项目从GitHub克隆下来",
              "heading": "将项目从github克隆下来"
            },
            {
              "depth": 3,
              "value": "项目提交步骤",
              "heading": "项目提交步骤"
            },
            {
              "depth": 2,
              "value": "下载Cmder终端",
              "heading": "下载cmder终端"
            },
            {
              "depth": 2,
              "value": "VScode环境搭建",
              "heading": "vscode环境搭建"
            },
            {
              "depth": 3,
              "value": "安装插件",
              "heading": "安装插件"
            },
            {
              "depth": 3,
              "value": "代码风格",
              "heading": "代码风格"
            },
            {
              "depth": 2,
              "value": "统一提交代码格式",
              "heading": "统一提交代码格式"
            },
            {
              "depth": 3,
              "value": "安装Commitizen cli工具",
              "heading": "安装commitizen-cli工具"
            }
          ]
        },
        "title": "开发环境搭建"
      },
      {
        "path": "/architecture/business-component",
        "component": require('../../../docs/architecture/business-component.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/architecture/business-component.md",
          "updatedTime": 1601452603000,
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
          "updatedTime": 1601738531000,
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
          "updatedTime": 1601452603000,
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
          "updatedTime": 1601452603000,
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
          "updatedTime": 1601452603000,
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
          "updatedTime": 1601452603000,
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
          "updatedTime": 1601452603000,
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
          "updatedTime": 1603251203000,
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
            },
            {
              "depth": 2,
              "value": "umi请求介绍",
              "heading": "umi请求介绍"
            },
            {
              "depth": 2,
              "value": "安装",
              "heading": "安装"
            },
            {
              "depth": 2,
              "value": "示例",
              "heading": "示例"
            },
            {
              "depth": 3,
              "value": "执行get请求",
              "heading": "执行get请求"
            },
            {
              "depth": 3,
              "value": "执行post请求",
              "heading": "执行post请求"
            },
            {
              "depth": 3,
              "value": "创建一个实例",
              "heading": "创建一个实例"
            },
            {
              "depth": 2,
              "value": "响应模式",
              "heading": "响应模式"
            },
            {
              "depth": 3,
              "value": "当options.getResponse === false时，响应模式将为'data'",
              "heading": "当optionsgetresponse--false时，响应模式将为data"
            },
            {
              "depth": 3,
              "value": "当options.getResponse === true时，响应模式为{data，response}",
              "heading": "当optionsgetresponse--true时，响应模式为data，response"
            },
            {
              "depth": 2,
              "value": "错误处理",
              "heading": "错误处理"
            },
            {
              "depth": 2,
              "value": "详细文档",
              "heading": "详细文档"
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
          "updatedTime": 1601452603000,
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
          "updatedTime": 1601452603000,
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
        "path": "/architecture/tab-navigation",
        "component": require('../../../docs/architecture/tab-navigation.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/architecture/tab-navigation.md",
          "updatedTime": 1601452603000,
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
          "updatedTime": 1601452603000,
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
          "updatedTime": 1601452603000,
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
          "updatedTime": 1601452603000,
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
          "updatedTime": 1601452603000,
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
          "updatedTime": 1601452603000,
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
        "path": "/standard/css",
        "component": require('../../../docs/standard/css.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/standard/css.md",
          "updatedTime": 1602311371000,
          "title": "CSS 规范",
          "group": {
            "title": "开发规范",
            "path": "/standard"
          },
          "order": 2,
          "slugs": [
            {
              "depth": 1,
              "value": "CSS 规范",
              "heading": "css-规范"
            },
            {
              "depth": 2,
              "value": "1 前言",
              "heading": "1-前言"
            },
            {
              "depth": 2,
              "value": "2 代码风格",
              "heading": "2-代码风格"
            },
            {
              "depth": 3,
              "value": "2.1 文件",
              "heading": "21-文件"
            },
            {
              "depth": 4,
              "value": "[建议] CSS 文件使用无 BOM 的 UTF-8 编码。",
              "heading": "建议-css-文件使用无-bom-的-utf-8-编码。"
            },
            {
              "depth": 3,
              "value": "2.2 缩进",
              "heading": "22-缩进"
            },
            {
              "depth": 4,
              "value": "[强制] 使用 4 个空格做为一个缩进层级，不允许使用 2 个空格 或 tab 字符。",
              "heading": "强制-使用-4-个空格做为一个缩进层级，不允许使用-2-个空格-或-tab-字符。"
            },
            {
              "depth": 3,
              "value": "2.3 空格",
              "heading": "23-空格"
            },
            {
              "depth": 4,
              "value": "[强制] 选择器 与 { 之间必须包含空格。",
              "heading": "强制-选择器-与--之间必须包含空格。"
            },
            {
              "depth": 4,
              "value": "[强制] 属性名 与之后的 : 之间不允许包含空格， : 与 属性值 之间必须包含空格。",
              "heading": "强制-属性名-与之后的--之间不允许包含空格，--与-属性值-之间必须包含空格。"
            },
            {
              "depth": 4,
              "value": "[强制] 列表型属性值 书写在单行时，, 后必须跟一个空格。",
              "heading": "强制-列表型属性值-书写在单行时，-后必须跟一个空格。"
            },
            {
              "depth": 3,
              "value": "2.4 行长度",
              "heading": "24-行长度"
            },
            {
              "depth": 4,
              "value": "[强制] 每行不得超过 120 个字符，除非单行不可分割。",
              "heading": "强制-每行不得超过-120-个字符，除非单行不可分割。"
            },
            {
              "depth": 4,
              "value": "[建议] 对于超长的样式，在样式值的 空格 处或 , 后换行，建议按逻辑分组。",
              "heading": "建议-对于超长的样式，在样式值的-空格-处或--后换行，建议按逻辑分组。"
            },
            {
              "depth": 3,
              "value": "2.5 选择器",
              "heading": "25-选择器"
            },
            {
              "depth": 4,
              "value": "[强制] 当一个 rule 包含多个 selector 时，每个选择器声明必须独占一行。",
              "heading": "强制-当一个-rule-包含多个-selector-时，每个选择器声明必须独占一行。"
            },
            {
              "depth": 4,
              "value": "[强制] >、+、~ 选择器的两边各保留一个空格。",
              "heading": "强制-、、-选择器的两边各保留一个空格。"
            },
            {
              "depth": 4,
              "value": "[强制] 属性选择器中的值必须用双引号包围。",
              "heading": "强制-属性选择器中的值必须用双引号包围。"
            },
            {
              "depth": 3,
              "value": "2.6 属性",
              "heading": "26-属性"
            },
            {
              "depth": 4,
              "value": "[强制] 属性定义必须另起一行。",
              "heading": "强制-属性定义必须另起一行。"
            },
            {
              "depth": 4,
              "value": "[强制] 属性定义后必须以分号结尾。",
              "heading": "强制-属性定义后必须以分号结尾。"
            },
            {
              "depth": 2,
              "value": "3 通用",
              "heading": "3-通用"
            },
            {
              "depth": 3,
              "value": "3.1 选择器",
              "heading": "31-选择器"
            },
            {
              "depth": 4,
              "value": "[强制] 如无必要，不得为 id、class 选择器添加类型选择器进行限定。",
              "heading": "强制-如无必要，不得为-id、class-选择器添加类型选择器进行限定。"
            },
            {
              "depth": 4,
              "value": "[建议] 选择器的嵌套层级应不大于 3 级，位置靠后的限定条件应尽可能精确。",
              "heading": "建议-选择器的嵌套层级应不大于-3-级，位置靠后的限定条件应尽可能精确。"
            },
            {
              "depth": 3,
              "value": "3.2 属性缩写",
              "heading": "32-属性缩写"
            },
            {
              "depth": 4,
              "value": "[建议] 在可以使用缩写的情况下，尽量使用属性缩写。",
              "heading": "建议-在可以使用缩写的情况下，尽量使用属性缩写。"
            },
            {
              "depth": 4,
              "value": "[建议] 使用 border / margin / padding 等缩写时，应注意隐含值对实际数值的影响，确实需要设置多个方向的值时才使用缩写。",
              "heading": "建议-使用-border--margin--padding-等缩写时，应注意隐含值对实际数值的影响，确实需要设置多个方向的值时才使用缩写。"
            },
            {
              "depth": 3,
              "value": "3.3 属性书写顺序",
              "heading": "33-属性书写顺序"
            },
            {
              "depth": 4,
              "value": "[建议] 同一 rule set 下的属性在书写时，应按功能进行分组，并以 Formatting Model（布局方式、位置） > Box Model（尺寸） > Typographic（文本相关） > Visual（视觉效果） 的顺序书写，以提高代码的可读性。",
              "heading": "建议-同一-rule-set-下的属性在书写时，应按功能进行分组，并以-formatting-model（布局方式、位置）--box-model（尺寸）--typographic（文本相关）--visual（视觉效果）-的顺序书写，以提高代码的可读性。"
            },
            {
              "depth": 3,
              "value": "3.4 清除浮动",
              "heading": "34-清除浮动"
            },
            {
              "depth": 4,
              "value": "[建议] 当元素需要撑起高度以包含内部的浮动元素时，通过对伪类设置 clear 或触发 BFC 的方式进行 clearfix。尽量不使用增加空标签的方式。",
              "heading": "建议-当元素需要撑起高度以包含内部的浮动元素时，通过对伪类设置-clear-或触发-bfc-的方式进行-clearfix。尽量不使用增加空标签的方式。"
            },
            {
              "depth": 3,
              "value": "3.5 !important",
              "heading": "35-important"
            },
            {
              "depth": 4,
              "value": "[建议] 尽量不使用 !important 声明。",
              "heading": "建议-尽量不使用-important-声明。"
            },
            {
              "depth": 4,
              "value": "[建议] 当需要强制指定样式且不允许任何场景覆盖时，通过标签内联和 !important 定义样式。",
              "heading": "建议-当需要强制指定样式且不允许任何场景覆盖时，通过标签内联和-important-定义样式。"
            },
            {
              "depth": 3,
              "value": "3.6 z-index",
              "heading": "36-z-index"
            },
            {
              "depth": 4,
              "value": "[建议] 将 z-index 进行分层，对文档流外绝对定位元素的视觉层级关系进行管理。",
              "heading": "建议-将-z-index-进行分层，对文档流外绝对定位元素的视觉层级关系进行管理。"
            },
            {
              "depth": 4,
              "value": "[建议] 在可控环境下，期望显示在最上层的元素，z-index 指定为 999999。",
              "heading": "建议-在可控环境下，期望显示在最上层的元素，z-index-指定为-999999。"
            },
            {
              "depth": 4,
              "value": "[建议] 在第三方环境下，期望显示在最上层的元素，通过标签内联和 !important，将 z-index 指定为 2147483647。",
              "heading": "建议-在第三方环境下，期望显示在最上层的元素，通过标签内联和-important，将-z-index-指定为-2147483647。"
            },
            {
              "depth": 2,
              "value": "4 值与单位",
              "heading": "4-值与单位"
            },
            {
              "depth": 3,
              "value": "4.1 文本",
              "heading": "41-文本"
            },
            {
              "depth": 4,
              "value": "[强制] 文本内容必须用双引号包围。",
              "heading": "强制-文本内容必须用双引号包围。"
            },
            {
              "depth": 3,
              "value": "4.2 数值",
              "heading": "42-数值"
            },
            {
              "depth": 4,
              "value": "[强制] 当数值为 0 - 1 之间的小数时，省略整数部分的 0。",
              "heading": "强制-当数值为-0---1-之间的小数时，省略整数部分的-0。"
            },
            {
              "depth": 3,
              "value": "4.3 url()",
              "heading": "43-url"
            },
            {
              "depth": 4,
              "value": "[强制] url() 函数中的路径不加引号。",
              "heading": "强制-url-函数中的路径不加引号。"
            },
            {
              "depth": 4,
              "value": "[建议] url() 函数中的绝对路径可省去协议名。",
              "heading": "建议-url-函数中的绝对路径可省去协议名。"
            },
            {
              "depth": 3,
              "value": "4.4 长度",
              "heading": "44-长度"
            },
            {
              "depth": 4,
              "value": "[强制] 长度为 0 时须省略单位。 (也只有长度单位可省)",
              "heading": "强制-长度为-0-时须省略单位。-也只有长度单位可省"
            },
            {
              "depth": 3,
              "value": "4.5 颜色",
              "heading": "45-颜色"
            },
            {
              "depth": 4,
              "value": "[强制] RGB 颜色值必须使用十六进制记号形式 #rrggbb。不允许使用 rgb()。",
              "heading": "强制-rgb-颜色值必须使用十六进制记号形式-rrggbb。不允许使用-rgb。"
            },
            {
              "depth": 4,
              "value": "[强制] 颜色值可以缩写时，必须使用缩写形式。",
              "heading": "强制-颜色值可以缩写时，必须使用缩写形式。"
            },
            {
              "depth": 4,
              "value": "[强制] 颜色值不允许使用命名色值。",
              "heading": "强制-颜色值不允许使用命名色值。"
            },
            {
              "depth": 4,
              "value": "[建议] 颜色值中的英文字符采用小写。如不用小写也需要保证同一项目内保持大小写一致。",
              "heading": "建议-颜色值中的英文字符采用小写。如不用小写也需要保证同一项目内保持大小写一致。"
            },
            {
              "depth": 3,
              "value": "4.6 2D 位置",
              "heading": "46-2d-位置"
            },
            {
              "depth": 4,
              "value": "[强制] 必须同时给出水平和垂直方向的位置。",
              "heading": "强制-必须同时给出水平和垂直方向的位置。"
            },
            {
              "depth": 2,
              "value": "5 文本编排",
              "heading": "5-文本编排"
            },
            {
              "depth": 3,
              "value": "5.1 字体族",
              "heading": "51-字体族"
            },
            {
              "depth": 4,
              "value": "[强制] font-family 属性中的字体族名称应使用字体的英文 Family Name，其中如有空格，须放置在引号中。",
              "heading": "强制-font-family-属性中的字体族名称应使用字体的英文-family-name，其中如有空格，须放置在引号中。"
            },
            {
              "depth": 4,
              "value": "[强制] font-family 按「西文字体在前、中文字体在后」、「效果佳 (质量高/更能满足需求) 的字体在前、效果一般的字体在后」的顺序编写，最后必须指定一个通用字体族( serif / sans-serif )。",
              "heading": "强制-font-family-按「西文字体在前、中文字体在后」、「效果佳-质量高更能满足需求-的字体在前、效果一般的字体在后」的顺序编写，最后必须指定一个通用字体族-serif--sans-serif-。"
            },
            {
              "depth": 4,
              "value": "[强制] font-family 不区分大小写，但在同一个项目中，同样的 Family Name 大小写必须统一。",
              "heading": "强制-font-family-不区分大小写，但在同一个项目中，同样的-family-name-大小写必须统一。"
            },
            {
              "depth": 3,
              "value": "5.2 字号",
              "heading": "52-字号"
            },
            {
              "depth": 4,
              "value": "[强制] 需要在 Windows 平台显示的中文内容，其字号应不小于 12px。",
              "heading": "强制-需要在-windows-平台显示的中文内容，其字号应不小于-12px。"
            },
            {
              "depth": 3,
              "value": "5.3 字体风格",
              "heading": "53-字体风格"
            },
            {
              "depth": 4,
              "value": "[建议] 需要在 Windows 平台显示的中文内容，不要使用除 normal 外的 font-style。其他平台也应慎用。",
              "heading": "建议-需要在-windows-平台显示的中文内容，不要使用除-normal-外的-font-style。其他平台也应慎用。"
            },
            {
              "depth": 3,
              "value": "5.4 字重",
              "heading": "54-字重"
            },
            {
              "depth": 4,
              "value": "[强制] font-weight 属性必须使用数值方式描述。",
              "heading": "强制-font-weight-属性必须使用数值方式描述。"
            },
            {
              "depth": 3,
              "value": "5.5 行高",
              "heading": "55-行高"
            },
            {
              "depth": 4,
              "value": "[建议] line-height 在定义文本段落时，应使用数值。",
              "heading": "建议-line-height-在定义文本段落时，应使用数值。"
            },
            {
              "depth": 2,
              "value": "6 变换与动画",
              "heading": "6-变换与动画"
            },
            {
              "depth": 4,
              "value": "[强制] 使用 transition 时应指定 transition-property。",
              "heading": "强制-使用-transition-时应指定-transition-property。"
            },
            {
              "depth": 4,
              "value": "[建议] 尽可能在浏览器能高效实现的属性上添加过渡和动画。",
              "heading": "建议-尽可能在浏览器能高效实现的属性上添加过渡和动画。"
            },
            {
              "depth": 2,
              "value": "7 响应式",
              "heading": "7-响应式"
            },
            {
              "depth": 4,
              "value": "[强制] Media Query 不得单独编排，必须与相关的规则一起定义。",
              "heading": "强制-media-query-不得单独编排，必须与相关的规则一起定义。"
            },
            {
              "depth": 4,
              "value": "[强制] Media Query 如果有多个逗号分隔的条件时，应将每个条件放在单独一行中。",
              "heading": "强制-media-query-如果有多个逗号分隔的条件时，应将每个条件放在单独一行中。"
            },
            {
              "depth": 4,
              "value": "[建议] 尽可能给出在高分辨率设备 (Retina) 下效果更佳的样式。",
              "heading": "建议-尽可能给出在高分辨率设备-retina-下效果更佳的样式。"
            },
            {
              "depth": 2,
              "value": "8 兼容性",
              "heading": "8-兼容性"
            },
            {
              "depth": 3,
              "value": "8.1 属性前缀",
              "heading": "81-属性前缀"
            },
            {
              "depth": 4,
              "value": "[强制] 带私有前缀的属性由长到短排列，按冒号位置对齐。",
              "heading": "强制-带私有前缀的属性由长到短排列，按冒号位置对齐。"
            },
            {
              "depth": 3,
              "value": "8.2 Hack",
              "heading": "82-hack"
            },
            {
              "depth": 4,
              "value": "[建议] 需要添加 hack 时应尽可能考虑是否可以采用其他方式解决。",
              "heading": "建议-需要添加-hack-时应尽可能考虑是否可以采用其他方式解决。"
            },
            {
              "depth": 4,
              "value": "[建议] 尽量使用 选择器 hack 处理兼容性，而非 属性 hack。",
              "heading": "建议-尽量使用-选择器-hack-处理兼容性，而非-属性-hack。"
            },
            {
              "depth": 4,
              "value": "[建议] 尽量使用简单的 属性 hack。",
              "heading": "建议-尽量使用简单的-属性-hack。"
            },
            {
              "depth": 3,
              "value": "8.3 Expression",
              "heading": "83-expression"
            },
            {
              "depth": 4,
              "value": "[强制] 禁止使用 Expression。",
              "heading": "强制-禁止使用-expression。"
            },
            {
              "depth": 2,
              "value": "9 常用的 CSS 类名",
              "heading": "9-常用的-css-类名"
            },
            {
              "depth": 2,
              "value": "10 BEM",
              "heading": "10-bem"
            },
            {
              "depth": 2,
              "value": "11 属性的书写顺序",
              "heading": "11-属性的书写顺序"
            },
            {
              "depth": 2,
              "value": "13 统一各浏览器默认样式的差异",
              "heading": "13-统一各浏览器默认样式的差异"
            }
          ]
        },
        "title": "CSS 规范"
      },
      {
        "path": "/standard/document",
        "component": require('../../../docs/standard/document.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/standard/document.md",
          "updatedTime": 1601562998000,
          "title": "文档规范",
          "group": {
            "title": "开发规范",
            "path": "/standard"
          },
          "order": 9,
          "slugs": [
            {
              "depth": 1,
              "value": "文档规范",
              "heading": "文档规范"
            },
            {
              "depth": 2,
              "value": "标题",
              "heading": "标题"
            },
            {
              "depth": 3,
              "value": "层级",
              "heading": "层级"
            },
            {
              "depth": 3,
              "value": "原则",
              "heading": "原则"
            },
            {
              "depth": 2,
              "value": "文本",
              "heading": "文本"
            },
            {
              "depth": 3,
              "value": "字间距",
              "heading": "字间距"
            },
            {
              "depth": 3,
              "value": "句子",
              "heading": "句子"
            },
            {
              "depth": 3,
              "value": "写作风格",
              "heading": "写作风格"
            },
            {
              "depth": 3,
              "value": "英文处理",
              "heading": "英文处理"
            },
            {
              "depth": 2,
              "value": "段落",
              "heading": "段落"
            },
            {
              "depth": 3,
              "value": "原则",
              "heading": "原则-1"
            },
            {
              "depth": 3,
              "value": "引用",
              "heading": "引用"
            },
            {
              "depth": 2,
              "value": "数值",
              "heading": "数值"
            },
            {
              "depth": 3,
              "value": "半角数字",
              "heading": "半角数字"
            },
            {
              "depth": 3,
              "value": "千分号",
              "heading": "千分号"
            },
            {
              "depth": 3,
              "value": "货币",
              "heading": "货币"
            },
            {
              "depth": 3,
              "value": "数值范围",
              "heading": "数值范围"
            },
            {
              "depth": 3,
              "value": "变化程度的表示法",
              "heading": "变化程度的表示法"
            },
            {
              "depth": 2,
              "value": "标点符号",
              "heading": "标点符号"
            },
            {
              "depth": 3,
              "value": "原则",
              "heading": "原则-2"
            },
            {
              "depth": 3,
              "value": "句号",
              "heading": "句号"
            },
            {
              "depth": 3,
              "value": "逗号",
              "heading": "逗号"
            },
            {
              "depth": 3,
              "value": "顿号",
              "heading": "顿号"
            },
            {
              "depth": 3,
              "value": "分号",
              "heading": "分号"
            },
            {
              "depth": 3,
              "value": "引号",
              "heading": "引号"
            },
            {
              "depth": 3,
              "value": "括号",
              "heading": "括号"
            },
            {
              "depth": 3,
              "value": "冒号",
              "heading": "冒号"
            },
            {
              "depth": 3,
              "value": "省略号",
              "heading": "省略号"
            },
            {
              "depth": 3,
              "value": "感叹号",
              "heading": "感叹号"
            },
            {
              "depth": 3,
              "value": "破折号",
              "heading": "破折号"
            },
            {
              "depth": 3,
              "value": "连接号",
              "heading": "连接号"
            },
            {
              "depth": 2,
              "value": "文档体系",
              "heading": "文档体系"
            },
            {
              "depth": 3,
              "value": "结构",
              "heading": "结构"
            },
            {
              "depth": 3,
              "value": "文件名",
              "heading": "文件名"
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
          "updatedTime": 1601452603000,
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
        "path": "/standard/html",
        "component": require('../../../docs/standard/html.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/standard/html.md",
          "updatedTime": 1601767347000,
          "title": "HTML 规范",
          "group": {
            "title": "开发规范",
            "path": "/standard"
          },
          "order": 1,
          "slugs": [
            {
              "depth": 1,
              "value": "HTML 规范",
              "heading": "html-规范"
            },
            {
              "depth": 2,
              "value": "1 前言",
              "heading": "1-前言"
            },
            {
              "depth": 2,
              "value": "2 代码风格",
              "heading": "2-代码风格"
            },
            {
              "depth": 3,
              "value": "2.1 缩进与换行",
              "heading": "21-缩进与换行"
            },
            {
              "depth": 4,
              "value": "[强制] 使用 4 个空格做为一个缩进层级，不允许使用 2 个空格 或 tab 字符。",
              "heading": "强制-使用-4-个空格做为一个缩进层级，不允许使用-2-个空格-或-tab-字符。"
            },
            {
              "depth": 4,
              "value": "[建议] 每行不得超过 120 个字符。",
              "heading": "建议-每行不得超过-120-个字符。"
            },
            {
              "depth": 3,
              "value": "2.2 命名",
              "heading": "22-命名"
            },
            {
              "depth": 4,
              "value": "[强制] class 必须单词全字母小写，单词间以 - 分隔。",
              "heading": "强制-class-必须单词全字母小写，单词间以---分隔。"
            },
            {
              "depth": 4,
              "value": "[强制] class 必须代表相应模块或部件的内容或功能，不得以样式信息进行命名。",
              "heading": "强制-class-必须代表相应模块或部件的内容或功能，不得以样式信息进行命名。"
            },
            {
              "depth": 4,
              "value": "[强制] 元素 id 必须保证页面唯一。",
              "heading": "强制-元素-id-必须保证页面唯一。"
            },
            {
              "depth": 4,
              "value": "[建议] id 建议单词全字母小写，单词间以 - 分隔。同项目必须保持风格一致。",
              "heading": "建议-id-建议单词全字母小写，单词间以---分隔。同项目必须保持风格一致。"
            },
            {
              "depth": 4,
              "value": "[建议] id、class 命名，在避免冲突并描述清楚的前提下尽可能短。",
              "heading": "建议-id、class-命名，在避免冲突并描述清楚的前提下尽可能短。"
            },
            {
              "depth": 4,
              "value": "[强制] 禁止为了 hook 脚本，创建无样式信息的 class。",
              "heading": "强制-禁止为了-hook-脚本，创建无样式信息的-class。"
            },
            {
              "depth": 4,
              "value": "[强制] 同一页面，应避免使用相同的 name 与 id。",
              "heading": "强制-同一页面，应避免使用相同的-name-与-id。"
            },
            {
              "depth": 3,
              "value": "2.3 标签",
              "heading": "23-标签"
            },
            {
              "depth": 4,
              "value": "[强制] 标签名必须使用小写字母。",
              "heading": "强制-标签名必须使用小写字母。"
            },
            {
              "depth": 4,
              "value": "[强制] 对于无需自闭合的标签，不允许自闭合。",
              "heading": "强制-对于无需自闭合的标签，不允许自闭合。"
            },
            {
              "depth": 4,
              "value": "[强制] 对 HTML5 中规定允许省略的闭合标签，不允许省略闭合标签。",
              "heading": "强制-对-html5-中规定允许省略的闭合标签，不允许省略闭合标签。"
            },
            {
              "depth": 4,
              "value": "[强制] 标签使用必须符合标签嵌套规则。",
              "heading": "强制-标签使用必须符合标签嵌套规则。"
            },
            {
              "depth": 4,
              "value": "[建议] HTML 标签的使用应该遵循标签的语义。",
              "heading": "建议-html-标签的使用应该遵循标签的语义。"
            },
            {
              "depth": 4,
              "value": "[建议] 在 CSS 可以实现相同需求的情况下不得使用表格进行布局。",
              "heading": "建议-在-css-可以实现相同需求的情况下不得使用表格进行布局。"
            },
            {
              "depth": 4,
              "value": "[建议] 标签的使用应尽量简洁，减少不必要的标签。",
              "heading": "建议-标签的使用应尽量简洁，减少不必要的标签。"
            },
            {
              "depth": 3,
              "value": "2.4 属性",
              "heading": "24-属性"
            },
            {
              "depth": 4,
              "value": "[强制] 属性名必须使用小写字母。",
              "heading": "强制-属性名必须使用小写字母。"
            },
            {
              "depth": 4,
              "value": "[强制] 属性值必须用双引号包围。",
              "heading": "强制-属性值必须用双引号包围。"
            },
            {
              "depth": 4,
              "value": "[建议] 布尔类型的属性，建议不添加属性值。",
              "heading": "建议-布尔类型的属性，建议不添加属性值。"
            },
            {
              "depth": 4,
              "value": "[建议] 自定义属性建议以 xxx- 为前缀，推荐使用 data-。",
              "heading": "建议-自定义属性建议以-xxx--为前缀，推荐使用-data-。"
            },
            {
              "depth": 2,
              "value": "3 通用",
              "heading": "3-通用"
            },
            {
              "depth": 3,
              "value": "3.1 DOCTYPE",
              "heading": "31-doctype"
            },
            {
              "depth": 4,
              "value": "[强制] 使用 HTML5 的 doctype 来启用标准模式，建议使用大写的 DOCTYPE。",
              "heading": "强制-使用-html5-的-doctype-来启用标准模式，建议使用大写的-doctype。"
            },
            {
              "depth": 4,
              "value": "[建议] 启用 IE Edge 模式。",
              "heading": "建议-启用-ie-edge-模式。"
            },
            {
              "depth": 4,
              "value": "[建议] 在 html 标签上设置正确的 lang 属性。",
              "heading": "建议-在-html-标签上设置正确的-lang-属性。"
            },
            {
              "depth": 3,
              "value": "3.2 编码",
              "heading": "32-编码"
            },
            {
              "depth": 4,
              "value": "[强制] 页面必须使用精简形式，明确指定字符编码。指定字符编码的 meta 必须是 head 的第一个直接子元素。",
              "heading": "强制-页面必须使用精简形式，明确指定字符编码。指定字符编码的-meta-必须是-head-的第一个直接子元素。"
            },
            {
              "depth": 4,
              "value": "[建议] HTML 文件使用无 BOM 的 UTF-8 编码。",
              "heading": "建议-html-文件使用无-bom-的-utf-8-编码。"
            },
            {
              "depth": 3,
              "value": "3.3 CSS 和 JavaScript 引入",
              "heading": "33-css-和-javascript-引入"
            },
            {
              "depth": 4,
              "value": "[强制] 引入 CSS 时必须指明 rel=\"stylesheet\"。",
              "heading": "强制-引入-css-时必须指明-relstylesheet。"
            },
            {
              "depth": 4,
              "value": "[建议] 引入 CSS 和 JavaScript 时无须指明 type 属性。",
              "heading": "建议-引入-css-和-javascript-时无须指明-type-属性。"
            },
            {
              "depth": 4,
              "value": "[建议] 展现定义放置于外部 CSS 中，行为定义放置于外部 JavaScript 中。",
              "heading": "建议-展现定义放置于外部-css-中，行为定义放置于外部-javascript-中。"
            },
            {
              "depth": 4,
              "value": "[建议] 在 head 中引入页面需要的所有 CSS 资源。",
              "heading": "建议-在-head-中引入页面需要的所有-css-资源。"
            },
            {
              "depth": 4,
              "value": "[建议] JavaScript 应当放在页面末尾，或采用异步加载。",
              "heading": "建议-javascript-应当放在页面末尾，或采用异步加载。"
            },
            {
              "depth": 4,
              "value": "[建议] 移动环境或只针对现代浏览器设计的 Web 应用，如果引用外部资源的 URL 协议部分与页面相同，建议省略协议前缀。",
              "heading": "建议-移动环境或只针对现代浏览器设计的-web-应用，如果引用外部资源的-url-协议部分与页面相同，建议省略协议前缀。"
            },
            {
              "depth": 2,
              "value": "4 head",
              "heading": "4-head"
            },
            {
              "depth": 3,
              "value": "4.1 title",
              "heading": "41-title"
            },
            {
              "depth": 4,
              "value": "[强制] 页面必须包含 title 标签声明标题。",
              "heading": "强制-页面必须包含-title-标签声明标题。"
            },
            {
              "depth": 4,
              "value": "[强制] title 必须作为 head 的直接子元素，并紧随 charset 声明之后。",
              "heading": "强制-title-必须作为-head-的直接子元素，并紧随-charset-声明之后。"
            },
            {
              "depth": 3,
              "value": "4.2 favicon",
              "heading": "42-favicon"
            },
            {
              "depth": 4,
              "value": "[强制] 保证 favicon 可访问。",
              "heading": "强制-保证-favicon-可访问。"
            },
            {
              "depth": 3,
              "value": "4.3 viewport",
              "heading": "43-viewport"
            },
            {
              "depth": 4,
              "value": "[建议] 若页面欲对移动设备友好，需指定页面的 viewport。",
              "heading": "建议-若页面欲对移动设备友好，需指定页面的-viewport。"
            },
            {
              "depth": 2,
              "value": "5 图片",
              "heading": "5-图片"
            },
            {
              "depth": 4,
              "value": "[强制] 禁止 img 的 src 取值为空。延迟加载的图片也要增加默认的 src。",
              "heading": "强制-禁止-img-的-src-取值为空。延迟加载的图片也要增加默认的-src。"
            },
            {
              "depth": 4,
              "value": "[建议] 避免为 img 添加不必要的 title 属性。",
              "heading": "建议-避免为-img-添加不必要的-title-属性。"
            },
            {
              "depth": 4,
              "value": "[建议] 为重要图片添加 alt 属性。",
              "heading": "建议-为重要图片添加-alt-属性。"
            },
            {
              "depth": 4,
              "value": "[建议] 添加 width 和 height 属性，以避免页面抖动。",
              "heading": "建议-添加-width-和-height-属性，以避免页面抖动。"
            },
            {
              "depth": 4,
              "value": "[建议] 有下载需求的图片采用 img 标签实现，无下载需求的图片采用 CSS 背景图实现。",
              "heading": "建议-有下载需求的图片采用-img-标签实现，无下载需求的图片采用-css-背景图实现。"
            },
            {
              "depth": 2,
              "value": "6 表单",
              "heading": "6-表单"
            },
            {
              "depth": 3,
              "value": "6.1 控件标题",
              "heading": "61-控件标题"
            },
            {
              "depth": 4,
              "value": "[强制] 有文本标题的控件必须使用 label 标签将其与其标题相关联。",
              "heading": "强制-有文本标题的控件必须使用-label-标签将其与其标题相关联。"
            },
            {
              "depth": 3,
              "value": "6.2 按钮",
              "heading": "62-按钮"
            },
            {
              "depth": 4,
              "value": "[强制] 使用 button 元素时必须指明 type 属性值。",
              "heading": "强制-使用-button-元素时必须指明-type-属性值。"
            },
            {
              "depth": 4,
              "value": "[建议] 尽量不要使用按钮类元素的 name 属性。",
              "heading": "建议-尽量不要使用按钮类元素的-name-属性。"
            },
            {
              "depth": 3,
              "value": "6.3 可访问性 (A11Y)",
              "heading": "63-可访问性-a11y"
            },
            {
              "depth": 4,
              "value": "[建议] 负责主要功能的按钮在 DOM 中的顺序应靠前。",
              "heading": "建议-负责主要功能的按钮在-dom-中的顺序应靠前。"
            },
            {
              "depth": 4,
              "value": "[建议] 当使用 JavaScript 进行表单提交时，如果条件允许，应使原生提交功能正常工作。",
              "heading": "建议-当使用-javascript-进行表单提交时，如果条件允许，应使原生提交功能正常工作。"
            },
            {
              "depth": 4,
              "value": "[建议] 在针对移动设备开发的页面时，根据内容类型指定输入框的 type 属性。",
              "heading": "建议-在针对移动设备开发的页面时，根据内容类型指定输入框的-type-属性。"
            },
            {
              "depth": 2,
              "value": "7 多媒体",
              "heading": "7-多媒体"
            },
            {
              "depth": 4,
              "value": "[建议] 当在现代浏览器中使用 audio 以及 video 标签来播放音频、视频时，应当注意格式。",
              "heading": "建议-当在现代浏览器中使用-audio-以及-video-标签来播放音频、视频时，应当注意格式。"
            },
            {
              "depth": 4,
              "value": "[建议] 在支持 HTML5 的浏览器中优先使用 audio 和 video 标签来定义音视频元素。",
              "heading": "建议-在支持-html5-的浏览器中优先使用-audio-和-video-标签来定义音视频元素。"
            },
            {
              "depth": 4,
              "value": "[建议] 使用退化到插件的方式来对多浏览器进行支持。",
              "heading": "建议-使用退化到插件的方式来对多浏览器进行支持。"
            },
            {
              "depth": 4,
              "value": "[建议] 只在必要的时候开启音视频的自动播放。",
              "heading": "建议-只在必要的时候开启音视频的自动播放。"
            },
            {
              "depth": 4,
              "value": "[建议] 在 object 标签内部提供指示浏览器不支持该标签的说明。",
              "heading": "建议-在-object-标签内部提供指示浏览器不支持该标签的说明。"
            },
            {
              "depth": 2,
              "value": "8 模板中的 HTML",
              "heading": "8-模板中的-html"
            },
            {
              "depth": 4,
              "value": "[建议] 模板代码的缩进优先保证 HTML 代码的缩进规则。",
              "heading": "建议-模板代码的缩进优先保证-html-代码的缩进规则。"
            },
            {
              "depth": 4,
              "value": "[建议] 模板代码应以保证 HTML 单个标签语法的正确性为基本原则。",
              "heading": "建议-模板代码应以保证-html-单个标签语法的正确性为基本原则。"
            },
            {
              "depth": 4,
              "value": "[建议] 在循环处理模板数据构造表格时，若要求每行输出固定的个数，建议先将数据分组，之后再循环输出。",
              "heading": "建议-在循环处理模板数据构造表格时，若要求每行输出固定的个数，建议先将数据分组，之后再循环输出。"
            }
          ]
        },
        "title": "HTML 规范"
      },
      {
        "path": "/standard/license",
        "component": require('../../../docs/standard/license.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/standard/license.md",
          "updatedTime": 1601562998000,
          "title": "协议规范",
          "group": {
            "title": "开发规范",
            "path": "/standard"
          },
          "order": 6,
          "slugs": [
            {
              "depth": 1,
              "value": "协议规范",
              "heading": "协议规范"
            },
            {
              "depth": 2,
              "value": "前言",
              "heading": "前言"
            },
            {
              "depth": 2,
              "value": "BSD （Berkeley Software Distribution license）",
              "heading": "bsd-（berkeley-software-distribution-license）"
            },
            {
              "depth": 3,
              "value": "使用 BSD 前提条件：",
              "heading": "使用-bsd-前提条件："
            },
            {
              "depth": 3,
              "value": "BSD 许可条款",
              "heading": "bsd-许可条款"
            },
            {
              "depth": 2,
              "value": "MIT（Massachusetts Institute of Technology）",
              "heading": "mit（massachusetts-institute-of-technology）"
            },
            {
              "depth": 3,
              "value": "MIT 许可条款",
              "heading": "mit-许可条款"
            },
            {
              "depth": 2,
              "value": "Apache Licence 2.0",
              "heading": "apache-licence-20"
            },
            {
              "depth": 3,
              "value": "前提条件",
              "heading": "前提条件"
            },
            {
              "depth": 3,
              "value": "Apache Licence 2.0 许可条款",
              "heading": "apache-licence-20-许可条款"
            },
            {
              "depth": 2,
              "value": "GPL（General Public License）",
              "heading": "gpl（general-public-license）"
            },
            {
              "depth": 3,
              "value": "GPL 许可条款",
              "heading": "gpl-许可条款"
            },
            {
              "depth": 2,
              "value": "LGPL（Lesser General Public License）",
              "heading": "lgpl（lesser-general-public-license）"
            },
            {
              "depth": 3,
              "value": "LGPL 许可条款",
              "heading": "lgpl-许可条款"
            },
            {
              "depth": 2,
              "value": "Mozilla（Mozilla Public License）",
              "heading": "mozilla（mozilla-public-license）"
            },
            {
              "depth": 3,
              "value": "使用 MPL 前提条件：",
              "heading": "使用-mpl-前提条件："
            }
          ]
        },
        "title": "协议规范"
      },
      {
        "path": "/standard/react",
        "component": require('../../../docs/standard/react.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/standard/react.md",
          "updatedTime": 1601620044000,
          "title": "React 规范",
          "group": {
            "title": "开发规范",
            "path": "/standard"
          },
          "order": 4,
          "slugs": [
            {
              "depth": 1,
              "value": "React 规范",
              "heading": "react-规范"
            },
            {
              "depth": 2,
              "value": "目录结构",
              "heading": "目录结构"
            },
            {
              "depth": 2,
              "value": "容器和组件",
              "heading": "容器和组件"
            },
            {
              "depth": 2,
              "value": "拆分和组合代码",
              "heading": "拆分和组合代码"
            },
            {
              "depth": 2,
              "value": "UI 组件",
              "heading": "ui-组件"
            },
            {
              "depth": 1,
              "value": "组件命名",
              "heading": "组件命名"
            },
            {
              "depth": 2,
              "value": "便于在项目中搜索文件",
              "heading": "便于在项目中搜索文件"
            },
            {
              "depth": 2,
              "value": "可以避免在引入时重复名称",
              "heading": "可以避免在引入时重复名称"
            },
            {
              "depth": 2,
              "value": "页面（Screen）",
              "heading": "页面（screen）"
            },
            {
              "depth": 2,
              "value": "Basic Rules 基本规范",
              "heading": "basic-rules-基本规范"
            },
            {
              "depth": 2,
              "value": "创建模块",
              "heading": "创建模块"
            },
            {
              "depth": 2,
              "value": "Mixins",
              "heading": "mixins"
            },
            {
              "depth": 2,
              "value": "Naming 命名",
              "heading": "naming-命名"
            },
            {
              "depth": 2,
              "value": "Declaration 声明模块",
              "heading": "declaration-声明模块"
            },
            {
              "depth": 2,
              "value": "Alignment 代码对齐",
              "heading": "alignment-代码对齐"
            },
            {
              "depth": 2,
              "value": "Quotes 单引号还是双引号",
              "heading": "quotes-单引号还是双引号"
            },
            {
              "depth": 2,
              "value": "Spacing 空格",
              "heading": "spacing-空格"
            },
            {
              "depth": 2,
              "value": "Props 属性",
              "heading": "props-属性"
            },
            {
              "depth": 2,
              "value": "Refs",
              "heading": "refs"
            },
            {
              "depth": 2,
              "value": "Parentheses 括号",
              "heading": "parentheses-括号"
            },
            {
              "depth": 2,
              "value": "Tags 标签",
              "heading": "tags-标签"
            },
            {
              "depth": 2,
              "value": "Methods 函数",
              "heading": "methods-函数"
            },
            {
              "depth": 2,
              "value": "Ordering React 模块生命周期",
              "heading": "ordering-react-模块生命周期"
            },
            {
              "depth": 2,
              "value": "isMounted",
              "heading": "ismounted"
            },
            {
              "depth": 2,
              "value": "Hooks",
              "heading": "hooks"
            },
            {
              "depth": 3,
              "value": "返回值",
              "heading": "返回值"
            },
            {
              "depth": 3,
              "value": "参数",
              "heading": "参数"
            }
          ]
        },
        "title": "React 规范"
      },
      {
        "path": "/standard/security",
        "component": require('../../../docs/standard/security.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/standard/security.md",
          "updatedTime": 1601562998000,
          "title": "安全规范",
          "group": {
            "title": "开发规范",
            "path": "/standard"
          },
          "order": 5,
          "slugs": [
            {
              "depth": 1,
              "value": "安全规范",
              "heading": "安全规范"
            },
            {
              "depth": 2,
              "value": "背景知识",
              "heading": "背景知识"
            },
            {
              "depth": 2,
              "value": "XSS 防御",
              "heading": "xss-防御"
            },
            {
              "depth": 2,
              "value": "富文本数据",
              "heading": "富文本数据"
            },
            {
              "depth": 2,
              "value": "CSRF",
              "heading": "csrf"
            },
            {
              "depth": 2,
              "value": "Cookie 使用",
              "heading": "cookie-使用"
            },
            {
              "depth": 2,
              "value": "防钓鱼",
              "heading": "防钓鱼"
            },
            {
              "depth": 2,
              "value": "隐私数据",
              "heading": "隐私数据"
            },
            {
              "depth": 2,
              "value": "页面跳转",
              "heading": "页面跳转"
            },
            {
              "depth": 2,
              "value": "第三方功能和资源",
              "heading": "第三方功能和资源"
            },
            {
              "depth": 2,
              "value": "点击劫持",
              "heading": "点击劫持"
            },
            {
              "depth": 2,
              "value": "Flash 使用",
              "heading": "flash-使用"
            },
            {
              "depth": 2,
              "value": "上传文件",
              "heading": "上传文件"
            },
            {
              "depth": 2,
              "value": "JSON/JSONP 协议",
              "heading": "jsonjsonp-协议"
            },
            {
              "depth": 2,
              "value": "Cross Domain 设置",
              "heading": "cross-domain-设置"
            },
            {
              "depth": 2,
              "value": "参考资料",
              "heading": "参考资料"
            }
          ]
        },
        "title": "安全规范"
      },
      {
        "path": "/standard/test",
        "component": require('../../../docs/standard/test.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/standard/test.md",
          "updatedTime": 1601562998000,
          "title": "测试规范",
          "group": {
            "title": "开发规范",
            "path": "/standard"
          },
          "order": 7,
          "slugs": [
            {
              "depth": 1,
              "value": "测试规范",
              "heading": "测试规范"
            },
            {
              "depth": 2,
              "value": "单元测试是一门伟大的学科，它可以减少 40% - 80% 的 bug。单元测试的主要好处有:",
              "heading": "单元测试是一门伟大的学科，它可以减少-40---80-的-bug。单元测试的主要好处有"
            },
            {
              "depth": 2,
              "value": "无论你使用的是什么框架，下面的小窍门将帮助你编写更好、更可测试、更可读、更可组合的 UI 组件：",
              "heading": "无论你使用的是什么框架，下面的小窍门将帮助你编写更好、更可测试、更可读、更可组合的-ui-组件："
            },
            {
              "depth": 2,
              "value": "使用纯组件",
              "heading": "使用纯组件"
            },
            {
              "depth": 2,
              "value": "单元测试有状态的组件",
              "heading": "单元测试有状态的组件"
            }
          ]
        },
        "title": "测试规范"
      },
      {
        "path": "/standard/typescript",
        "component": require('../../../docs/standard/typescript.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/standard/typescript.md",
          "updatedTime": 1601620044000,
          "title": "TypeScript 规范",
          "group": {
            "title": "开发规范",
            "path": "/standard"
          },
          "order": 3,
          "slugs": [
            {
              "depth": 1,
              "value": "TypeScript 规范",
              "heading": "typescript-规范"
            },
            {
              "depth": 2,
              "value": "命名",
              "heading": "命名"
            },
            {
              "depth": 2,
              "value": "组件",
              "heading": "组件"
            },
            {
              "depth": 2,
              "value": "类型",
              "heading": "类型"
            },
            {
              "depth": 2,
              "value": "null 和 undefined：",
              "heading": "null-和-undefined："
            },
            {
              "depth": 2,
              "value": "一般假设",
              "heading": "一般假设"
            },
            {
              "depth": 2,
              "value": "类",
              "heading": "类"
            },
            {
              "depth": 2,
              "value": "标记",
              "heading": "标记"
            },
            {
              "depth": 2,
              "value": "注释",
              "heading": "注释"
            },
            {
              "depth": 2,
              "value": "字符串",
              "heading": "字符串"
            },
            {
              "depth": 2,
              "value": "普通方法",
              "heading": "普通方法"
            },
            {
              "depth": 2,
              "value": "风格",
              "heading": "风格"
            },
            {
              "depth": 2,
              "value": "条件语句的 5 条守则",
              "heading": "条件语句的-5-条守则"
            },
            {
              "depth": 3,
              "value": "1. 多重判断时使用 Array.includes",
              "heading": "1-多重判断时使用-arrayincludes"
            },
            {
              "depth": 3,
              "value": "2. 更少的嵌套，尽早 return",
              "heading": "2-更少的嵌套，尽早-return"
            },
            {
              "depth": 3,
              "value": "3. 使用默认参数和解构",
              "heading": "3-使用默认参数和解构"
            },
            {
              "depth": 3,
              "value": "4. 倾向于对象遍历而不是 Switch 语句",
              "heading": "4-倾向于对象遍历而不是-switch-语句"
            },
            {
              "depth": 3,
              "value": "5. 对 所有/部分 判断使用 Array.every & Array.some",
              "heading": "5-对-所有部分-判断使用-arrayevery--arraysome"
            }
          ]
        },
        "title": "TypeScript 规范"
      },
      {
        "path": "/standard/version",
        "component": require('../../../docs/standard/version.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/standard/version.md",
          "updatedTime": 1601456058000,
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
        "redirect": "/architecture/workspace"
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
