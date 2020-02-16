import React,{Component} from "react";
import EnteringComponent from "./entering";
import RegistrationComponent from "./registration";
import "./authorization.sass"

export default class Authorization extends Component{
	state={
		authorization:false
	};
	onRegistration = ()=>{
		this.setState(
			{
				authorization:true
			}
		);

	};

	render() {
		const author = (this.state.authorization !==true) ? <EnteringComponent/> : <RegistrationComponent/>;
		return(

			<div className="auth text-center">
				{author}
				<p className="text-center mt-3">Нет аккаунта?</p>
				<button className="btn btn-info" onClick={this.onRegistration}>Зарегистрируйтесь</button>
			</div>
		)
	}
}