import { studentIcon, fileIcon, bgElement2 } from '../../assets'
import './Info.css'

const Info = () => {
  return (
    <section id="info" className="info dark-gray">
      <div className="wrapper">
        <div className="content-container">
          <div className="info-content">
            <img src={studentIcon} />
            <div className="amount">23000+</div>
            <div className="type">Students</div>
          </div>

          <div className="info-content">
            <img src={fileIcon} />
            <div className="amount">26 Hrs</div>
            <div className="type">Video Content</div>
          </div>
        </div>

        <img src={bgElement2} className="bg-element-2" />
      </div>
    </section>
  )
}

export default Info
