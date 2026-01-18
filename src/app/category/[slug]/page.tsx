import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { categories, getSitesByCategory } from '@/lib/data'
import SiteCard from '@/components/SiteCard'

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = categories.find((c) => c.id === params.slug)
  if (!category) {
    return { title: '分类不存在' }
  }
  return {
    title: category.name,
    description: `${category.name}分类下的优质网站资源整理`,
  }
}

export function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.id,
  }))
}

export default function CategoryPage({ params }: Props) {
  const category = categories.find((c) => c.id === params.slug)

  if (!category) {
    notFound()
  }

  const sites = getSitesByCategory(params.slug)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <span className="text-4xl mr-4">{category.icon}</span>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{category.name}</h1>
            <p className="text-gray-600 mt-1">{category.desc}</p>
          </div>
        </div>
        <p className="text-gray-600">
          共收录 <span className="font-semibold text-primary-600">{sites.length}</span> 个站点
        </p>
      </div>

      {/* Sites Grid */}
      {sites.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sites.map((site) => (
            <SiteCard key={site.id} site={site} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-gray-500 text-lg">该分类暂无收录站点</p>
        </div>
      )}
    </div>
  )
}
