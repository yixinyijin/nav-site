import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '关于我们',
  description: '了解导航站的故事和愿景',
}

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">关于我们</h1>

      <div className="prose prose-lg max-w-none">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">网站介绍</h2>
          <p className="text-gray-600 leading-relaxed">
            导航站是一个专注于整理和分享优质网站资源的平台。我们相信，在信息爆炸的时代，
            找到真正有价值的信息并不容易。我们的使命是帮助用户快速发现和访问最优质的网站资源。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">收录标准</h2>
          <ul className="space-y-3 text-gray-600">
            <li>• 网站内容健康、合法</li>
            <li>• 提供实用的功能或有价值的内容</li>
            <li>• 网站访问稳定，速度合理</li>
            <li>• 具有一定的独特性或特色</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">联系我们</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            如果您有任何建议或合作意向，欢迎通过以下方式联系我们：
          </p>
          <ul className="space-y-2 text-gray-600">
            <li>• 邮箱：contact@example.com</li>
            <li>• 提交收录：<a href="/submit" className="text-primary-600 hover:underline">点击这里</a></li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">免责声明</h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            导航站仅提供网站链接索引服务，不对链接网站的内容负责。
            所有链接均来自公开渠道，我们无法控制这些网站的内容和政策。
            如发现违规内容，请联系我们处理。
          </p>
        </section>
      </div>
    </div>
  )
}
