import { Link } from "react-router-dom";
import logo from '../../assets/images/blogs-logo.jpg';

export function Header() {
    return (<>
        <header>
            <div className='container'>
                <div className='logo'>
                    <Link to="/">
                        <img src={logo} alt='Logo' />
                    </Link>
                </div>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/user-articles">My Articles</Link>
                    <Link to="/services">Services</Link>
                    <Link >Contact Us</Link>
                </nav>
            </div>
        </header>
    </>);
}
