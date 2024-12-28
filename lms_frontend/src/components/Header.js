/*import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">Learn Online</Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNavAltMarkup" 
                    aria-controls="navbarNavAltMarkup" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        <Link className="nav-link" to="/features">Courses</Link>
                        <Link className="nav-link" to="/pricing">Lecturers</Link>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">User</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="nav-link" to="/user-login">Login</Link></li>
                                <li><Link className="nav-link" to="/user-register">User Register</Link></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="#">Dashboard</a></li>
                                <li><a className="dropdown-item" href="#">Logout</a></li>
                            </ul>
                        </li>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;*/

import { Link } from "react-router-dom";

function Header() {
    
const lecturerLoginStatus = localStorage.getItem('lecturerLoginStatus')
const handleLogout = () => {
    localStorage.removeItem('lecturerLoginStatus');
    localStorage.removeItem('lecturerId');
    window.location.href = '/lecturer-login';}
  
        return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">Learn Online</Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNavAltMarkup" 
                    aria-controls="navbarNavAltMarkup" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        <Link className="nav-link" to="/all-courses">Courses</Link>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">Lecturers</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {lecturerLoginStatus !== 'true' ? (
                    <>
                        <li><Link className="dropdown-item" to="/lecturer-login">Login</Link></li>
                        <li><Link className="dropdown-item" to="/lecturer-register">Register</Link></li>
                    </>
                ) : (
                    <>
                        <li><Link className="dropdown-item" to="/lecturer-dashboard">Dashboard</Link></li>
                        <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
                    </>
                )}
            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">User</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/user-login">Login</Link></li>
                                <li><Link className="dropdown-item" to="/user-register">User Register</Link></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><Link className="dropdown-item" to="/user-dashboard">Dashboard</Link></li>
                                <li><Link className="dropdown-item" to="/user-login">Logout</Link></li>
                            </ul>
                        </li>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;

