# @md-wx/react

专为微信公众号优化的 Markdown 渲染组件

## 特性

- 📝 实时 Markdown 渲染
- 🎨 5种预设主题：Notion 简约白、GitHub Dark、Sakura 樱花粉、Sunset 日落橙、Forest 森林绿
- 📱 响应式设计，支持手机/桌面视图切换
- 💻 代码高亮，支持 macOS 风格代码块
- 📋 一键复制为微信公众号兼容格式
- 📦 可作为独立组件使用
- 🔧 支持自定义配置

## 安装

```bash
npm install @md-wx/react
```

## 快速使用

### 完整组件

```tsx
import { MarkdownRenderer } from '@md-wx/react'

function App() {
  const content = `# Hello World

这是一段示例文字。

## 代码示例

\`\`\`javascript
function hello() {
  console.log('Hello, World!')
}
\`\`\`
`

  return <MarkdownRenderer content={content} />
}
```

### 单独使用组件

你也可以单独使用各个组件：

```tsx
import { useState } from 'react'
import { 
  PreviewArea, 
  SettingsBar, 
  ThemeSwitch, 
  ViewSwitch, 
  CopyButton, 
  useTheme,
  parseMarkdown
} from '@md-wx/react'

function CustomPage() {
  const [viewMode, setViewMode] = useState('mobile')
  const { theme, setTheme, themeConfig } = useTheme('notion')
  const html = parseMarkdown('# Hello World')

  const handleCopy = () => {
    console.log('Copied!')
  }

  return (
    <div>
      <div style={{ position: 'fixed', top: 16, left: '50%', transform: 'translateX(-50%)', zIndex: 100 }}>
        <SettingsBar 
          theme={theme}
          viewMode={viewMode}
          onThemeChange={setTheme}
          onViewModeChange={setViewMode}
          onCopy={handleCopy}
        />
      </div>
      <PreviewArea viewMode={viewMode}>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </PreviewArea>
    </div>
  )
}
```

## API 文档

### MarkdownRenderer

主渲染组件

```tsx
interface MarkdownRendererProps {
  content: string
  theme?: ThemeType
  viewMode?: ViewMode
  showSettings?: boolean
  onCopy?: () => void
}
```

| 属性 | 类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- |
| `content` | `string` | - | Markdown 内容（必填） |
| `theme` | `ThemeType` | `'notion'` | 主题类型 |
| `viewMode` | `ViewMode` | `'mobile'` | 视图模式 |
| `showSettings` | `boolean` | `true` | 是否显示设置栏 |
| `onCopy` | `() => void` | - | 复制成功回调 |

### PreviewArea

预览区域组件

```tsx
interface PreviewAreaProps {
  viewMode: ViewMode
  children: React.ReactNode
}
```

### SettingsBar

设置栏组件

```tsx
interface SettingsBarProps {
  theme: ThemeType
  viewMode: ViewMode
  onThemeChange: (theme: ThemeType) => void
  onViewModeChange: (viewMode: ViewMode) => void
  onCopy: () => void
}
```

### ThemeSwitch

主题切换按钮

```tsx
interface ThemeSwitchProps {
  theme: ThemeType
  onChange: (theme: ThemeType) => void
}
```

### ViewSwitch

视图切换按钮

```tsx
interface ViewSwitchProps {
  viewMode: ViewMode
  onChange: (viewMode: ViewMode) => void
}
```

### CopyButton

复制按钮

```tsx
interface CopyButtonProps {
  onCopy: () => void
}
```

### useTheme

主题 Hook

```tsx
function useTheme(initialTheme?: ThemeType): {
  theme: ThemeType
  setTheme: (theme: ThemeType) => void
  themeConfig: IThemeConfig
}
```

### themes

主题配置对象

```tsx
import { themes } from '@md-wx/react'

console.log(themes.notion) // 获取 Notion 主题配置
```

### parseMarkdown

Markdown 解析函数

```tsx
function parseMarkdown(content: string): string
```

### copyToClipboard

复制到剪贴板

```tsx
async function copyToClipboard(text: string): Promise<boolean>
```

### convertToWechatHtml

转换为微信公众号格式

```tsx
function convertToWechatHtml(html: string): string
```

## 主题类型

```tsx
type ThemeType = 'notion' | 'github-dark' | 'sakura' | 'sunset' | 'forest'
```

| 主题 | 说明 |
| :--- | :--- |
| `notion` | Notion 简约白 |
| `github-dark` | GitHub Dark |
| `sakura` | Sakura 樱花粉 |
| `sunset` | Sunset 日落橙 |
| `forest` | Forest 森林绿 |

## 视图类型

```tsx
type ViewMode = 'mobile' | 'desktop'
```

| 模式 | 说明 |
| :--- | :--- |
| `mobile` | 手机视图（375px 宽度） |
| `desktop` | 桌面视图（677px 最大宽度） |

## 主题配置接口

```tsx
interface IThemeConfig {
  primaryColor: string
  secondaryColor: string
  bgColor: string
  cardBg: string
  textColor: string
  textSecondary: string
  headingColor: string
  quoteBg: string
  quoteBorder: string
  codeBg: string
  codeText: string
  linkColor: string
  linkHover: string
  borderColor: string
  shadow: string
}
```

## 使用示例

### 1. 基本使用

```tsx
import { MarkdownRenderer } from '@md-wx/react'

function App() {
  const content = `# 标题

这是一段文字。`

  return <MarkdownRenderer content={content} />
}
```

### 2. 自定义主题和视图模式

```tsx
import { MarkdownRenderer } from '@md-wx/react'

function App() {
  const content = '# Hello'
  
  return (
    <MarkdownRenderer 
      content={content} 
      theme="github-dark"
      viewMode="desktop"
    />
  )
}
```

### 3. 隐藏设置栏

```tsx
import { MarkdownRenderer } from '@md-wx/react'

function App() {
  return (
    <MarkdownRenderer 
      content="# Hello" 
      showSettings={false}
    />
  )
}
```

### 4. 复制回调

```tsx
import { MarkdownRenderer } from '@md-wx/react'

function App() {
  const handleCopy = () => {
    alert('复制成功！')
  }

  return (
    <MarkdownRenderer 
      content="# Hello" 
      onCopy={handleCopy}
    />
  )
}
```

### 5. 单独使用解析器

```tsx
import { parseMarkdown, convertToWechatHtml, copyToClipboard } from '@md-wx/react'

function App() {
  const content = '# Hello World'
  
  const handleCopy = async () => {
    const html = parseMarkdown(content)
    const wechatHtml = convertToWechatHtml(html)
    await copyToClipboard(wechatHtml)
  }

  return (
    <button onClick={handleCopy}>
      复制为微信公众号格式
    </button>
  )
}
```

## 开发

### 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建
npm run build
```

### 本地发布测试

```bash
# 在组件项目目录
npm link

# 在目标项目目录
npm link @md-wx/react
```

## License

MIT
