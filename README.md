# VuePress Vue3 官方网站

基于VuePress Vue3构建的现代化官方网站项目。

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 本地开发

```bash
npm run dev
```

访问 http://localhost:8080 查看网站。

### 构建生产版本

```bash
npm run build
```

构建文件将生成在 `docs/.vuepress/dist` 目录中。

## 📁 项目结构

```
├── docs/                    # 文档源文件
│   ├── .vuepress/          # VuePress 配置目录
│   │   └── config.js       # 配置文件
│   ├── README.md           # 首页
│   ├── products/           # 产品页面
│   ├── solutions/          # 解决方案页面
│   ├── about/              # 关于我们页面
│   └── docs/               # 文档页面
├── .github/workflows/      # GitHub Actions 配置
├── package.json            # 项目配置
└── README.md              # 项目说明
```

## 🔧 技术栈

- **VuePress**: 静态站点生成器
- **Vue 3**: 前端框架
- **Vite**: 构建工具
- **SCSS**: CSS 预处理器
- **GitHub Actions**: 自动化部署

## 🚀 自动部署

项目配置了 GitHub Actions 自动部署流程：

1. 推送代码到 `master` 分支
2. GitHub Actions 自动构建项目
3. 部署到 GitHub Pages

### 启用 GitHub Pages

1. 进入仓库设置页面
2. 找到 "Pages" 选项
3. 选择 "GitHub Actions" 作为部署源
4. 推送代码即可自动部署

## 📝 内容管理

### 添加新页面

1. 在相应目录下创建 `.md` 文件
2. 在 `docs/.vuepress/config.js` 中更新导航和侧边栏配置
3. 提交并推送代码

### 修改网站配置

编辑 `docs/.vuepress/config.js` 文件来修改：
- 网站标题和描述
- 导航栏配置
- 侧边栏配置
- 主题设置

## 🤝 贡献指南

1. Fork 本仓库
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。