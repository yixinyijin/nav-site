import Link from 'next/link'
import { Site } from '@/lib/data'

interface SiteCardProps {
  site: Site
}

export default function SiteCard({ site }: SiteCardProps) {
  return (
    <Link
      href={`/site/${site.id}`}
      className="block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100"
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 mb-1">{site.name}</h3>
          <p className="text-sm text-gray-600 line-clamp-2 mb-3">{site.description}</p>
          <div className="flex flex-wrap gap-2">
            {site.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        {site.featured && (
          <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full ml-2">
            推荐
          </span>
        )}
      </div>
    </Link>
  )
}
