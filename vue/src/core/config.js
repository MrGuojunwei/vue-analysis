/* @flow */

import {
  no,
  noop,
  identity
} from 'shared/util'

import { LIFECYCLE_HOOKS } from 'shared/constants'

export type Config = {
  // user
  optionMergeStrategies: { [key: string]: Function };
  silent: boolean;
  productionTip: boolean;
  performance: boolean;
  devtools: boolean;
  errorHandler: ?(err: Error, vm: Component, info: string) => void;
  warnHandler: ?(msg: string, vm: Component, trace: string) => void;
  ignoredElements: Array<string | RegExp>;
  keyCodes: { [key: string]: number | Array<number> };

  // platform
  isReservedTag: (x?: string) => boolean;
  isReservedAttr: (x?: string) => boolean;
  parsePlatformTagName: (x: string) => string;
  isUnknownElement: (x?: string) => boolean;
  getTagNamespace: (x?: string) => string | void;
  mustUseProp: (tag: string, type: ?string, name: string) => boolean;

  // legacy
  _lifecycleHooks: Array<string>;
};

export default ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false, // 是否取消vue所有的日志与警告  true标识取消

  /**
   * Show production mode tip message on boot?
   */
  productionTip: process.env.NODE_ENV !== 'production', // 设置为 false 以阻止 vue 在启动时生成生产提示。

  /**
   * Whether to enable devtools
   */
  devtools: process.env.NODE_ENV !== 'production', // 配置是否允许 vue-devtools 检查代码。开发版本默认为 true，生产版本默认为 false。生产版本设为 true 可以启用检查。

  /**
   * Whether to record perf
   */
  performance: false, // 设置为 true 以在浏览器开发工具的性能/时间线面板中启用对组件初始化、编译、渲染和打补丁的性能追踪。只适用于开发模式和支持 performance.mark API 的浏览器上。

  /**
   * Error handler for watcher errors
   */
  errorHandler: null, // 指定组件的渲染和观察期间未捕获错误的处理函数。这个处理函数被调用时，可获取错误信息和 Vue 实例。function (err, vm, info) {} `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null, // 为 Vue 的运行时警告赋予一个自定义处理函数。注意这只会在开发者环境下生效，在生产环境下它会被忽略 Vue.config.warnHandler = function (msg, vm, trace) { `trace` 是组件的继承关系追踪 }

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [], // 须使 Vue 忽略在 Vue 之外的自定义元素

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null), // 给 v-on 自定义键位别名。Vue.config.keyCodes = {mediaPlayPause: 179} <input type="text" @keyup.media-play-pause="method">

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
}: Config)
