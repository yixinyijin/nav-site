import Link from 'next/link'
import { Category, getSitesByCategory } from '@/lib/data'

interface CategoryCardProps {
  category: Category
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const sites = getSitesByCategory(category.id)
  const siteCount = sites.length

  return (
    <Link
      href={`/category/${category.id}`}
      className="block bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100"
    >
      <div className="flex items-center mb-4">
        <span className="text-3xl mr-3">{category.icon}</span>
        <div>
          <h3 className="font-semibold text-gray-900">{category.name}</h3>
          <p className="text-sm text-gray-500">{siteCount} 个站点</p>
        </div>
      </div>
      <p className="text-sm text-gray-600 mb-4">{category.desc}</p>
      <div className="flex flex-wrap gap-2">
        {sites.slice(0, 4).map((site) => (
          <span
            key={site.id}
            className="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded"
          >
            {site.name}
          </span>
        ))}
        {siteCount > 4 && (
          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
            +{siteCount - 4} 更多
          </span>
        )}
      </div>
    </Link>
  )
}
