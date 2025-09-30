import { Link } from "react-router-dom";
import logoNav from "../../public/img/logoNav-removebg-preview.png"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Navbar = () => {

	const {store,dispatch} = useGlobalReducer()

	return (
		<nav className="navbar nav-config">
			<div className="container-fluid">
				<Link to={"/"} className="navbar-brand text-white">
					<img className="img-navbar" src={logoNav} alt="starwars logo" />
				</Link>
				<div className="dropdown">
					<button type="button" className="btn btn-dark dropdown-toggle"  data-bs-toggle="dropdown" aria-expanded="false">Favorite</button>
					<ul className="dropdown-menu dropdown-menu-end bg-dark">
						{store.liked.map((like,index)=>{
							return(
								<div key={index} className="d-flex align-items-center justify-content-center px-2 py-1">
									<li className="text-white flex-grow-1">{like}</li>
									<button 
										className="btn btn-secondary btn-sm ms-2" 
										onClick={()=>{
										const filteredLikes = store.liked.filter((i)=>i !== like)
										console.log("este es el filter",filteredLikes)
										dispatch({
											type:'deleteLiked',
											payload:{dislikeObj:filteredLikes}												
										})
									}}>🗑️​</button>
								</div>
							)
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
};