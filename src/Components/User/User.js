import './User.css';
import { useParams } from 'react-router-dom';

//User details component. Deals with showing detailed information about the user. Used by <Userlist /> and <Addresslist />
export default function User(props) {
	let { id } = useParams();
	const user = props.userList[id];
	console.log(id);
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
					{/* if there is no login info available, display N/A */}
					<p>UUID: {user.id.name || 'N/A'}</p>
					<p>Username: {user.id.name || 'N/A'}</p>
					<p>Password: {user.id.value || 'N/A'}</p>
				</div>
			</div>
		</div>
	);
}
