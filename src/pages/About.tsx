import './About.css'

const About = () => {
  const companyInfo = {
    name: '郑州吉音动漫科技有限公司',
    registeredCapital: '500万元',
    certifications: [
      '郑州市认证动漫企业',
      '郑州动漫协会副会长单位',
      '河南省乡村振兴产业发展专业委员会文创企业代表',
      '河南省动漫产业协会理事'
    ]
  }

  const values = [
    {
      title: '专业',
      description: '拥有资深的制作团队和丰富的项目经验，确保每一个项目都达到专业水准'
    },
    {
      title: '创新',
      description: '不断探索新技术、新形式，为客户提供创新的解决方案'
    },
    {
      title: '品质',
      description: '严格把控每一个制作环节，确保作品品质达到客户期望'
    },
    {
      title: '服务',
      description: '耐心聆听客户需求，严格执行制作计划，一丝不苟完成项目'
    }
  ]

  return (
    <div className="about-page">
      <div className="page-header">
        <div className="container">
          <h1>关于我们</h1>
          <p>用童心去绘制世界</p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="company-intro">
            <h2>公司简介</h2>
            <p>
              {companyInfo.name}，注册资金{companyInfo.registeredCapital}，致力于动画影视制作、
              动漫广告视频制作、衍生品开发、AR/VR内容制作、VR360全景视频拍摄等业务。
            </p>
            <p>
              我司一直致力于老子文化的传承和发扬，我们创作"老子爷爷"IP的初心就是"让更多年轻人喜欢老子文化"，
              让更多年轻人深入了解老子文化，认识"老子爷爷"，他憨厚而不失调皮的形象一定会深受年轻人的喜欢！
            </p>
            <p>
              创始人徐英泰，2023年国家广播电视和网络视听行业青年创新工程人才，河南省动漫产业协会副秘书长，河南省广播电视和网络视听行业专家库成员，郑州美术学院特聘教师。
            </p>
            <p>
              公司团队成员参与作品：《猫和老鼠谁将被埋葬》荣获"金猴奖"最佳动画短片奖，日本广岛动画电影节最佳动画短片奖。导演制作戏曲动画电影《程婴救孤案》，取得龙标，并在河南省内发行；导演制作社会主义核心价值观系列动画片《心灵上的中国》，同年入选河南省中小学生秋季电教教材目录；参与制作的项目还有《京剧猫》《镇魂街》、《幻界王》、《十万个冷笑话2》等知名项目的前期、中期动画制作。教学课件《瓜瓜龙语文、英语》《托比兔》 《睿卡音乐课程》。
            </p>
          </div>
        </div>
      </div>

      <div className="section values-section">
        <div className="container">
          <h2 className="section-title">企业价值观</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

export default About

