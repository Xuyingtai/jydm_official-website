import { Link, useNavigate } from 'react-router-dom'
import './Home.css'

const Home = () => {
  const navigate = useNavigate()

  const services = [
    {
      title: '影视制作',
      description: '公司拥有资深的导演、策划以及实力雄厚的拍摄团队，出品历史文化纪录片《千年花开的声音》、联合制作历史文化系列微电影《杜甫在公元759年》等。',
      icon: '🎬'
    },
    {
      title: '动画制作',
      description: '公司拥有长期稳定且成熟的动画制作团队，参与制作MG动画广告、flash动画、二维手绘动画、三维建筑漫游等数百部作品，合作的企事业单位更是遍布各行各业。',
      icon: '🎨'
    },
    {
      title: 'VR360创意制作',
      description: '公司拥有VR360拍摄设备及专业技术人才，各种VR360拍摄场景配件一应俱全，包含水下拍摄、头戴设备、车顶固定吸盘、手持云台等，完全满足客户的各种天马星空的想象。',
      icon: '🥽'
    },
    {
      title: '公司原创',
      description: '原创IP老子爷爷荣获"玉猴奖"2019年度全国十大最具商业价值动漫IP；荣获中国（开封）国际动漫节"金犀奖"创投类银奖；老子爷爷IP代表周口市2020 中原（鹤壁）文化产业博览交易会。',
      icon: '⭐'
    }
  ]

  const cases = [
    {
      id: 1,
      title: '我与宪法-郑州市统计局政策',
      category: '二维Flash+MG动画',
      image: '/images/cases/我与宪法-郑州市统计局政策.jpg'
    },
    {
      id: 2,
      title: 'VR360全景视频拍摄-印尼美娜多的日出横屏',
      category: 'VR360全景视频',
      image: '/images/cases/VR360全景视频拍摄-印尼美娜多的日出-横屏.jpg'
    },
    {
      id: 4,
      title: '国家电网-安全操作动画',
      category: '三维动画',
      image: '/images/cases/国家电网-完全操作演示.jpg'
    },
    {
      id: 5,
      title: '河南省公安厅-预防金融诈骗动画宣传片',
      category: '二维Flash+MG动画',
      image: '/images/cases/河南省公安厅-预防金融诈骗.jpg'
    },
    {
      id: 7,
      title: '郑州地铁商易行APP-动画宣传片',
      category: '二维Flash+MG动画',
      image: '/images/cases/郑州地铁商易行APP-产品动画宣传片.jpg'
    },
    {
      id: 10,
      title: '中国人保车险-MG动画宣传片',
      category: '二维Flash+MG动画',
      image: '/images/cases/中国人保车险-MG动画宣传片.jpg'
    }
  ]

  const handleCaseClick = (caseId: number) => {
    navigate(`/video/${caseId}`)
  }

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">吉音动漫</h1>
            <p className="hero-subtitle">用童心去绘制世界</p>
            <p className="hero-description">
              郑州吉音动漫科技有限公司，注册资金500万元，致力于动画影视制作、吉祥物设计制作、周边衍生产品开发制作、美陈装饰、动漫广告视频制作等业务。郑州市认证动漫企业，河南省乡村振兴产业发展专业委员会文创企业代表、河南省动漫产业协会理事。
            </p>
            <div className="hero-buttons">
              <Link to="/cases" className="btn btn-primary">查看案例</Link>
              <Link to="/contact" className="btn btn-outline">联系我们</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services-section">
        <div className="container">
          <h2 className="section-title">服务内容</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="section cases-section">
        <div className="container">
          <h2 className="section-title">案例展示</h2>
          <p className="section-subtitle">二维Flash+MG动画、三维动画、影视拍摄、VR360全景视频</p>
          <div className="cases-grid">
            {cases.map((caseItem, index) => (
              <div 
                key={index} 
                className="case-card"
                onClick={() => handleCaseClick(caseItem.id)}
                style={{ cursor: 'pointer' }}
              >
                <div className="case-image">
                  <img src={caseItem.image} alt={caseItem.title} />
                  <div className="case-overlay">
                    <button className="btn btn-primary">播放视频</button>
                  </div>
                </div>
                <div className="case-info">
                  <span className="case-category">{caseItem.category}</span>
                  <h3>{caseItem.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '2rem' }}>
            <Link to="/cases" className="btn btn-outline">点击查看更多案例</Link>
          </div>
        </div>
      </section>

      {/* AIGC Section */}
      <section className="section aigc-section">
        <div className="container">
          <h2 className="section-title">AIGC创作平台</h2>
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
      </section>
    </div>
  )
}

export default Home

