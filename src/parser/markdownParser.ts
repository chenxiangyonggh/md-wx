import hljs from 'highlight.js'
import MarkdownIt from 'markdown-it'
import tableOfContents from 'markdown-it-table-of-contents'
import taskLists from 'markdown-it-task-lists'

// @ts-ignore
const md = new (MarkdownIt.default || MarkdownIt)({
  html: true,
  xhtmlOut: true,
  breaks: true,
  linkify: true,
  typographer: true,
  highlight: function (str: string, lang: string): string {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang }).value
      } catch (__) {
        // ignore
      }
    }
    return md.utils.escapeHtml(str)
  },
})

md.use(tableOfContents)
md.use(taskLists)

export function parseMarkdown(content: string): string {
  return md.render(content)
}

export function sanitizeHtml(html: string): string {
  return html
    .replace(/<div[^>]*>/g, '<span>')
    .replace(/<\/div>/g, '</span>')
}
