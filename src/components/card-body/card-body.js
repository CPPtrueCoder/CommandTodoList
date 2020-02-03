import React , {Component} from "react";
import "./card-body.css"

export default class CardBody extends Component{
	render() {
		return(
			<div className="list-group">
				<li className="list-group-item list-group-item-action d-flex justify-content-between align-items-baseline">
					Задача 1 <button className="btn btn-danger btn-sm"><img src="deleter.png" alt=""/></button>
				</li>
			
			</div>
		)
	}
	
}