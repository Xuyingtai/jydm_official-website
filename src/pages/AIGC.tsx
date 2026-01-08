import './AIGC.css'

const AIGC = () => {
  return (
    <div className="aigc-page">
      <div className="page-header">
        <div className="container">
          <h1>AIGC创作平台</h1>
          <p>人工智能生成内容，创新创作新体验</p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="aigc-intro">
            <div className="intro-button-wrapper">
              <a 
                href="https://ai.zzjydm.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cta-button intro-button"
              >
                <span className="button-text">进入创作平台</span>
                <span className="button-icon">→</span>
                <span className="button-glow"></span>
              </a>
            </div>
            <h2>关于AIGC创作平台</h2>
            <p>
              AIGC（AI Generated Content）创作平台是我们利用人工智能技术打造的创新内容创作平台。
              通过AI技术，我们可以更高效地创作动画内容，同时保持创意和品质。平台结合了传统动画制作经验
              和前沿AI技术，为创作者提供全新的创作体验。
            </p>
          </div>
        </div>
      </div>

      <div className="section aigc-showcase-section">
        <div className="container">
          <div className="aigc-showcase-image">
            <img 
              src="/images/cases/AIGC展示图片.png" 
              alt="AIGC展示图片"
              onError={(e) => {
                console.error('Image load error for AIGC展示图片');
                const target = e.target as HTMLImageElement;
                const pathParts = target.src.split('/');
                const fileName = pathParts.pop() || '';
                const basePath = pathParts.join('/') + '/';
                const encodedFileName = encodeURIComponent(fileName);
                target.src = basePath + encodedFileName;
              }}
            />
          </div>
        </div>
      </div>

      <div className="section features-section">
        <div className="container">
          <h2 className="section-title">平台特色</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🤖</div>
              <h3>AI辅助创作</h3>
              <p>利用AI技术辅助动画创作，提高创作效率，降低制作成本</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>智能风格转换</h3>
              <p>一键转换动画风格，快速适配不同项目需求</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>快速生成</h3>
              <p>快速生成动画素材和内容，缩短项目周期</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔧</div>
              <h3>专业工具</h3>
              <p>提供专业的AI创作工具，满足专业制作需求</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AIGC

