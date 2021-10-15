import './Addresslist.css';
import { NavLink } from 'react-router-dom';

//AddressList component. Renders a table with user information
export default function Addresslist(props) {
	//sort address list by last name
	props.userList.sort((userA, userB) => {
		const userLastNameA = userA.name.last.toUpperCase();
		const userLastNameB = userB.name.last.toUpperCase();
		if (userLastNameA < userLastNameB) {
			return -1;
		}
		if (userLastNameA > userLastNameB) {
			return 1;
		}
		return 0;
	});

	return (
		<>
			<h3 className="title">
				<span className="logo">[The Facebook]</span>Address List
			</h3>
			<div className="addressTable">
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Address</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{props.userList.map((user, index) => (
							<tr key={user.name.first}>
								<th>{`${user.name.first} ${user.name.last}`}</th>
								<th>{`${user.location.street.number} ${user.location.street.name} ${user.location.city} ${user.location.country}`}</th>
								<th className="seeDetails">
									{/* Link to <User /> */}
									<NavLink
										to={{
											pathname: `/users/${index}`,
										}}
									>
										See Details
									</NavLink>
								</th>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
}
