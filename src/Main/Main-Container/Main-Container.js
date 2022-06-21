import './Main-Container.css';
import miniLogo from './img/mini_logo.png'

const MainContainer = () => {
    return (
        <div className="MainContainer">
            <h1>Everything You Love About Coffee</h1>
            <div className="lineContainer">
                <div className="line"/>
                <img src={miniLogo} alt="mini_logo" />
                <div className="line"/>
            </div>
            <h2 className='MainContainer__h2'>We makes every day full of energy and taste</h2>
            <h2 className='MainContainer__h2 lastH2'>Want to try our beans?</h2>
            <button type="button">More</button>
        </div>
    )
}

export default MainContainer;