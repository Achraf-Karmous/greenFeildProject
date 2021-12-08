import React, { Component } from "react";

let user = {
	userName: "Sabri Hamzaoui",
	phoneNumber: 22365991,
	email: "sabri_hamzaoui@gamil.com",
	photoDeProfil:
		"https://images.unsplash.com/photo-1508341591423-4347099e1f19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
	postsId: [],
};

class User extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className='userProfile'>
				<UserDetails user={user} />
				<AddPost />
			</div>
		);
	}
}

const UserDetails = ({ user }) => (
	<div className='userCard'>
		<img
			className='userPic'
			src={user.photoDeProfil}
			alt='profile Picture'
		/>
		<div className='details'>
			<div>{user.userName}</div>
			<div>
				<span>Phone Number: </span>
				{user.phoneNumber}
			</div>
			<div>
				<span>Email: </span>
				{user.email}
			</div>
		</div>
	</div>
);

class AddPost extends Component {
	constructor(props) {
		super(props);
		this.state = {
			address: "",
			numberOfRooms: "",
			price: "",
			discription: "",
			pics: null,
		};
		this.handelChange = this.handelChange.bind(this);
	}
	handelChange(event) {
		this.setState({
			[event.target.name]: event.target.value,
		});
	}
	render() {
		return (
			<div className='inputContainer'>
				<input
					type='text'
					name='address'
					value={this.state.address}
					onChange={this.handelChange}
				/>
				<input
					type='text'
					name='numberOfRooms'
					value={this.state.numberOfRooms}
					onChange={this.handelChange}
				/>
				<input
					type='text'
					name='price'
					value={this.state.price}
					onChange={this.handelChange}
				/>
				<textarea
					name='discription'
					value={this.state.discription}
					onChange={this.handelChange}
					cols='30'
					rows='10'
				></textarea>
				<input type='file' name='pics' id='' />
			</div>
		);
	}
}

export default User;
