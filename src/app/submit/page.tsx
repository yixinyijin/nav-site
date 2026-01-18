import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '提交收录',
  description: '提交您想要收录的优质网站',
}

export default function SubmitPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">提交收录</h1>
        <p className="text-gray-600">
          推荐您认为优质的网站，我们会尽快审核处理
        </p>
      </div>

      <form
        className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 space-y-6"
        action="https://formspree.io/f/your-form-id"
        method="POST"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            网站名称 *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="输入网站名称"
          />
        </div>

        <div>
          <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-2">
            网站地址 *
          </label>
          <input
            type="url"
            id="url"
            name="url"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="https://example.com"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
            网站描述 *
          </label>
          <textarea
            id="description"
            name="description"
            required
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="简要描述网站的主要内容和功能"
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
            所属分类
          </label>
          <select
            id="category"
            name="category"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="">请选择分类</option>
            <option value="search">搜索引擎</option>
            <option value="social">社交媒体</option>
            <option value="tools">在线工具</option>
            <option value="design">设计资源</option>
            <option value="dev">开发工具</option>
            <option value="learning">学习教育</option>
            <option value="media">媒体娱乐</option>
            <option value="shopping">购物消费</option>
            <option value="other">其他</option>
          </select>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            联系方式（可选）
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="your@email.com"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition font-medium"
        >
          提交审核
        </button>

        <p className="text-sm text-gray-500 text-center">
          提交即表示您同意网站的收录规则
        </p>
      </form>
    </div>
  )
}
