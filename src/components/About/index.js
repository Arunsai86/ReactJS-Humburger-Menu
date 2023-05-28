import Header from '../Header'
import './index.css'

const About = () => (
  <>
    <Header />
    <div className="container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="about"
        className="home-image"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="about"
        className="home-image-sm"
      />
    </div>
  </>
)

export default About
