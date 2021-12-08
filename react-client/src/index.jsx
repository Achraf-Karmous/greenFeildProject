import React, { Component } from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import axios from "axios";
import Home from "./components/Home.jsx";
import Feed from "./components/Feed.jsx";
import Contact from "./components/Contact.jsx";
import Login from "./components/Login.jsx";
import User from "./components/User.jsx";
import Posts from "./components/Posts.jsx";

// const Home = require("./components/Home.jsx").default;
// const Feed = require("./components/Feed.jsx").default;
// const Contact = require("./components/Contact.jsx").default;
// const Login = require("./components/Login.jsx").default;
// const User = require("./components/User.jsx").default;
// const Posts = require("./components/Posts.jsx").default;

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			view: "user",
			connect: false,
		};
		this.setView = this.setView.bind(this);
	}

	setView() {
		var { view } = this.state;
		// console.log("view render : ", this.state.view);
		if (view === "home") return <Home />;
		else if (view === "feed") return <Feed />;
		else if (view === "annouces") return <Posts />;
		else if (view === "contact") return <Contact />;
		else if (view === "login" && !this.state.connect) return <Login />;
		else return <User />;
	}

	componentDidMount() {
		axios
			.get("/images")
			.then((res) => this.setState({ images: res.data }))
			.catch((err) =>
				console.log(" App => componentDidMount images error : ", err)
			);

		axios
			.get("/videos")
			.then((res) => this.setState({ videos: res.data }))
			.catch((err) =>
				console.log(" App => componentDidMount videos error : ", err)
			);
	}

	render() {
		return (
			<div>
				{/* navbar section  */}
				<nav>
					<div
						className='logo'
						onClick={() => this.setState({ view: "home" })}
					>
						House
					</div>

					<ul className='links'>
						<li onClick={() => this.setState({ view: "home" })}>
							Home
						</li>
						<li onClick={() => this.setState({ view: "feed" })}>
							Feed
						</li>
						<li onClick={() => this.setState({ view: "annouces" })}>
							Annouces
						</li>
					</ul>

					<div className='right'>
						<span
							onClick={() => this.setState({ view: "contact" })}
						>
							Contact
						</span>
						<span onClick={() => this.setState({ view: "login" })}>
							Login
						</span>
					</div>
				</nav>

				{/* container section */}
				<div className='container'>{this.setView()}</div>

				{/* footer section  */}
			</div>
		);
	}
}

// const Nav = () => (
// 	<nav>
// 		<div className='logo'>House</div>
// 		<ul className='links'>
// 			<Link to='/'>
// 				<li>Home</li>
// 			</Link>
// 			<Link to='/feed'>
// 				<li>Feed</li>
// 			</Link>
// 			<Link to='/annouces'>
// 				<li>Annouces</li>
// 			</Link>
// 		</ul>
// 		<div className='right'>
// 			<Link to='/contact'>
// 				<span>Contact</span>
// 			</Link>

// 			<Link to='/login'>
// 				<span>Login</span>
// 			</Link>
// 		</div>
// 	</nav>
// );

// const App = () => (
// 	<BrowserRouter>
// 		<Nav />
// 		<Switch>
// 			<Route path='/' exact Component={Home} />
// 			<Route path='/feed' Component={Feed} />
// 			<Route path='/annouces' Component={Posts} />
// 			<Route path='/contact' Component={Contact} />
// 			<Route path='/login' Component={Login} />
// 			<Route path='/user/:id' Component={User} />
// 		</Switch>
// 	</BrowserRouter>
// );

ReactDOM.render(<App />, document.getElementById("app"));
