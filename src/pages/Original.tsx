import './Original.css'

const Original = () => {
  const achievements = [
    {
      title: '玉猴奖',
      year: '2019',
      description: '原创IP老子爷爷荣获"玉猴奖"2019年度全国十大最具商业价值动漫IP'
    },
    {
      title: '金犀奖',
      year: '2019',
      description: '荣获中国（开封）国际动漫节"金犀奖"创投类银奖'
    },
    {
      title: '中原文博会',
      year: '2020',
      description: '老子爷爷IP代表周口市2020中原（鹤壁）文化产业博览交易会'
    },
    {
      title: '旅游交易博览会',
      year: '2020',
      description: '老子爷爷动漫IP代表河南参加中国国际旅游交易博览会'
    },
    {
      title: '黄河奖',
      year: '2020',
      description: '首届"黄河奖"最佳动漫IP形象奖'
    },
    {
      title: '灵狮IP伴客奖',
      year: '2021',
      description: '灵狮IP伴客奖年度十佳地域吉祥物IP奖'
    }
  ]

  const exhibitions = [
    {
      year: '2020',
      description: '老子爷爷IP代表周口市参加中原（鹤壁）文化产业博览交易会城市馆展览'
    },
    {
      year: '2020',
      month: '11月',
      description: '代表河南参加展览中国国际旅游交易博览会'
    },
    {
      year: '2021',
      description: '【老子爷爷与道德经】短视频入选河南省递选中央外宣文化资源短视频名录'
    },
    {
      year: '2022',
      description: 'IP入选中宣部版权管理局、国家版权交易中心主办的国家IP评选【动漫】赛道提名，这是老子文化动漫IP首次入选国家级奖项提名'
    },
    {
      year: '2023',
      description: '新华社x周口x老子爷爷联合发布"虎年城市家书"，不仅在北京、上海、南京的城市大屏上播出宣传，还在纽约时报广场大屏向全世界进行展示。'
    }
  ]

  return (
    <div className="original-page">
      <div className="page-header">
        <div className="container">
          <h1>公司原创</h1>
          <p>老子爷爷IP - 让更多年轻人喜欢老子文化</p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="original-intro">
            <h2>老子爷爷IP</h2>
            <p>
              我司一直致力于老子文化的传承和发扬，我们创作"老子爷爷"IP的初心就是"让更多年轻人喜欢老子文化"，
              让更多年轻人深入了解老子文化，认识"老子爷爷"，他憨厚而不失调皮的形象一定会深受年轻人的喜欢！
            </p>
            <div className="laozi-image">
              <img src="/images/laozi/老子爷爷形象图-2.png" alt="老子爷爷形象" />
            </div>
          </div>
        </div>
      </div>

      <div className="section achievements-section">
        <div className="container">
          <h2 className="section-title">获奖荣誉</h2>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card">
                <div className="achievement-year">{achievement.year}</div>
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section exhibitions-section">
        <div className="container">
          <h2 className="section-title">参展荣誉</h2>
          <div className="exhibitions-grid">
            {exhibitions.map((exhibition, index) => (
              <div key={index} className="exhibition-card">
                <div className="exhibition-year">
                  {exhibition.year}
                  {exhibition.month && <span className="exhibition-month">{exhibition.month}</span>}
                </div>
                <p>{exhibition.description}</p>
              </div>
            ))}
            <div className="exhibition-card exhibition-image-card">
              <img src="/images/laozi/纽约时报广场大屏.png" alt="纽约时报广场大屏" className="exhibition-image" />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Original

