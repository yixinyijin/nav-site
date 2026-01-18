import sitesData from '@/data/sites.json'

export interface Category {
  id: string
  name: string
  icon: string
  desc: string
}

export interface Site {
  id: string
  name: string
  description: string
  url: string
  category: string
  tags: string[]
  weight: number
  featured: boolean
}

export const categories: Category[] = sitesData.categories
export const allSites: Site[] = sitesData.sites

export function getSitesByCategory(categoryId: string): Site[] {
  return allSites
    .filter((site) => site.category === categoryId)
    .sort((a, b) => b.weight - a.weight)
}

export function getSiteById(id: string): Site | undefined {
  return allSites.find((site) => site.id === id)
}

export function getFeaturedSites(): Site[] {
  return allSites
    .filter((site) => site.featured)
    .sort((a, b) => b.weight - a.weight)
    .slice(0, 12)
}

export function searchSites(keyword: string): Site[] {
  const lowerKeyword = keyword.toLowerCase()
  return allSites
    .filter(
      (site) =>
        site.name.toLowerCase().includes(lowerKeyword) ||
        site.description.toLowerCase().includes(lowerKeyword) ||
        site.tags.some((tag) => tag.toLowerCase().includes(lowerKeyword))
    )
    .sort((a, b) => b.weight - a.weight)
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find((cat) => cat.id === id)
}

export function getRelatedSites(site: Site, limit: number = 6): Site[] {
  return allSites
    .filter(
      (s) =>
        s.id !== site.id &&
        (s.category === site.category ||
          s.tags.some((tag) => site.tags.includes(tag)))
    )
    .sort((a, b) => b.weight - a.weight)
    .slice(0, limit)
}
