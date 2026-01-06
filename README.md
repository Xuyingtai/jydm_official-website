# 吉音动漫官网

郑州吉音动漫科技有限公司官方网站重建项目

## 项目简介

这是基于原网站 http://www.zzjydm.com/ 重新建设的现代化网站，使用 React + TypeScript + Vite 构建，提供更好的用户体验和现代化的界面设计。

## 技术栈

- **React 18** - 前端框架
- **TypeScript** - 类型安全
- **Vite** - 构建工具
- **React Router** - 路由管理
- **CSS3** - 样式设计（响应式布局）

## 功能特性

- ✅ 响应式设计，支持移动端和桌面端
- ✅ 现代化UI设计，美观易用
- ✅ 完整的页面路由系统
- ✅ 首页展示（Hero区域、服务介绍、案例展示）
- ✅ 视频案例展示页面（支持分类筛选）
- ✅ 公司原创页面（展示老子爷爷IP和获奖荣誉）
- ✅ 服务内容页面（详细介绍各项服务）
- ✅ AIGC创作平台页面
- ✅ 关于我们页面（公司介绍、发展历程）
- ✅ 联系我们页面（联系方式和在线留言表单）

## 项目结构

```
jydm_guanwang/
├── public/              # 静态资源
├── src/
│   ├── components/     # 公共组件
│   │   ├── Navbar.tsx  # 导航栏
│   │   └── Footer.tsx  # 页脚
│   ├── pages/          # 页面组件
│   │   ├── Home.tsx    # 首页
│   │   ├── Cases.tsx   # 案例展示
│   │   ├── Original.tsx # 公司原创
│   │   ├── Services.tsx # 服务内容
│   │   ├── AIGC.tsx    # AIGC平台
│   │   ├── About.tsx   # 关于我们
│   │   └── Contact.tsx # 联系我们
│   ├── App.tsx         # 主应用组件
│   ├── main.tsx        # 入口文件
│   └── index.css       # 全局样式
├── index.html          # HTML模板
├── package.json        # 项目配置
├── tsconfig.json       # TypeScript配置
├── vite.config.ts      # Vite配置
└── README.md           # 项目说明
```

## 安装和运行

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:5173 查看网站

### 构建生产版本

```bash
npm run build
```

构建文件将输出到 `dist` 目录

### 预览生产构建

```bash
npm run preview
```

## 页面说明

### 首页 (/)
- Hero区域展示公司slogan
- 服务内容介绍（4个主要服务）
- 案例展示（6个精选案例）
- AIGC平台最新资讯

### 视频案例展示 (/cases)
- 支持按类别筛选案例
- 展示所有案例的详细信息
- 每个案例包含标题、类别和描述

### 公司原创 (/original)
- 老子爷爷IP介绍
- 获奖荣誉展示
- 团队作品展示

### 服务内容 (/services)
- 详细的服务项目介绍
- 每个服务的功能特点
- 代表作品展示

### AIGC创作平台 (/aigc)
- AIGC平台介绍
- 最新资讯列表
- 平台特色功能

### 关于我们 (/about)
- 公司简介
- 企业认证信息
- 企业价值观
- 发展历程时间线
- 团队作品

### 联系我们 (/contact)
- 郑州总公司和内蒙分公司的联系方式
- 在线留言表单

## 开发说明

### 添加新页面

1. 在 `src/pages/` 目录下创建新的页面组件
2. 在 `src/App.tsx` 中添加路由
3. 在 `src/components/Navbar.tsx` 中添加导航链接

### 样式定制

全局样式变量定义在 `src/index.css` 的 `:root` 中：

- `--primary-color`: 主色调
- `--secondary-color`: 次要色调
- `--accent-color`: 强调色
- `--text-primary`: 主要文本颜色
- `--text-secondary`: 次要文本颜色

### 响应式设计

所有页面都采用响应式设计，主要断点：
- 移动端: < 768px
- 平板: 768px - 968px
- 桌面端: > 968px

## 待完善功能

- [ ] 添加实际的项目图片和视频
- [ ] 集成视频播放器组件
- [ ] 添加图片懒加载
- [ ] 实现表单后端提交功能
- [ ] 添加SEO优化
- [ ] 添加多语言支持（如需要）
- [ ] 添加动画效果库（如Framer Motion）

## 浏览器支持

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)

## 许可证

Copyright © 吉音动漫 All Rights Reserved

## 联系方式

- 郑州总公司
  - QQ: 898658049
  - 电话: 15515790317
  - 邮箱: 898658049@qq.com

- 内蒙分公司
  - QQ: 741644470
  - 电话: 15754940298
  - 邮箱: 741644470@qq.com

