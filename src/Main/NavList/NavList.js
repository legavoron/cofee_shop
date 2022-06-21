import './NavList.css';
import {Component} from 'react';


class NavList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            links: ['Cofee house', 'Our cofee', 'For your pleasure']
        }
    }

    render() {

        const arrLinks = this.state.links.map((link, i) => {
            return (
                <li key={i}><a href="#">{link}</a></li>
            )
        })

        return (
            <>
                <ul className="NavList">
                    {arrLinks}
                </ul>
            </>
        )
    }
    
}

export default NavList;