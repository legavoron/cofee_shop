import './Header.css';
import Logo from './img/logo.svg';
import NavList from '../NavList/NavList';

const Header = () => {
    return (
        <div className="Header">
            <img src={Logo} alt="logo" className="HeaderLogo"/>
            <NavList/>
        </div>
    )
}

export default Header;