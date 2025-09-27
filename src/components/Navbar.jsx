import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar nav-config">
			<div className="container-fluid">
				<Link to={"/"} className="navbar-brand text-white">
					<img src="https://imgs.search.brave.com/v6WE4ZF13NcBwjDFuFNAkr40yo86TshrPDFaOovI-vw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvNDk2/ODc2LmpwZw" alt="" />
				</Link>
				<button className="btn btn-primary">Favorites(lenght-variable) 🔽​</button>	
			</div>
		</nav>
	);
};