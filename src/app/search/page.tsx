import { Metadata } from 'next'
import { searchSites } from '@/lib/data'
import SiteCard from '@/components/SiteCard'

interface Props {
  searchParams: { q?: string }
}

export const metadata: Metadata = {
  title: '搜索',
  description: '搜索优质网站资源',
}

export default function SearchPage({ searchParams }: Props) {
  const query = searchParams.q || ''
  const results = query ? searchSites(query) : []

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        搜索结果
        {query && (
          <span className="text-lg font-normal text-gray-500 ml-2">
            「{query}」相关站点 ({results.length}个)
          </span>
        )}
      </h1>

      {/* Search Form */}
      <form action="/search" className="mb-8">
        <div className="flex gap-2 max-w-xl">
          <input
            type="search"
            name="q"
            defaultValue={query}
            placeholder="搜索网站..."
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition font-medium"
          >
            搜索
          </button>
        </div>
      </form>

      {/* Results */}
      {query ? (
        results.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((site) => (
              <SiteCard key={site.id} site={site} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-gray-50 rounded-xl">
            <p className="text-gray-500 text-lg mb-4">未找到相关站点</p>
            <p className="text-gray-400 text-sm">试试其他关键词，或提交新站点收录</p>
          </div>
        )
      ) : (
        <div className="text-center py-16">
          <p className="text-gray-500 text-lg">请输入关键词进行搜索</p>
        </div>
      )}
    </div>
  )
}
