import './Navbar.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Userlist from '../Userlist/Userlist';
import Addresslist from '../Addresslist/Addresslist';
import User from '../User/User';
import Home from '../Home/Home';

export default function Navbar(props) {
	return (
		<>
			<Switch>
				<Route path="/users">
					<Userlist />
				</Route>
				<Route path="/users/:id">
					<User />
				</Route>
				<Route path="/addresses">
					<Addresslist />
				</Route>
				<Route path="/" exact>
					<Home />
				</Route>
				<Redirect to="/" />
			</Switch>
		</>
	);
}
