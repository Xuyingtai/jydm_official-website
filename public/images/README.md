# 图片资源目录

## 目录结构

将图片文件放在以下目录中：

```
public/
├── images/
│   ├── cases/          # 案例展示图片
│   ├── logo/           # Logo和品牌图片
│   ├── laozi/          # 老子爷爷IP相关图片
│   └── partners/       # 合作伙伴Logo
```

## 使用方式

### 方式一：使用 public 目录（推荐用于大量图片）

1. 将图片文件直接放入 `public/images/` 对应的子目录
2. 在代码中使用绝对路径引用：

```tsx
// 示例：案例图片
image: '/images/cases/case-1.jpg'

// 示例：Logo
<img src="/images/logo/logo.png" alt="Logo" />
```

### 方式二：使用 src/assets 目录（推荐用于少量重要图片）

1. 将图片放入 `src/assets/images/` 目录
2. 在代码中导入使用：

```tsx
import caseImage from '@/assets/images/cases/case-1.jpg'

// 使用
<img src={caseImage} alt="案例" />
```

## 图片命名规范

建议使用有意义的文件名：
- 案例图片：`case-1.jpg`, `case-2.jpg` 或 `case-宪法统计.jpg`
- Logo：`logo.png`, `logo-white.png`
- 老子爷爷：`laozi-character.png`, `laozi-award.jpg`

## 图片格式建议

- **JPG/JPEG**: 适合照片、复杂图像（文件小）
- **PNG**: 适合Logo、图标、需要透明背景的图片
- **WebP**: 现代格式，文件更小，但需要浏览器支持
- **SVG**: 适合图标、Logo（矢量图，可缩放）

## 图片尺寸建议

- 案例缩略图：400x300px 或 800x600px
- 案例详情图：1200x800px 或更大
- Logo：根据实际需求，建议提供多种尺寸

