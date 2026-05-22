import { convertToWechatHtml } from './wechatConverter'

describe('wechatConverter', () => {
  describe('convertToWechatHtml', () => {
    it('should convert headings with inline styles', () => {
      const html = '<h1>Heading</h1>'
      const result = convertToWechatHtml(html)
      expect(result).toContain('style=')
      expect(result).toContain('font-size: 28px')
    })

    it('should convert paragraphs with inline styles', () => {
      const html = '<p>Hello</p>'
      const result = convertToWechatHtml(html)
      expect(result).toContain('margin: 12px 0')
      expect(result).toContain('line-height: 1.8')
    })

    it('should convert code blocks with inline styles', () => {
      const html = '<pre><code>console.log("hello")</code></pre>'
      const result = convertToWechatHtml(html)
      expect(result).toContain('white-space: pre-wrap')
      expect(result).toContain('font-family: monospace')
    })

    it('should convert blockquotes with inline styles', () => {
      const html = '<blockquote>Quote</blockquote>'
      const result = convertToWechatHtml(html)
      expect(result).toContain('border-left: 4px solid #238636')
      expect(result).toContain('padding-left: 16px')
    })

    it('should convert lists with inline styles', () => {
      const html = '<ul><li>item</li></ul>'
      const result = convertToWechatHtml(html)
      expect(result).toContain('padding-left: 24px')
    })

    it('should convert links with inline styles', () => {
      const html = '<a href="https://example.com">link</a>'
      const result = convertToWechatHtml(html)
      expect(result).toContain('color: #0969da')
      expect(result).toContain('text-decoration: underline')
    })

    it('should convert tables with inline styles', () => {
      const html = '<table><tr><th>Header</th></tr><tr><td>Data</td></tr></table>'
      const result = convertToWechatHtml(html)
      expect(result).toContain('border-collapse: collapse')
      expect(result).toContain('border: 1px solid')
    })

    it('should convert images with max-width style', () => {
      const html = '<img src="https://example.com/img.png" />'
      const result = convertToWechatHtml(html)
      expect(result).toContain('max-width: 100%')
      expect(result).toContain('height: auto')
    })

    it('should convert div to table structure for WeChat compatibility', () => {
      const html = '<div>content</div>'
      const result = convertToWechatHtml(html)
      expect(result).toContain('<table')
      expect(result).toContain('<tr')
      expect(result).toContain('<td')
    })
  })
})
