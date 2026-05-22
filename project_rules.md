# Markdown 渲染组件 - AI 开发规则

## 1. 项目概述

本项目是一个针对微信公众号优化的 Markdown 渲染组件，以 NPM 包形式发布。

**核心功能**：
- Markdown 实时预览
- 5 种预设主题切换
- 代码块高亮（macOS 风格）
- 手机/桌面视图切换
- 一键复制（微信公众号兼容）

---

## 2. 语言与框架

### 2.1 技术栈

| 分类 | 技术 | 版本 |
| :--- | :--- | :--- |
| 框架 | React | >= 18.2.0 |
| 构建工具 | Vite | >= 5.0.0 |
| 语言 | TypeScript | >= 5.0.0 |
| Markdown解析 | markdown-it | >= 14.0.0 |
| 代码高亮 | highlight.js | >= 11.0.0 |
| 样式 | TailwindCSS | >= 3.0.0 |
| 复制功能 | clipboard | >= 2.0.0 |

### 2.2 包管理器

- **必须使用**: `npm`
- **禁止使用**: `yarn`, `pnpm`

### 2.3 构建命令

```bash
npm run dev          # 开发模式
npm run build        # 生产构建
npm run test         # 运行测试
npm run lint         # 代码检查
npm run typecheck    # TypeScript 检查
```

---

## 3. 项目目录结构

```
md-wx/
├── src/
│   ├── components/           # 组件目录
│   │   ├── MarkdownRenderer/ # 主组件 (PascalCase)
│   │   │   ├── index.tsx
│   │   │   └── styles.css
│   │   ├── SettingsBar/      # 设置栏组件
│   │   │   ├── index.tsx
│   │   │   └── styles.css
│   │   ├── PreviewArea/      # 预览区域组件
│   │   │   ├── index.tsx
│   │   │   └── styles.css
│   │   └── common/           # 通用组件
│   │       ├── ThemeSwitch.tsx
│   │       ├── ViewSwitch.tsx
│   │       └── CopyButton.tsx
│   ├── parser/              # 解析模块
│   │   ├── markdownParser.ts
│   │   └── highlightConfig.ts
│   ├── style/               # 样式处理
│   │   ├── themes.ts        # 主题定义 (kebab-case)
│   │   └── wechatStyles.ts  # 微信兼容样式
│   ├── utils/               # 工具函数 (camelCase)
│   │   ├── copyToClipboard.ts
│   │   ├── wechatConverter.ts
│   │   └── domUtils.ts
│   ├── types/               # 类型定义 (PascalCase)
│   │   ├── index.ts
│   │   └── theme.ts
│   ├── hooks/               # 自定义 Hooks (camelCase)
│   │   └── useTheme.ts
│   └── index.ts             # 入口文件（导出所有组件）
├── docs/                    # 文档目录
├── tests/                   # 测试目录
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── .gitignore
```

---

## 4. 代码风格规范

### 4.1 文件命名规则

| 文件类型 | 命名规则 | 示例 |
| :--- | :--- | :--- |
| 组件文件 | PascalCase | `MarkdownRenderer.tsx` |
| 工具函数 | camelCase | `copyToClipboard.ts` |
| 类型定义 | PascalCase | `Theme.ts` |
| 主题配置 | kebab-case | `themes.ts` |
| 目录 | kebab-case | `preview-area/` |

### 4.2 代码风格

| 规范项 | 要求 | 示例 |
| :--- | :--- | :--- |
| 缩进 | 2 空格 | `function test() {··return true; }` |
| 引号 | 单引号 | `const name = 'test';` |
| 模板字符串 | 反引号 | `const str = \`Hello \${name}\`;` |
| 分号 | 必须添加 | `const x = 1;` |
| 大括号前空格 | 必须添加 | `if (true) {` |
| 箭头函数 | 优先使用 | `const fn = () => {}` |
| 函数组件 | 优先使用 | `const Component = () => <div />` |

### 4.3 TypeScript 规范

| 规范项 | 要求 | 示例 |
| :--- | :--- | :--- |
| 类型定义 | 必须有类型 | `const fn = (x: number): string => {}` |
| 接口命名 | PascalCase，I 开头 | `interface IProps {}` |
| 类型别名 | PascalCase | `type ThemeType = 'notion' | 'dark'` |
| 泛型 | 大写 T | `function identity<T>(arg: T): T {}` |
| 可选属性 | 使用 ? | `interface IProps { name?: string }` |

### 4.4 CSS 规范

