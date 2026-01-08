import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Cases.css'

const Cases = () => {
  const [selectedCategory, setSelectedCategory] = useState('全部')
  const navigate = useNavigate()

  const handleCaseClick = (caseId: number) => {
    navigate(`/video/${caseId}`)
  }

  const categories = ['全部', '二维Flash+MG动画', '三维动画', '影视拍摄', 'VR360全景视频']

  const allCases = [
    {
      id: 1,
      title: '我与宪法-郑州市统计局政策',
      category: '二维Flash+MG动画',
      description: '为郑州市统计局制作的宪法宣传动画，通过生动的动画形式普及宪法知识。',
      image: '/images/cases/我与宪法-郑州市统计局政策.jpg'
    },
    {
      id: 2,
      title: 'VR360全景视频拍摄-印尼美娜多的日出横屏',
      category: 'VR360全景视频',
      description: '使用VR360技术拍摄的印尼美娜多日出美景，提供沉浸式观看体验。',
      image: '/images/cases/VR360全景视频拍摄-印尼美娜多的日出-横屏.jpg'
    },
    {
      id: 3,
      title: 'VR360全景视频拍摄-印尼美娜多的日出-互动版',
      category: 'VR360全景视频',
      description: '互动版VR360全景视频，观众可以通过交互操作探索不同视角。',
      image: '/images/cases/VR360全景视频拍摄-印尼美娜多的日出-互动版.jpg'
    },
    {
      id: 4,
      title: '国家电网-安全操作动画',
      category: '二维Flash+MG动画',
      description: '为国家电网制作的安全操作规范动画，通过三维动画展示正确的操作流程。',
      image: '/images/cases/国家电网-完全操作演示.jpg'
    },
    {
      id: 5,
      title: '河南省公安厅-预防金融诈骗动画宣传片',
      category: '二维Flash+MG动画',
      description: '通过MG动画形式，生动形象地宣传预防金融诈骗知识，提高公众防范意识。',
      image: '/images/cases/河南省公安厅-预防金融诈骗.jpg'
    },
    {
      id: 6,
      title: '中粮储-家佳康饲料关展示动画',
      category: '二维Flash+MG动画',
      description: '使用三维动画技术展示家佳康饲料的生产流程和产品特点。',
      image: '/images/cases/内蒙古草原农夫硬麦粉-动画宣传片.jpg'
    },
    {
      id: 7,
      title: '郑州地铁商易行APP-动画宣传片',
      category: '二维Flash+MG动画',
      description: '为郑州地铁商易行APP制作的宣传动画，介绍APP的功能和使用方法。',
      image: '/images/cases/郑州地铁商易行APP-产品动画宣传片.jpg'
    },
    {
      id: 8,
      title: '飞天平台APP动画宣传片',
      category: '二维Flash+MG动画',
      description: '飞天平台APP的宣传动画，展示平台的核心功能和优势。',
      image: '/images/cases/飞天平台APP.jpg'
    },
    {
      id: 9,
      title: '高铁安检模块化改造升级动画宣传片',
      category: '二维Flash+MG动画',
      description: '通过三维动画展示高铁安检模块化改造升级的技术方案和优势。',
      image: '/images/cases/郑州高铁安检模块化改造.jpg'
    },
    {
      id: 10,
      title: '中国人保车险-MG动画宣传片',
      category: '二维Flash+MG动画',
      description: '为中国人保车险制作的MG动画宣传片，介绍车险产品和服务。',
      image: '/images/cases/中国人保车险-MG动画宣传片.jpg'
    },
    {
      id: 11,
      title: '中国人保车险-河南话说唱版',
      category: '二维Flash+MG动画',
      description: '采用河南话配音的MG动画宣传片，更具地方特色和亲和力。',
      image: '/images/cases/中国人保车险-河南话方言说唱.jpg'
    },
    {
      id: 12,
      title: '叮咚换宝APP-垃圾分类动画宣传片',
      category: '二维Flash+MG动画',
      description: '通过动画形式宣传垃圾分类知识，推广叮咚换宝APP的使用。',
      image: '/images/cases/叮咚换宝APP.jpg'
    },
    {
      id: 13,
      title: 'VR360全景视频拍摄-印尼美娜多的日出-竖屏',
      category: 'VR360全景视频',
      description: '竖屏版VR360全景视频，展示印尼美娜多日出的壮丽景色，适合手机端观看。',
      image: '/images/cases/VR360全景视频拍摄-印尼美娜多的日出-竖屏.jpg'
    },
    {
      id: 14,
      title: 'VR360全景视频拍摄-郑州昭陵公园拍摄',
      category: 'VR360全景视频',
      description: '使用VR360技术拍摄郑州昭陵公园全景，提供沉浸式的公园游览体验。',
      image: '/images/cases/VR360全景视频拍摄-郑州昭陵公园拍摄.jpg'
    },
    {
      id: 15,
      title: '三维建筑漫游-房地产项目',
      category: '三维动画',
      description: '通过三维建筑漫游技术展示房地产项目的整体规划和建筑特色，为客户提供直观的视觉体验。',
      image: '/images/cases/三维建筑漫游-房地产项目.jpg'
    },
    {
      id: 16,
      title: '房地产开发公司-建筑漫游动画',
      category: '三维动画',
      description: '为房地产开发公司制作的三维建筑漫游动画，展示项目规划和建筑细节。',
      image: '/images/cases/房地产开发公司.jpg'
    },
    {
      id: 17,
      title: '烘干设备-安全操作动画',
      category: '三维动画',
      description: '通过三维动画演示烘干设备的安全操作流程，确保操作人员正确使用设备。',
      image: '/images/cases/烘干设备-安全操作.jpg'
    },
    {
      id: 18,
      title: '金牌老司机-三维交通法规类',
      category: '三维动画',
      description: '三维动画形式的交通法规教育内容，通过生动的场景演示帮助驾驶员理解交通规则。',
      image: '/images/cases/金牌老司机-三维交通法规类.jpg'
    },
    {
      id: 19,
      title: '内蒙古大窑饮品-动画宣传片',
      category: '影视拍摄',
      description: '为内蒙古大窑饮品制作的动画宣传片，展示产品特色和品牌形象。',
      image: '/images/cases/内蒙古大窑饮品.jpg'
    },
    {
      id: 20,
      title: '华硕口袋电脑-产品宣传动画',
      category: '影视拍摄',
      description: '为华硕口袋电脑制作的产品宣传动画，突出产品的便携性和功能特点。',
      image: '/images/cases/华硕口袋电脑.jpg'
    },
    {
      id: 21,
      title: '北京上医仁家APP-产品动画宣传片',
      category: '二维Flash+MG动画',
      description: '为北京上医仁家APP制作的动画宣传片，介绍APP的功能和服务特色。',
      image: '/images/cases/北京上医仁家APP.jpg'
    },
    {
      id: 22,
      title: '大学生物课程-教学动画（一）',
      category: '二维Flash+MG动画',
      description: '大学生物课程教学动画，通过生动的动画形式帮助学生理解复杂的生物学概念。',
      image: '/images/cases/大学生物课程-1.jpg'
    },
    {
      id: 23,
      title: '大学生物课程-教学动画（二）',
      category: '二维Flash+MG动画',
      description: '大学生物课程系列教学动画，继续深入讲解生物学知识点。',
      image: '/images/cases/大学生物课程-2.jpg'
    },
    {
      id: 24,
      title: '好玩科技-产品宣传动画',
      category: '二维Flash+MG动画',
      description: '为好玩科技制作的产品宣传动画，展示科技产品的创新性和趣味性。',
      image: '/images/cases/好玩科技.jpg'
    },
    {
      id: 25,
      title: '安徽健康脱贫-政策动画宣传片',
      category: '二维Flash+MG动画',
      description: '通过动画形式宣传安徽健康脱贫政策，让政策内容更加通俗易懂。',
      image: '/images/cases/安徽健康脱贫-政策动画宣传片.jpg'
    },
    {
      id: 26,
      title: '幼儿动漫钢琴教育课程',
      category: '二维Flash+MG动画',
      description: '专为幼儿设计的动漫钢琴教育课程动画，通过有趣的动画形式激发孩子学习钢琴的兴趣。',
      image: '/images/cases/幼儿动漫钢琴教育课程.jpg'
    },
    {
      id: 27,
      title: '畅销饮料-宏宝莱-新年产品推广动画片',
      category: '二维Flash+MG动画',
      description: '为宏宝莱饮料制作的新年产品推广动画片，15秒版本，适合社交媒体传播。',
      image: '/images/cases/畅销饮料-宏宝莱-新年产品推广动画片15秒版本.jpg'
    },
    {
      id: 28,
      title: '郑州警民通-就跑一次',
      category: '二维Flash+MG动画',
      description: '为郑州警民通制作的"就跑一次"服务宣传动画，推广便民服务理念。',
      image: '/images/cases/郑州警民通-就跑一次.jpg'
    },
    {
      id: 29,
      title: '飞天平台APP-文字闪回',
      category: '二维Flash+MG动画',
      description: '飞天平台APP的文字闪回特效动画，展示平台的创新设计理念。',
      image: '/images/cases/飞天平台APP-文字闪回.jpg'
    },
    {
      id: 30,
      title: '中国电建地热-动画宣传片',
      category: '二维Flash+MG动画',
      description: '中国电建 科普小课堂开课啦~这次电建"吉娃"要带大家了解一下电建地热的又一项节能黑科技——浅层地（水）源地热供能系统！快来看看"地热空调"究竟是怎样做到取热不取水，还实现能量跨时空利用的吧！',
      image: '/images/cases/中国电建地热-动画宣传片-2.jpg'
    }
  ]

  const filteredCases = selectedCategory === '全部' 
    ? allCases 
    : allCases.filter(c => c.category === selectedCategory)

  return (
    <div className="cases-page">
      <div className="page-header">
        <div className="container">
          <h1>视频案例展示</h1>
          <p>二维Flash+MG动画、三维动画、影视拍摄、VR360全景视频、AIGC生成式内容创作</p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="category-filter">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="cases-list">
            {filteredCases.map(caseItem => (
              <div 
                key={caseItem.id} 
                className="case-item"
                onClick={() => handleCaseClick(caseItem.id)}
                style={{ cursor: 'pointer' }}
              >
                <div className="case-item-image">
                  <img 
                    src={caseItem.image} 
                    alt={caseItem.title}
                    loading="lazy"
                    onError={(e) => {
                      console.error('Image load error for:', caseItem.title);
                      console.error('Original path:', caseItem.image);
                      const target = e.target as HTMLImageElement;
                      // 尝试使用编码后的文件名
                      const pathParts = caseItem.image.split('/');
                      const fileName = pathParts.pop() || '';
                      const basePath = pathParts.join('/') + '/';
                      const encodedFileName = encodeURIComponent(fileName);
                      const newPath = basePath + encodedFileName;
                      console.log('Trying encoded path:', newPath);
                      target.src = newPath;
                    }}
                  />
                  <div className="case-item-overlay">
                    <button className="btn btn-primary">播放视频</button>
                  </div>
                </div>
                <div className="case-item-content">
                  <span className="case-item-category">{caseItem.category}</span>
                  <h3>{caseItem.title}</h3>
                  <p>{caseItem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cases

