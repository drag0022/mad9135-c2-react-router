import './Home.css';

//Home page component. Handles instructions for end user.
export default function Home(props) {
	return (
		<div className="home">
			<h3 className="welcome">Welcome to [The Facebook]</h3>
			<p className="instructions">
				Use the navigation on the left to See a list of users and get details
				about them.
			</p>
			<p className="instructions"> Absolutely NO data harvesting happening</p>
		</div>
	);
}
