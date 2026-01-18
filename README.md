# 导航站 - 优质网站资源导航

一个基于 Next.js 14 + Tailwind CSS 构建的网站导航站，适合 SEO 和副业变现。

## 功能特点

- 分类导航：按类别整理优质网站
- 搜索功能：快速查找所需资源
- 收录提交：用户可提交新站点
- SEO友好：完整的 Meta 标签和 Sitemap
- 响应式设计：适配各种设备

## 快速开始

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建生产版本
npm run build

# 本地预览
npm run start
```

## 部署到 Vercel

1. 将项目推送到 GitHub
2. 在 Vercel 中导入项目
3. Vercel 会自动识别 Next.js 并部署

## 数据管理

网站数据存储在 `src/data/sites.json` 中，格式如下：

```json
{
  "categories": [
    { "id": "dev", "name": "开发工具", "icon": "💻", "desc": "程序员必备工具" }
  ],
  "sites": [
    {
      "id": "github",
      "name": "GitHub",
      "description": "全球最大的代码托管平台",
      "url": "https://github.com",
      "category": "dev",
      "tags": ["代码", "开源"],
      "weight": 100,
      "featured": true
    }
  ]
}
```

## 变现方式

1. 广告位：顶部、侧边栏广告
2. 付费收录：VIP 位置展示
3. Affiliate：推广佣金链接
4. 出售链接：优质位置外链

## License

MIT
