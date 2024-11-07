// import ComponentsHome from './components'
import Clients from './clients'
import Features from './features'
import Hero from './hero'
// import './home.css'
import Pricing from './pricing'

const HomeComp = () => {
    return (
        <main className="site-content">
				<Hero />
				<Clients />
				<Features />
				<Pricing />
			</main>
    )
}

export default HomeComp