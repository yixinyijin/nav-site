import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl">🌐</span>
            <span className="text-xl font-bold text-gray-900">导航站</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-primary-600 transition">
              首页
            </Link>
            <Link href="/submit" className="text-gray-600 hover:text-primary-600 transition">
              提交收录
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-primary-600 transition">
              关于
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <form action="/search" className="hidden sm:flex items-center">
              <input
                type="search"
                name="q"
                placeholder="搜索资源..."
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent w-48 lg:w-64"
              />
            </form>
          </div>
        </div>
      </div>
    </header>
  )
}
