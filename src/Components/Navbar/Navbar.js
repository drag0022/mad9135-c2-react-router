import './Navbar.css';

import { NavLink } from 'react-router-dom';

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
