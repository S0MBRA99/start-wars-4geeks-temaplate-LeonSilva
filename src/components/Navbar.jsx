import { Link } from "react-router-dom";
import logoNav from "../assets/img/logoNav.jpg"

export const Navbar = () => {

	return (
		<nav className="navbar nav-config">
			<div className="container-fluid">
				<Link to={"/"} className="navbar-brand text-white">
					<img className="img-navbar" src={logoNav} alt="starwars logo" />
				</Link>
				<div className="dropdown">
					<button type="button" className="btn btn-dark dropdown-toggle"  data-bs-toggle="dropdown" aria-expanded="false">Favorite</button>
					<ul className="dropdown-menu">
						<li>ejemplo</li>
					</ul>
				</div>
					
			</div>
		</nav>
	);
};