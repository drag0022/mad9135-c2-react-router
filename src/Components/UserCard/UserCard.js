import './UserCard.css';
import { useState, useEffect } from 'react';

export default function UserCard(props) {
	const [user, setUser] = useState([]);
	console.log(props.user);
	useEffect(() => {
		setUser(props.user);
		//console.log(props.user);
	}, [props.user]);

	return (
		<div className="UserCardContainer">
			<img
				src={props.user.picture.medium}
				className="userImage"
				alt="user profile headshot"
			/>
			<div className="UserCard">
				<p className="userName">{`${props.user.name.first} ${props.user.name.last}`}</p>
				<p className="userEmail">{props.user.email}</p>
				<p className="userCell">{props.user.phone}</p>
			</div>
		</div>
	);
}
