import './App.css';
import Navbar from '../Navbar/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Userlist from '../Userlist/Userlist';
import Addresslist from '../Addresslist/Addresslist';
import User from '../User/User';
import Home from '../Home/Home';

//Main component. Handles Routing and data fetch.
export default function App(props) {
	const [userList, setUserList] = useState([]);

	//data is fetched at the top most component to allow passing via props
	async function fetchData() {
		const URL =
			'https://randomuser.me/api/?seed=drag0022&results=20&nat=au,ca,nz,gb,us';
		let resp = await fetch(URL);
		let data = await resp.json();
		setUserList(data.results);
	}

	//fetch data on load
	useEffect(() => {
		fetchData();
	}, []);
	return (
		<>
			{userList.length === 0 && <div className="loadingSpinner"></div>}
			<div className="App">
				<header>
					<Navbar />
				</header>
				<main>
					<Switch>
						<Route path="/users" exact>
							<Userlist userList={userList} />
						</Route>
						<Route path="/users/:id">
							<User userList={userList} />
						</Route>
						<Route path="/addresses">
							<Addresslist userList={userList} />
						</Route>
						<Route path="/" exact>
							<Home />
						</Route>
						<Redirect to="/" />
					</Switch>
				</main>
			</div>
		</>
	);
}
