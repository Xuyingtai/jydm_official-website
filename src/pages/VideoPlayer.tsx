import { useParams, useNavigate } from 'react-router-dom'
import './VideoPlayer.css'

const VideoPlayer = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  // 这里存储所有案例的视频URL映射
  // 优酷视频链接已转换为可嵌入的iframe格式
  const videoUrls: { [key: string]: string } = {
    '1': 'https://player.youku.com/embed/XNDEwNjQyMDYyNA==',
    '4': 'https://player.youku.com/embed/XNDEwNjQxNDE2OA==',
    '5': 'https://player.youku.com/embed/XNDEwNjMwNDA0OA==',
    '6': 'https://player.youku.com/embed/XNDA4NzU3MDI2NA==',
    '7': 'https://player.youku.com/embed/XNDA2ODY5Mzg5Ng==',
    '8': 'https://player.youku.com/embed/XNDEwNjMxMjcxNg==',
    '9': 'https://player.youku.com/embed/XNDEwNjYwNDY3Mg==',
    '10': 'https://player.youku.com/embed/XNDEwNjQyMzYyOA==',
    '11': 'https://player.youku.com/embed/XNDEwNjM4MDc0MA==',
    '12': 'https://player.youku.com/embed/XNDEwNjMwNTYyMA==',
    '13': 'https://player.youku.com/embed/XNDEwNjM1NjU0NA==',
    '14': 'https://player.youku.com/embed/XNDEwNjYyNTk0MA==',
    '15': 'https://player.youku.com/embed/XNDEwNjM1Nzk1Mg==',
    '16': 'https://player.youku.com/embed/XNDA4NzU2NTA2MA==',
    '17': 'https://player.youku.com/embed/XNDEwNjMyMTI3Mg==',
    '18': 'https://player.youku.com/embed/XNDA4NzU2NDcwNA==',
    '19': 'https://player.youku.com/embed/XNDEwNjI5OTUwMA==',
    '20': 'https://player.youku.com/embed/XNDEwNjQxODkxNg==',
    '21': 'https://player.youku.com/embed/XNDEwNjYwNjMwNA==',
    '22': 'https://player.youku.com/embed/XNDA4NzU2NDY2NA==',
    '23': 'https://player.youku.com/embed/XNDA4NzU2NDY2OA==',
    '24': 'https://player.youku.com/embed/XNDEwNjM5MzMwNA==',
    '25': 'https://player.youku.com/embed/XNDA4NzU2OTk5Mg==',
    '26': 'https://player.youku.com/embed/XNDEwNjI5MDYyNA==',
    '27': 'https://player.youku.com/embed/XNDEwNjQxODM0MA==',
    '28': 'https://player.youku.com/embed/XNDA5ODEwMjc0NA==',
    '29': 'https://player.youku.com/embed/XNDEwNjMxMzgxNg==',
    '30': 'https://www.douyin.com/video/7573237439267966235',
    '2': 'https://player.youku.com/embed/XNDEwNjMwOTMxNg==',
    '3': 'https://player.youku.com/embed/XNDEwNjQyNTQ0OA==',
  }

  const videoUrl = videoUrls[id || '']

  const handleBack = () => {
    navigate('/cases')
  }

  return (
    <div className="video-player-page">
      <div className="video-player-header">
        <div className="container">
          <button onClick={handleBack} className="back-button">
            ← 返回案例列表
          </button>
        </div>
      </div>

      <div className="video-player-container">
        {videoUrl ? (
          <div className="video-wrapper">
            {/* 判断视频URL类型，使用不同的嵌入方式 */}
            {videoUrl.includes('douyin.com') ? (
              <div className="douyin-video-wrapper">
                <div className="douyin-message">
                  <p>该视频位于抖音平台</p>
                  <p className="douyin-hint">点击下方按钮在新窗口中打开视频</p>
                  <a 
                    href={videoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="douyin-link-button"
                  >
                    前往抖音观看视频 →
                  </a>
                </div>
              </div>
            ) : videoUrl.includes('bilibili.com') ? (
              <iframe
                src={videoUrl}
                scrolling="no"
                frameBorder="0"
                allowFullScreen
                className="video-iframe"
              />
            ) : videoUrl.includes('youku.com') || videoUrl.includes('iqiyi.com') || videoUrl.includes('qq.com') ? (
              <iframe
                src={videoUrl}
                allowFullScreen
                className="video-iframe"
              />
            ) : videoUrl.endsWith('.mp4') || videoUrl.endsWith('.webm') || videoUrl.endsWith('.ogg') ? (
              <video controls className="video-element">
                <source src={videoUrl} type="video/mp4" />
                您的浏览器不支持视频播放。
              </video>
            ) : (
              <iframe
                src={videoUrl}
                allowFullScreen
                className="video-iframe"
              />
            )}
          </div>
        ) : (
          <div className="no-video-message">
            <p>视频链接尚未配置</p>
            <p className="video-id">案例ID: {id}</p>
            <p className="hint">请在 VideoPlayer.tsx 中添加此案例的视频URL</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default VideoPlayer

