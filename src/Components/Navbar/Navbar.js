import './Navbar.css';

import { NavLink } from 'react-router-dom';

export default function Navbar(props) {
	return (
		<nav className="nav">
			<ul>
				<li className="navLink">
					<NavLink activeClassName="active" to="/" exact>
						Home
					</NavLink>
				</li>
				<li className="navLink">
					<NavLink activeClassName="active" to="/users">
						User List
					</NavLink>
				</li>
				<li className="navLink">
					<NavLink activeClassName="active" to="/addresses">
						Address List
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}
