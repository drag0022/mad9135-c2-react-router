import './User.css';
import { useLocation, useParams } from 'react-router-dom';
export default function User(props) {
	let { userList } = useLocation();
	let { id } = useParams();
	console.log(id);
	console.log(userList);
	return <p>user</p>;
}
