import '../../styles/logo.css';
import logo from "../../assets/logo.png";

export default function Logo() {

    return (
        <div className='d-flex align-items-center justify-content-between'>
            <a href="/" className='logo d-flex align-items-center'>
                <img src={logo} alt="logo"/>
                <span className="d-none d-lg-block">NationWide</span>
            </a>
        </div>
    )
}