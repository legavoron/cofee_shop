import './About.css';
import Heading from '../UI/Heading/Heading';
import MiniLogo from '../UI/MiniLogo/MiniLogo';
import Description from '../UI/Description/Description';

const About = ({src, miniLogoLineColor, value, maxWidthDescription}) => {
    return (
        <div className="About">
            <Heading value="About us"/>
            <MiniLogo lineColor={miniLogoLineColor} src={src}/>
            <Description value={value} maxWidthDescription={maxWidthDescription}/>
        </div>
    )
}

export default About;