import HeadersComp from './components/headers'
import './assets/css/style.css'
import HomeComp from './components/home'
import Footer from './components/footer'

function App() {

  return (
    <div className="body-wrap">
			< HeadersComp />
			<HomeComp />
			<Footer />
		</div>
  )
}

export default App
