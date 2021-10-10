import './App.css';
import Navbar from '../Navbar/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';
import Userlist from '../Userlist/Userlist';
import Addresslist from '../Addresslist/Addresslist';
import User from '../User/User';
import Home from '../Home/Home';

export default function App(props) {
	return (
		<div className="App">
			<header>
				<Navbar />
			</header>
			<main>
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
			</main>
		</div>
	);
}
