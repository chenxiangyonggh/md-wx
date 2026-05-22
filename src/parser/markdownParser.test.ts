import { parseMarkdown } from './markdownParser'

describe('markdownParser', () => {
  describe('parseMarkdown', () => {
    it('should render headings', () => {
      const result = parseMarkdown('# Heading 1\n## Heading 2\n### Heading 3')
      expect(result).toContain('<h1')
      expect(result).toContain('<h2')
      expect(result).toContain('<h3')
    })

    it('should render paragraphs', () => {
      const result = parseMarkdown('This is a paragraph.')
      expect(result).toContain('<p')
      expect(result).toContain('This is a paragraph.')
    })

    it('should render bold and italic', () => {
      const result = parseMarkdown('**bold** and *italic*')
      expect(result).toContain('<strong')
      expect(result).toContain('<em')
    })

    it('should render code blocks', () => {
      const result = parseMarkdown('```javascript\nconsole.log("hello");\n```')
      expect(result).toContain('<pre')
      expect(result).toContain('<code')
    })

    it('should render inline code', () => {
      const result = parseMarkdown('Use `console.log()`')
      expect(result).toContain('<code')
      expect(result).toContain('console.log()')
    })

    it('should render links', () => {
      const result = parseMarkdown('[link](https://example.com)')
      expect(result).toContain('<a')
      expect(result).toContain('href="https://example.com"')
    })

    it('should render images', () => {
      const result = parseMarkdown('![alt](https://example.com/image.png)')
      expect(result).toContain('<img')
      expect(result).toContain('src="https://example.com/image.png"')
    })

    it('should render blockquotes', () => {
      const result = parseMarkdown('> This is a quote')
      expect(result).toContain('<blockquote')
    })

    it('should render lists', () => {
      const ulResult = parseMarkdown('- item 1\n- item 2')
      expect(ulResult).toContain('<ul')
      expect(ulResult).toContain('<li')

      const olResult = parseMarkdown('1. first\n2. second')
      expect(olResult).toContain('<ol')
      expect(olResult).toContain('<li')
    })

    it('should render horizontal rules', () => {
      const result = parseMarkdown('---')
      expect(result).toContain('<hr')
    })

    it('should render tables', () => {
      const result = parseMarkdown('| a | b |\n|---|---|\n| 1 | 2 |')
      expect(result).toContain('<table')
      expect(result).toContain('<th')
      expect(result).toContain('<td')
    })

    it('should render task lists', () => {
      const result = parseMarkdown('- [ ] unchecked\n- [x] checked')
      expect(result).toContain('task-list-item')
    })
  })
})
