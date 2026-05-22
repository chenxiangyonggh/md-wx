export function convertToWechatHtml(html: string): string {
  let result = html

  result = result
    .replace(/<div([^>]*)>/g, '<table$1><tr><td>')
    .replace(/<\/div>/g, '</td></tr></table>')

  result = result.replace(/<span style="([^"]*)">/g, '<span style="$1">')

  result = result.replace(/<pre([^>]*)>/g, '<pre$1 style="white-space: pre-wrap; word-break: break-all;">')

  result = result.replace(/<code([^>]*)>/g, '<code$1 style="font-family: monospace;">')

  result = result.replace(/<blockquote([^>]*)>/g, '<blockquote$1 style="border-left: 4px solid #238636; padding-left: 16px; margin: 16px 0;">')

  result = result.replace(/<h1([^>]*)>/g, '<h1$1 style="font-size: 28px; font-weight: 700; margin: 24px 0 16px; border-bottom: 2px solid #e5e7eb; padding-bottom: 8px;">')
  result = result.replace(/<h2([^>]*)>/g, '<h2$1 style="font-size: 24px; font-weight: 600; margin: 20px 0 12px; padding-left: 16px; border-left: 4px solid #1f2937;">')
  result = result.replace(/<h3([^>]*)>/g, '<h3$1 style="font-size: 20px; font-weight: 600; margin: 16px 0 10px; padding-left: 14px; border-left: 3px solid #1f2937;">')
  result = result.replace(/<h4([^>]*)>/g, '<h4$1 style="font-size: 18px; font-weight: 600; margin: 14px 0 8px; padding-left: 12px; border-left: 3px solid #1f2937;">')
  result = result.replace(/<h5([^>]*)>/g, '<h5$1 style="font-size: 16px; font-weight: 600; margin: 12px 0 6px; padding-left: 10px; border-left: 2px solid #1f2937;">')
  result = result.replace(/<h6([^>]*)>/g, '<h6$1 style="font-size: 16px; font-weight: 600; margin: 12px 0 6px; padding-left: 10px; border-left: 2px solid #1f2937;">')

  result = result.replace(/<p([^>]*)>/g, '<p$1 style="margin: 12px 0; line-height: 1.8;">')

  result = result.replace(/<ul([^>]*)>/g, '<ul$1 style="padding-left: 24px; margin: 12px 0;">')
  result = result.replace(/<ol([^>]*)>/g, '<ol$1 style="padding-left: 24px; margin: 12px 0;">')
  result = result.replace(/<li([^>]*)>/g, '<li$1 style="margin: 6px 0;">')

  result = result.replace(/<a([^>]*)>/g, '<a$1 style="color: #0969da; text-decoration: underline;">')

  result = result.replace(/<strong([^>]*)>/g, '<strong$1 style="font-weight: 600;">')
  result = result.replace(/<em([^>]*)>/g, '<em$1 style="font-style: italic;">')

  result = result.replace(/<table([^>]*)>/g, '<table$1 style="width: 100%; border-collapse: collapse; margin: 16px 0;">')
  result = result.replace(/<th([^>]*)>/g, '<th$1 style="border: 1px solid #e5e7eb; padding: 12px; text-align: left; background: #f7f7f5;">')
  result = result.replace(/<td([^>]*)>/g, '<td$1 style="border: 1px solid #e5e7eb; padding: 12px;">')

  result = result.replace(/<hr([^>]*)>/g, '<hr$1 style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;">')

  result = result.replace(/<img([^>]*)>/g, (match, attrs) => {
    if (!attrs.includes('style=')) {
      return `<img${attrs} style="max-width: 100%; height: auto;">`
    }
    return match
  })

  result = result.replace(/&lt;/g, '<')
  result = result.replace(/&gt;/g, '>')
  result = result.replace(/&amp;/g, '&')

  return result
}
