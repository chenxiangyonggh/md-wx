import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MarkdownRenderer from './components/MarkdownRenderer'

const defaultMarkdown = `# Markdown 渲染组件

欢迎使用专为微信公众号优化的 Markdown 渲染组件！

## 功能特点

- **实时预览**：支持 Markdown 实时渲染
- **多主题切换**：5 种预设主题供选择
- **响应式设计**：支持手机/桌面视图
- **一键复制**：复制内容直接粘贴到微信公众号

## 代码示例

\`\`\`javascript
import { MarkdownRenderer } from '@md-wx/react';

function App() {
  const content = '# Hello World';
  return <MarkdownRenderer content={content} />;
}
\`\`\`

## 支持的语法

### 强调文字

这是 **粗体** 文字，这是 *斜体* 文字。

### 引用

> 这是一段引用文字，可以用来展示重要信息或名言。

### 列表

**无序列表：**
- 第一项
- 第二项
- 第三项

**有序列表：**
1. 第一步
2. 第二步
3. 第三步

### 表格

| 功能 | 描述 | 状态 |
|------|------|------|
| 主题切换 | 5种预设主题 | ✅ |
| 视图切换 | 手机/桌面 | ✅ |
| 代码高亮 | GitHub Dark | ✅ |
| 一键复制 | 微信兼容 | ✅ |

## 链接

访问 [GitHub](https://github.com) 了解更多。

---

*组件版本：v1.0.0*
`

function App() {
  const [content, setContent] = useState(defaultMarkdown)

  return (
    <div className="flex h-screen">
      <div className="w-1/2 border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Markdown 编辑器</h2>
        </div>
        <textarea
          className="flex-1 w-full p-4 resize-none font-mono text-sm"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="在此输入 Markdown 内容..."
        />
      </div>
      <div className="w-1/2 bg-gray-50">
        <div className="h-full overflow-auto">
          <MarkdownRenderer content={content} />
        </div>
      </div>
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
