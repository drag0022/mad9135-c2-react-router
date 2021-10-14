import './Userlist.css';
import UserCard from '../UserCard/UserCard';

//User list component. Gets data from <App /> via props
export default function Userlist(props) {
	return (
		<div className="userList">
			{props.userList.length === 0 && <div className="loadingSpinner"></div>}
			<h3 className="title">
				<span className="logo">[The Facebook]</span> User List
			</h3>
			{props.userList.map((user, index) => (
				// build user card
				<div key={user.name.first}>
					<UserCard user={user} index={index} />
				</div>
			))}
		</div>
	);
}
