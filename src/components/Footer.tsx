import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">导航分类</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/category/search" className="hover:text-primary-600">搜索引擎</Link></li>
              <li><Link href="/category/social" className="hover:text-primary-600">社交媒体</Link></li>
              <li><Link href="/category/tools" className="hover:text-primary-600">在线工具</Link></li>
              <li><Link href="/category/dev" className="hover:text-primary-600">开发工具</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">帮助</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/submit" className="hover:text-primary-600">提交收录</Link></li>
              <li><Link href="/about" className="hover:text-primary-600">关于我们</Link></li>
              <li><Link href="/privacy" className="hover:text-primary-600">隐私政策</Link></li>
            </ul>
          </div>
          <div className="col-span-2">
            <h3 className="font-semibold text-gray-900 mb-4">关于我们</h3>
            <p className="text-sm text-gray-600">
              整理优质网站资源，帮助您更快找到所需。
            </p>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} 导航站. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
