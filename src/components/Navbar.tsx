import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  // 当菜单打开时，阻止body滚动
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    // 清理函数
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const navItems = [
    { path: '/', label: '网站首页' },
    { path: '/cases', label: '视频案例展示' },
    { path: '/original', label: '公司原创' },
    { path: '/services', label: '服务内容' },
    { path: '/aigc', label: 'AIGC创作平台' },
    { path: '/about', label: '关于我们' },
    { path: '/contact', label: '联系我们' },
  ]

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="navbar-content">
            <Link to="/" className="navbar-logo">
              <img src="/images/logo/logo-1.png" alt="吉音动漫" className="logo-image" />
              <h1>吉音动漫</h1>
            </Link>
            
            <button
              className="navbar-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={isActive(item.path) ? 'active' : ''}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar

