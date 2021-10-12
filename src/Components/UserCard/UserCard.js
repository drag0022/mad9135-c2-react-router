import './UserCard.css';
import { NavLink } from 'react-router-dom';
export default function UserCard(props) {
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
				<NavLink
					to={{
						pathname: `/users/${props.index}`,
						user: props.userList[props.index],
					}}
				>
					<p className="seeDetails">See details</p>
				</NavLink>
			</div>
		</div>
	);
}
