import './Userlist.css';
import { useState, useEffect } from 'react';
import UserCard from '../UserCard/UserCard';

export default function Userlist(props) {
	const [userList, setUserList] = useState([]);

	async function fetchData() {
		const URL =
			'https://randomuser.me/api/?seed=drag0022&results=20&nat=au,ca,nz,gb,us';
		let resp = await fetch(URL);
		let data = await resp.json();
		console.log(data.results);
		setUserList(data.results);
	}

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="userList">
			{userList.length === 0 && <p>LOADING....</p>}
			{userList.map((user) => (
				// build user card
				<div key={user.name.first}>
					<UserCard user={user} />
				</div>
			))}
		</div>
	);
}
