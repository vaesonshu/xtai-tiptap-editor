# 📦 Tiptap Editor Monorepo

基于 **Tiptap v3** 与 **Next.js 15.5.2** 的编辑器组件开发仓库。
本仓库采用 **pnpm workspace + monorepo** 架构，包含：

* `packages/tiptap-editor` → 编辑器组件（npm 包）
* `apps/demo` → Next.js 演示项目
* `apps/docs` → 文档网站

---

## 📂 目录结构

```
tiptap-editor-monorepo/
├── apps/
│   ├── demo/                  # Next.js 演示项目
│   └── docs/                  # 文档网站 (Next.js/MDX)
├── packages/
│   └── tiptap-editor/         # 编辑器组件 (核心逻辑)
├── package.json               # 根目录管理脚本 & devDeps
├── pnpm-workspace.yaml        # pnpm workspace 配置
└── ...
```

---

## 🚀 快速开始

### 1. 安装依赖

```bash
pnpm install
```

### 2. 启动 demo 项目

```bash
pnpm --filter demo dev
```

默认在 `http://localhost:3000` 启动演示站点。

### 3. 启动 docs 文档站

```bash
pnpm --filter docs dev
```

默认在 `http://localhost:3001` 启动文档站点。

### 4. 构建组件包

```bash
pnpm --filter tiptap-editor-component build
```

---

## 📥 添加依赖

### 给 demo 添加依赖

```bash
pnpm --filter demo add axios
```

### 给组件包添加依赖

```bash
pnpm --filter tiptap-editor-component add @tiptap/extension-highlight
```

---

## 📤 发布流程

1. 构建组件包

   ```bash
   pnpm --filter tiptap-editor-component build
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
| 启动 demo     | `pnpm --filter demo dev`                       |
| 启动 docs     | `pnpm --filter docs dev`                       |
| 构建组件包       | `pnpm --filter tiptap-editor-component build`  |
| 给 demo 添加依赖 | `pnpm --filter demo add 包名`                    |
| 给组件包添加依赖    | `pnpm --filter tiptap-editor-component add 包名` |
| 清理依赖缓存      | `pnpm store prune`                             |

---

## 开发流程

# 启动 demo 项目 (Next.js)
pnpm --filter demo dev

# 启动 docs 项目 (文档)
pnpm --filter docs dev

# 同时监听组件包变化
pnpm --filter tiptap-editor-component dev
