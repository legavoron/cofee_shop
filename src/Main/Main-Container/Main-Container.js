import './Main-Container.css';
import MiniLogo from '../../UI/MiniLogo/MiniLogo';

const MainContainer = ({miniLogoLineColor, src}) => {
    return (
        <div className="MainContainer">
            <h1>Everything You Love About Coffee</h1>
           
            <MiniLogo lineColor={miniLogoLineColor} src={src}/>

            <h2 className='MainContainer__h2'>We makes every day full of energy and taste</h2>

            <h2 className='MainContainer__h2 lastH2'>Want to try our beans?</h2>

            <button type="button">More</button>
        </div>
    )
}

export default MainContainer;