import './User.css';
import { useLocation, useParams } from 'react-router-dom';
export default function User(props) {
	let { user } = useLocation();
	let { id } = useParams();
	console.log(id);
	console.log(user);
	return (
		<div className="userDetailsContainer">
			<div className="userBasicInfo">
				<h3 className="userName">{`${user.name.first} ${user.name.last}`}</h3>
				<img
					src={user.picture.large}
					className="userImage"
					alt="user headshot large"
				/>
			</div>
			<div className="userMoreInfo">
				<div className="userAddress">
					<p>
						Street:{' '}
						{`${user.location.street.number} ${user.location.street.name}`}
					</p>
					<p>City: {user.location.city}</p>
					<p>Postal Code/ZIP: {user.location.postcode}</p>
					<p>Country: {user.location.country}</p>
				</div>
				<div className="userLogin">
					<p>UUID: {user.id.name}</p>
					<p>Username: {user.id.name}</p>
					<p>Password: {user.id.value}</p>
				</div>
			</div>
		</div>
	);
}
