import ComponentsHome from './components'
import './home.css'

const HomeComp = () => {
    return (
        <div>
            <h1>Components Home : </h1>
            <div className='content'>
            <ComponentsHome text="Components 1" />
            <ComponentsHome text="Components 2" />

            </div>
        </div>
    )
}

export default HomeComp