# 视频URL配置说明

## 📹 如何添加视频链接

视频播放功能已经实现！现在您只需要在 `src/pages/VideoPlayer.tsx` 文件中添加视频URL即可。

### 步骤1：打开视频播放器文件

打开 `src/pages/VideoPlayer.tsx` 文件，找到 `videoUrls` 对象：

```tsx
const videoUrls: { [key: string]: string } = {
  // 在这里添加视频URL
  // '1': 'https://example.com/video1.mp4',
  // '2': 'https://player.bilibili.com/player.html?bvid=xxxxx',
}
```

### 步骤2：添加视频URL

根据案例ID添加对应的视频URL。案例ID对应关系：

| 案例ID | 案例名称 |
|--------|---------|
| 1 | 我与宪法-郑州市统计局政策 |
| 2 | VR360全景视频拍摄-印尼美娜多的日出横屏 |
| 3 | VR360全景视频拍摄-印尼美娜多的日出-互动版 |
| 4 | 国家电网-安全操作动画 |
| 5 | 河南省公安厅-预防金融诈骗动画宣传片 |
| ... | ... |

### 步骤3：根据视频平台选择格式

#### 方式一：B站（Bilibili）

```tsx
'1': 'https://player.bilibili.com/player.html?bvid=BVxxxxx&page=1'
```

#### 方式二：优酷（Youku）

```tsx
'2': 'https://player.youku.com/embed/XNzxxxxx'
```

#### 方式三：腾讯视频

```tsx
'3': 'https://v.qq.com/txp/iframe/player.html?vid=xxxxx'
```

#### 方式四：爱奇艺

```tsx
'4': 'https://www.iqiyi.com/v_xxxxx.html'
```

#### 方式五：直接MP4链接

```tsx
'5': 'https://example.com/video.mp4'
```

#### 方式六：其他视频平台

大多数视频平台都支持iframe嵌入，直接使用平台的嵌入链接即可。

### 完整示例

```tsx
const videoUrls: { [key: string]: string } = {
  '1': 'https://player.bilibili.com/player.html?bvid=BV1xx411c7mD&page=1',
  '2': 'https://player.youku.com/embed/XNzxxxxx',
  '3': 'https://v.qq.com/txp/iframe/player.html?vid=xxxxx',
  '4': 'https://example.com/videos/国家电网.mp4',
  '5': 'https://player.bilibili.com/player.html?bvid=BV1xx411c7mD&page=1',
  // ... 继续添加其他案例的视频URL
}
```

## 🎯 功能说明

### 已实现的功能

1. ✅ **点击案例跳转** - 点击任意案例卡片会跳转到视频播放页面
2. ✅ **视频播放页面** - 专门的视频播放页面，支持多种视频平台
3. ✅ **自动识别平台** - 自动识别B站、优酷、腾讯视频等平台
4. ✅ **返回按钮** - 视频页面有返回按钮，可以返回案例列表
5. ✅ **响应式设计** - 视频播放器支持移动端和桌面端

### 支持的视频平台

- ✅ B站（Bilibili）
- ✅ 优酷（Youku）
- ✅ 腾讯视频
- ✅ 爱奇艺
- ✅ 直接MP4链接
- ✅ 其他支持iframe嵌入的平台

## 📝 注意事项

1. **视频URL格式**：确保使用正确的嵌入链接，不是普通播放页面的链接
2. **HTTPS协议**：建议使用HTTPS协议的链接，避免浏览器安全限制
3. **跨域问题**：某些视频平台可能有跨域限制，如果无法播放，请检查视频平台的嵌入设置
4. **案例ID**：案例ID必须与 `Cases.tsx` 中的案例ID一致

## 🔍 如何获取视频嵌入链接

### B站
1. 打开视频页面
2. 点击"分享"按钮
3. 选择"嵌入代码"
4. 复制iframe的src属性值

### 优酷
1. 打开视频页面
2. 点击"分享"按钮
3. 选择"嵌入代码"
4. 复制iframe的src属性值

### 腾讯视频
1. 打开视频页面
2. 点击"分享"按钮
3. 选择"嵌入代码"
4. 复制iframe的src属性值

## 🚀 快速开始

1. 打开 `src/pages/VideoPlayer.tsx`
2. 在 `videoUrls` 对象中添加视频URL
3. 保存文件
4. 在浏览器中点击案例，即可播放视频！

---

**提示**：如果您有所有视频的URL列表，我可以帮您批量添加到代码中！

