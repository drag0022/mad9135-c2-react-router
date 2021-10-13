import './Navbar.css';

import { NavLink } from 'react-router-dom';

//Navigation component. Handles link between routing server and DOM
export default function Navbar(props) {
	return (
		<nav className="nav">
			<ul>
				<NavLink activeClassName="active" to="/" exact>
					<li className="navLink">Home</li>
				</NavLink>

				<NavLink activeClassName="active" to="/users">
					<li className="navLink">User List</li>
				</NavLink>

				<NavLink activeClassName="active" to="/addresses">
					<li className="navLink">Address List</li>
				</NavLink>
			</ul>
		</nav>
	);
}
