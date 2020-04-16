import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const servicesDirectory = join(process.cwd(), '_services')

export function getServiceSlugs() {
  return fs.readdirSync(servicesDirectory)
}

export function getServicesBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(servicesDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }
    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllServices(fields = []) {
  const slugs = getServiceSlugs()
  return slugs.map((slug) => getServicesBySlug(slug, fields))
}