| 规范项 | 要求 |
| :--- | :--- |
| 类名 | 使用 TailwindCSS 类名 |
| 自定义样式 | 使用 CSS Modules |
| 颜色格式 | 十六进制 (#RRGGBB) |
| 单位 | 使用 px（微信兼容） |
| 主题变量 | 使用 CSS 变量 --xxx |

### 4.5 React 规范

| 规范项 | 要求 |
| :--- | :--- |
| 组件类型 | 函数组件 + Hooks |
| Hook 规则 | 必须在顶层调用 |
| 状态管理 | useState / useReducer |
| 副作用 | useEffect |
| 自定义 Hook | 以 use 开头 |

---

## 5. 项目规范

### 5.1 组件开发规范

1. **组件职责单一**：每个组件只做一件事
2. **Props 类型定义**：所有 Props 必须有类型定义
3. **默认值设置**：可选 Props 必须有默认值
4. **组件导出**：通过 `src/index.ts` 统一导出
5. **样式隔离**：使用 CSS Modules 或 TailwindCSS

### 5.2 主题系统规范

1. **主题变量命名**：使用语义化变量名
   - `--primary-color` - 主色
   - `--bg-color` - 背景色
   - `--text-color` - 文字颜色
   - `--heading-color` - 标题颜色
   - `--border-color` - 边框颜色

2. **主题列表**（5个）：
   - `notion` - Notion 简约白
   - `github-dark` - GitHub Dark
   - `sakura` - Sakura 樱花粉
   - `sunset` - Sunset 日落橙
   - `forest` - Forest 森林绿

3. **主题切换**：通过 CSS 类名切换，使用 CSS 变量实现

### 5.3 微信公众号兼容性规范

1. **样式内联**：复制时必须将样式转为内联 style
2. **标签限制**：只使用微信支持的标签
   - 支持：`p`, `h1-h6`, `code`, `pre`, `img`, `table`, `a`, `strong`, `em`, `blockquote`, `ul`, `ol`, `li`, `hr`
   - 禁止：`div`, `span`（谨慎使用）

3. **宽度限制**：内容区最大宽度 677px
4. **图片要求**：必须使用 HTTPS

### 5.4 安全规范

1. **XSS 防护**：使用 DOMPurify 过滤 HTML
2. **内容过滤**：用户输入内容必须经过 sanitize 处理
3. **代码注入**：代码块内容必须转义

---

## 6. NPM 包管理规范

### 6.1 package.json 配置

```json
{
  "name": "@md-wx/react",
  "version": "1.0.0",
  "main": "dist/index.js",
  "module": "dist/index.esm.js",
  "types": "dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.esm.js",
      "require": "./dist/index.js"
    }
  },
  "files": ["dist/"],
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "test": "jest",
    "lint": "eslint src/",
    "typecheck": "tsc --noEmit"
  },
  "peerDependencies": {
    "react": ">=18.0.0",
    "react-dom": ">=18.0.0"
  }
}
```

### 6.2 依赖分类

| 类型 | 说明 | 示例 |
| :--- | :--- | :--- |
| dependencies | 运行时依赖 | react, markdown-it |
| devDependencies | 开发时依赖 | vite, typescript |
| peerDependencies | 宿主项目提供 | react, react-dom |

### 6.3 版本管理

- 使用语义化版本（Semantic Versioning）
- 主版本号：不兼容的 API 变更
- 次版本号：向后兼容的功能新增
- 修订号：向后兼容的问题修正

---

## 7. 测试规范

### 7.1 测试类型

| 类型 | 说明 |
| :--- | :--- |
| 单元测试 | 测试组件和工具函数 |
| 集成测试 | 测试组件组合 |
| E2E 测试 | 测试完整流程 |

### 7.2 测试覆盖率

- 核心功能覆盖率 >= 80%
- 工具函数覆盖率 >= 90%

---

## 8. 提交规范

### 8.1 Git 提交信息格式

```
<type>(<scope>): <description>

[optional body]
```

### 8.2 类型说明

| 类型 | 说明 |
| :--- | :--- |
| feat | 新增功能 |
| fix | 修复 bug |
| docs | 文档更新 |
| style | 代码格式（不影响逻辑） |
| refactor | 重构（不新增功能） |
| test | 测试相关 |
| chore | 构建/工具更新 |

### 8.3 示例

```
feat(MarkdownRenderer): 添加主题切换功能

- 实现主题系统
- 添加 5 个预设主题
- 支持 CSS 变量切换
```

---

## 9. AI 开发提示

### 9.1 常见任务处理

| 任务 | 处理方式 |
| :--- | :--- |
| 添加新功能 | 创建新组件 → 更新 index.ts → 添加测试 |
| 修改样式 | 使用 TailwindCSS 或 CSS Modules |
| 添加主题 | 在 themes.ts 中添加新主题配置 |
| 修复 bug | 定位问题 → 修改代码 → 编写测试 |

### 9.2 关键注意事项

1. **微信兼容性**：复制功能必须确保样式内联
2. **类型安全**：所有代码必须通过 TypeScript 检查
3. **响应式设计**：支持手机/桌面双视图
4. **主题切换**：使用 CSS 变量实现平滑过渡
5. **代码高亮**：使用 highlight.js，默认 github-dark 风格

### 9.3 禁止操作

- 禁止使用 `any` 类型
- 禁止全局样式污染
- 禁止未经验证的第三方依赖
- 禁止硬编码颜色值（使用主题变量）

---

## 附录：常用命令

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 运行测试
npm run test

# 代码检查
npm run lint

# 类型检查
npm run typecheck

# 发布到 NPM
npm publish --access public
```