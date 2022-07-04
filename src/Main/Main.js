import './Main.css';
import MainImage from '../Main/img/main.jpg';
import Header from './Header/Header';
import MainContainer from './Main-Container/Main-Container';

const Main = ({miniLogoLineColor, src}) => {
    return (
        <div className="Main">
            <img src={MainImage} alt="main_image" className="MainImage"/>
            <Header/>
            <MainContainer miniLogoLineColor={miniLogoLineColor} src={src}/>
        </div>
    )
}

export default Main;