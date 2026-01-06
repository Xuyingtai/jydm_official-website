import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>吉音动漫</h3>
            <p>用童心去绘制世界</p>
            <p>郑州吉音动漫科技有限公司</p>
          </div>
          
          <div className="footer-section">
            <h4>快速链接</h4>
            <ul>
              <li><Link to="/">网站首页</Link></li>
              <li><Link to="/cases">视频案例展示</Link></li>
              <li><Link to="/services">服务内容</Link></li>
              <li><Link to="/about">关于我们</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>联系方式</h4>
            <p>QQ: 898658049（郑州总公司）</p>
            <p>QQ: 741644470（内蒙分公司）</p>
            <p>电话: 15515790317（郑州）</p>
            <p>电话: 15754940298（内蒙）</p>
          </div>

          <div className="footer-section">
            <h4>关注我们</h4>
            <p>微信公众号：吉音动漫</p>
            <p>邮箱：898658049@qq.com</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            Copyright © 吉音动漫 All Rights Reserved | 
            <a href="http://www.miitbeian.gov.cn" target="_blank" rel="noopener noreferrer">
              豫ICP备17009328号
            </a>
          </p>
          <p>动画制作 | MG动画 | VR360全景视频</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

