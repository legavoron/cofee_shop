import './MiniLogo.css';

const MiniLogo = ({src, lineColor}) => {
    
    const classes = ['line', lineColor];

    return (
        <div className="MiniLogo">
            <div className={classes.join(' ')}/>
                <img src={src} alt="mini_logo" className="MiniLogoImage"/>
            <div className={classes.join(' ')}/>
        </div>
    )
}

export default MiniLogo;