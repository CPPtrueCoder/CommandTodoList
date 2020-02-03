import React,{Component} from "react";
import "./card-header.css"

export default class CardHeader extends Component{
	
	render() {
		return(
			<div className="card-header d-flex"><h4 className="pr-2 mt-2">Родин Андрей</h4> <p className="bg-primary pl-2 pr-2 ">Web-разработчик</p></div>
		);
	}
}