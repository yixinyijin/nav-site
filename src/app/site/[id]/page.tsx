import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { allSites, getSiteById, getRelatedSites, getCategoryById } from '@/lib/data'
import Link from 'next/link'
import SiteCard from '@/components/SiteCard'

interface Props {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const site = getSiteById(params.id)
  if (!site) {
    return { title: '站点不存在' }
  }
  return {
    title: site.name,
    description: site.description,
    openGraph: {
      title: site.name,
      description: site.description,
      type: 'website',
    },
  }
}

export function generateStaticParams() {
  return allSites.map((site) => ({
    id: site.id,
  }))
}

export default function SitePage({ params }: Props) {
  const site = getSiteById(params.id)

  if (!site) {
    notFound()
  }

  const category = getCategoryById(site.category)
  const relatedSites = getRelatedSites(site, 6)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm">
        <ol className="flex items-center space-x-2">
          <li>
            <Link href="/" className="text-gray-500 hover:text-gray-700">
              首页
            </Link>
          </li>
          <li className="text-gray-400">/</li>
          {category && (
            <>
              <li>
                <Link
                  href={`/category/${category.id}`}
                  className="text-gray-500 hover:text-gray-700"
                >
                  {category.name}
                </Link>
              </li>
              <li className="text-gray-400">/</li>
            </>
          )}
          <li className="text-gray-900 font-medium">{site.name}</li>
        </ol>
      </nav>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Site Info */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{site.name}</h1>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span className="bg-primary-100 text-primary-700 px-2 py-0.5 rounded">
                    {category?.name}
                  </span>
                  {site.featured && (
                    <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded">
                      推荐
                    </span>
                  )}
                </div>
              </div>
            </div>

            <p className="text-gray-600 text-lg mb-6">{site.description}</p>

            <div className="flex flex-wrap gap-2 mb-8">
              {site.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition font-medium"
            >
              访问网站
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Related Sites */}
          {relatedSites.length > 0 && (
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">相关推荐</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedSites.map((relatedSite) => (
                  <SiteCard key={relatedSite.id} site={relatedSite} />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 sticky top-24">
            <h3 className="font-semibold text-gray-900 mb-4">站点信息</h3>
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="text-gray-500">分类</dt>
                <dd className="mt-1">
                  {category && (
                    <Link
                      href={`/category/${category.id}`}
                      className="text-primary-600 hover:underline"
                    >
                      {category.icon} {category.name}
                    </Link>
                  )}
                </dd>
              </div>
              <div>
                <dt className="text-gray-500">标签</dt>
                <dd className="mt-1 flex flex-wrap gap-1">
                  {site.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="text-gray-500">访问</dt>
                <dd className="mt-1">
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:underline break-all"
                  >
                    {site.url}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
