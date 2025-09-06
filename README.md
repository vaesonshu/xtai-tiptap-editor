# 📦 xtAI Tiptap Editor

基于 **Tiptap v3** 与 **Next.js 15** 的编辑器组件开发仓库。
本仓库采用 **pnpm workspace + monorepo** 架构，包含：

* `packages/tiptap-editor` → 编辑器组件（npm 包）
* `apps/my-app` → Next.js 演示项目
* `apps/docs` → 文档网站

---

## 📂 目录结构

```
tiptap-editor-monorepo/
├── apps/
│   ├── my-app/                  # Next.js 演示项目
│   └── docs/                  # 文档网站 (Next.js/MDX)
├── packages/
│   └── tiptap-editor/         # 编辑器组件 (核心逻辑)
├── .eslintrc.json             # ESLint 配置
├── .gitignore                 # Git 忽略文件 
├── .prettierrc                # Prettier 配置
├── package.json               # 根目录管理脚本 & devDeps
├── pnpm-lock.yaml             # pnpm 锁文件
├── pnpm-workspace.yaml        # pnpm workspace 配置
├── README.md                   # 仓库描述
└── ...
```

---

## 🚀 快速开始

### 1. 安装依赖

```bash
pnpm install
```

### 2. 监听组件包

```bash
pnpm --filter xtai-tiptap-editor dev
```

### 3. 启动 my-app 项目

```bash
pnpm --filter my-app dev
```

默认在 `http://localhost:3000` 启动演示站点。

---

## 📥 添加依赖（示例）

### 给 my-app 添加依赖

```bash
pnpm --filter my-app add @tiptap/starter-kit
```

### 给组件包添加依赖

```bash
pnpm --filter xtai-tiptap-editor add @tiptap/extension-highlight
```

---

## 🏪开发流程

### 1. 启动 my-app 项目 (Next.js)

```bash
pnpm --filter my-app dev
```

### 2. 同时监听组件包变化

```bash
pnpm --filter xtai-tiptap-editor dev
```

## 📤 发布流程

1. 构建组件包

   ```bash
   pnpm --filter xtai-tiptap-editor build
   ```

2. 进入组件目录

   ```bash
   cd packages/tiptap-editor
   ```

3. 发布到 npm

   ```bash
   npm publish --access public
   ```

---

## 🛠️ 常用命令速查表

| 目的          | 命令                                             |
| ----------- | ---------------------------------------------- |
| 安装所有依赖      | `pnpm install`                                 |
| 启动 my-app     | `pnpm --filter my-app dev`                       |
| 启动 docs     | `pnpm --filter docs dev`                       |
| 构建组件包       | `pnpm --filter xtai-tiptap-editor build`  |
| 给 my-app 添加依赖 | `pnpm --filter my-app add 包名`                    |
| 给组件包添加依赖    | `pnpm --filter xtai-tiptap-editor add 包名` |
| 清理依赖缓存      | `pnpm store prune`                             |

---
