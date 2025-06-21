# React + TypeScript + Vite 项目搭建

### 核心框架与库

- **React**: 用于构建用户界面的 JavaScript 库。
- **TypeScript**: 为 JavaScript 添加了静态类型检查，提高代码的可维护性和健壮性。
- **Vite**: 快速的构建工具，提供了快速的冷启动和热更新能力。打包优化配置。

### 路由管理

- **@tanstack/react-router**: 新一代路由方案（文件路由 + 自动代码分割）

### 数据请求

- **@tanstack/react-query**: 用于管理和缓存异步数据，提供了简洁的 API 和高效的数据处理能力。
- **@tanstack/react-query-devtools**: 开发工具，用于调试和监控数据请求。

### 表单处理

- **react-hook-form**: 用于处理表单状态和验证，提供了简洁的 API 和高性能的表单处理能力。

### UI 组件库

- **@mui/material**: 基于 Material Design 的 React UI 组件库，提供了丰富的组件和样式。
- **@mui/icons-material**: 提供了大量的 Material Design 图标。

### 代码规范与工具

- **eslint**: 用于代码静态检查，确保代码符合规范。
- **prettier**: 用于代码格式化，保持代码风格一致。
- **husky 和 lint-staged**: 用于在提交代码前自动执行代码检查和格式化。

### 其他

- **sonner**: 用于显示通知消息。

### 特色实现

1. **版本控制** - 通过 `useVersionChecker` 实现更新检查
2. **自定义受控组件** - 通过 `react-hook-form` + `MUI` 实现自定义受控组件
3. **自定义主题** - 深度定制主题系统（theme目录）

```
.
├── __root.tsx // root file
├── posts
│   ├── -components // 🐢 在根中使用的 UI 组件
│   ├── -api // 🦋 根 / 内使用的 API 通信 Hooks
│   ├── -types // 🐠 在根中使用的类型定义
│   ├── -functions // 🦐 在根中使用的函数
│   ├── route.lazy.tsx // 🐕 Lazy Routeの対象
│   ├── route.tsx // 🦈 Critical Route
│   └── $postId // posts/と同様
│       ├── -components
│       ├── -api
│       ├── -types
│       ├── -functions
│       ├── route.lazy.tsx
│       └── route.tsx
```

### React 组件精选:

- **Form 表单**: [react-hook-form](https://www.npmjs.com/package/react-hook-form)
- **Toast**: [sonner](https://www.npmjs.com/package/sonner) | [react-toastify](https://www.npmjs.com/package/react-toastify)
- **代码编辑器**: [@monaco-editor/react](https://www.npmjs.com/package/@monaco-editor/react) | [react-monaco-editor](https://www.npmjs.com/package/react-monaco-editor)
- **PDF**: [react-pdf](https://www.npmjs.com/package/react-pdf)
- **右键菜单**: [react-contexify](https://www.npmjs.com/package/react-contexify)
- **轮播**: [embla-carousel-react](https://www.npmjs.com/package/embla-carousel-react) | [react-slick](https://www.npmjs.com/package/react-slick)
- **页面 meta 属性**: [react-helmet-async](https://www.npmjs.com/package/react-helmet-async)
- **分割面板**: [react-resizable-panels](https://www.npmjs.com/package/react-resizable-panels) | [react-split](https://www.npmjs.com/package/react-split) | [react-split-pane](https://www.npmjs.com/package/react-split-pane)
- **拖拽**: [dnd-kit](https://www.npmjs.com/package/@dnd-kit/core)
- **Json 显示**: [react-json-view](https://www.npmjs.com/package/react-json-view) | [@uiw/react-json-view](https://www.npmjs.com/package/@uiw/react-json-view)
- **Json 编辑**: [vanilla-jsoneditor](https://www.npmjs.com/package/vanilla-jsoneditor) | [react-json-editor-ajrm](https://www.npmjs.com/package/react-json-editor-ajrm)
- **二维码**: [qrcode.react](https://www.npmjs.com/package/qrcode.react)
- **Markdown**: [react-markdown](https://www.npmjs.com/package/react-markdown) | [@uiw/react-markdown-preview](https://www.npmjs.com/package/@uiw/react-markdown-preview) | [markdown-it](https://www.npmjs.com/package/markdown-it)
- **模糊搜索**: [fuse.js](https://www.npmjs.com/package/fuse.js)
- **引导提示**: [react-joyride](https://www.npmjs.com/package/react-joyride)
- **组织结构chart**: [react-organizational-chart](https://www.npmjs.com/package/react-organizational-chart)
- **滚动条**: [SimpleBar](https://www.npmjs.com/package/simplebar) | [perfect-scrollbar](https://www.npmjs.com/package/perfect-scrollbar)
