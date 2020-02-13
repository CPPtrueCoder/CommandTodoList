import React,{Component} from "react";
import "./authorization.css"

export default class Authorization extends Component{
	render() {
		return(
			
			<form action="" method="POST">
				<input type="text" name="user_name" placeholder="Login" />
				<input id="userPassword" type="password" placeholder="Password"/>
				<input type="submit" value="Enter"/>
			</form>
			
		)
	}
}