import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        alt="home"
        className="home-image"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        alt="home"
        className="home-image-sm"
      />
    </div>
  </>
)

export default Home
