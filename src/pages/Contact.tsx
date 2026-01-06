import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 这里可以添加表单提交逻辑
    alert('感谢您的留言！我们会尽快与您联系。')
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    })
  }

  const contactInfo = {
    zhengzhou: {
      qq: '898658049',
      phone: '15515790317',
      email: '898658049@qq.com'
    },
    neimeng: {
      qq: '741644470',
      phone: '15754940298',
      email: '741644470@qq.com'
    }
  }

  return (
    <div className="contact-page">
      <div className="page-header">
        <div className="container">
          <h1>联系我们</h1>
          <p>您可以通过以下方式和我们取得联系</p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>联系方式</h2>
              
              <div className="contact-offices">
                <div className="office-card">
                  <h3>郑州总公司</h3>
                  <div className="contact-item">
                    <span className="contact-label">QQ:</span>
                    <span className="contact-value">{contactInfo.zhengzhou.qq}</span>
                  </div>
                  <div className="contact-item">
                    <span className="contact-label">电话:</span>
                    <span className="contact-value">{contactInfo.zhengzhou.phone}</span>
                  </div>
                  <div className="contact-item">
                    <span className="contact-label">邮箱:</span>
                    <span className="contact-value">{contactInfo.zhengzhou.email}</span>
                  </div>
                </div>

                <div className="office-card">
                  <h3>内蒙分公司</h3>
                  <div className="contact-item">
                    <span className="contact-label">QQ:</span>
                    <span className="contact-value">{contactInfo.neimeng.qq}</span>
                  </div>
                  <div className="contact-item">
                    <span className="contact-label">电话:</span>
                    <span className="contact-value">{contactInfo.neimeng.phone}</span>
                  </div>
                  <div className="contact-item">
                    <span className="contact-label">邮箱:</span>
                    <span className="contact-value">{contactInfo.neimeng.email}</span>
                  </div>
                </div>
              </div>

              <div className="contact-note">
                <p>
                  耐心聆听客户的制作要求、严格执行制定好的制作计划、一丝不苟的完成项目制作。
                </p>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <h2>在线留言</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">姓名 *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="请输入您的姓名"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">邮箱</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="请输入您的邮箱"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">电话 *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="请输入您的联系电话"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">留言内容 *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="请描述您的需求或问题..."
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  提交留言
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

