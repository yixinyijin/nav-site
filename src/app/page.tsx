import { Metadata } from 'next'
import { categories, getFeaturedSites } from '@/lib/data'
import CategoryCard from '@/components/CategoryCard'
import SiteCard from '@/components/SiteCard'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '首页',
  description: '导航站 - 精选优质网站资源，包括搜索引擎、社交媒体、开发工具、设计资源等各类实用网站。',
}

export default function Home() {
  const featuredSites = getFeaturedSites()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          探索优质网站资源
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          精心整理各类实用网站，帮助您提升工作效率，发现更多精彩内容
        </p>
        <form action="/search" className="max-w-xl mx-auto">
          <div className="flex gap-2">
            <input
              type="search"
              name="q"
              placeholder="搜索网站..."
              className="flex-1 px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition font-medium"
            >
              搜索
            </button>
          </div>
        </form>
      </section>

      {/* Featured Sites */}
      {featuredSites.length > 0 && (
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">精选推荐</h2>
            <Link href="/category/search" className="text-primary-600 hover:text-primary-700">
              查看全部 →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredSites.map((site) => (
              <SiteCard key={site.id} site={site} />
            ))}
          </div>
        </section>
      )}

      {/* Categories */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">网站分类</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="mt-16 bg-primary-50 rounded-2xl p-8 text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="text-3xl font-bold text-primary-600">{categories.length}</div>
            <div className="text-gray-600 mt-1">个分类</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-600">20+</div>
            <div className="text-gray-600 mt-1">个精选站点</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-600">100%</div>
            <div className="text-gray-600 mt-1">免费访问</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-600">Daily</div>
            <div className="text-gray-600 mt-1">持续更新</div>
          </div>
        </div>
      </section>
    </div>
  )
}
