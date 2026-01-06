import './Services.css'

const Services = () => {
  const services = [
    {
      title: '影视制作',
      icon: '🎬',
      description: '公司拥有资深的导演、策划以及实力雄厚的拍摄团队，出品历史文化纪录片、微电影等各类影视作品。',
      features: [
        '历史文化纪录片制作',
        '微电影拍摄制作',
        '企业宣传片制作',
        '广告片拍摄',
        '活动视频记录'
      ],
      examples: [
        '《千年花开的声音》历史文化纪录片',
        '《杜甫在公元759年》历史文化系列微电影'
      ]
    },
    {
      title: '动画制作',
      icon: '🎨',
      description: '公司拥有长期稳定且成熟的动画制作团队，参与制作各类动画作品数百部，合作的企事业单位遍布各行各业。',
      features: [
        'MG动画广告制作',
        'Flash动画制作',
        '二维手绘动画',
        '三维建筑漫游',
        '产品演示动画',
        '教学动画制作'
      ],
      examples: [
        'MG动画广告',
        'Flash动画',
        '二维手绘动画',
        '三维建筑漫游'
      ]
    },
    {
      title: 'VR360创意制作',
      icon: '🥽',
      description: '公司拥有VR360拍摄设备及专业技术人才，各种VR360拍摄场景配件一应俱全，完全满足客户的各种创意需求。',
      features: [
        'VR360全景视频拍摄',
        '水下拍摄',
        '头戴设备拍摄',
        '车顶固定吸盘拍摄',
        '手持云台拍摄',
        '互动式VR内容制作'
      ],
      examples: [
        'VR360全景视频拍摄',
        '互动版VR360内容'
      ]
    },
    {
      title: '吉祥物设计制作',
      icon: '🎭',
      description: '专业的吉祥物设计团队，从概念设计到三维建模，再到周边衍生产品开发，提供一站式服务。',
      features: [
        '吉祥物形象设计',
        '三维建模制作',
        '周边衍生产品开发',
        '美陈装饰设计',
        'IP形象授权'
      ],
      examples: [
        '老子爷爷IP形象',
        '企业吉祥物设计'
      ]
    },
    {
      title: '动漫广告视频制作',
      icon: '📺',
      description: '结合动画技术与广告创意，制作生动有趣的动漫广告视频，提升品牌传播效果。',
      features: [
        '动漫广告创意策划',
        '动画广告制作',
        '品牌宣传视频',
        '产品推广动画',
        '社交媒体短视频'
      ],
      examples: [
        '各类MG动画宣传片',
        '产品推广动画'
      ]
    },
    {
      title: 'AR/VR内容制作',
      icon: '🔮',
      description: '专业的AR/VR内容制作团队，为客户提供沉浸式的虚拟现实体验内容。',
      features: [
        'AR内容开发',
        'VR场景制作',
        '虚拟展厅制作',
        '互动体验设计',
        '跨平台内容适配'
      ],
      examples: [
        'VR360全景视频',
        'AR互动内容'
      ]
    }
  ]

  return (
    <div className="services-page">
      <div className="page-header">
        <div className="container">
          <h1>服务内容</h1>
          <p>专业、创新、品质 - 为您提供全方位的动画影视制作服务</p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="services-intro">
            <p>
              郑州吉音动漫科技有限公司，注册资金500万元，郑州市认证动漫企业，郑州动漫协会副会长单位，
              致力于动画影视制作、动漫广告视频制作、衍生品开发、AR/VR内容制作、VR360全景视频拍摄等业务。
            </p>
          </div>
        </div>
      </div>

      <div className="section services-list-section">
        <div className="container">
          <div className="services-list">
            {services.map((service, index) => (
              <div key={index}>
                <div className="service-detail-card">
                  <div className="service-detail-header">
                    <div className="service-detail-icon">{service.icon}</div>
                    <h2>{service.title}</h2>
                  </div>
                  <p className="service-detail-description">{service.description}</p>
                  
                  <div className="service-detail-content">
                    <div className="service-features">
                      <h3>服务项目</h3>
                      <ul>
                        {service.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="service-examples">
                      <h3>代表作品</h3>
                      <ul>
                        {service.examples.map((example, i) => (
                          <li key={i}>{example}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                {service.title === 'AR/VR内容制作' && (
                  <div className="clients-section">
                    <h3 className="clients-title">服务对象</h3>
                    <div className="clients-grid">
                      {[
                        '新华社',
                        '周口市委宣传部',
                        '河南省文旅厅',
                        '河南省报业集团',
                        '郑州ZAKER',
                        '河南省公安厅',
                        '郑州市公安局',
                        '中国人保车险',
                        '内蒙古大窑饮品',
                        '华硕',
                        '郑州市统计局',
                        '郑州市工商局',
                        '郑州市应急管理局',
                        '中国平安',
                        '浙江省衢州市政府',
                        '深圳市前海税务局',
                        '衢州市电视台',
                        '宁波市北仑区白峰街道',
                        '郑州地铁交通',
                        '高铁交通'
                      ].map((client, i) => (
                        <div key={i} className="client-item">
                          {client}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>需要我们的服务？</h2>
            <p>耐心聆听客户的制作要求、严格执行制定好的制作计划、一丝不苟的完成项目制作。</p>
            <a href="/contact" className="btn btn-primary">立即联系我们</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services

