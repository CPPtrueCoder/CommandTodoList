import React , {Component} from "react";
import "./task-manager.css"

export default class TaskManager extends Component{
	render() {
		return(
			<div className="card-footer mx-auto">
				<input type="text " className="form-control"/>
				
				<div className="access mt-2">
					<button className="btn btn-success mr-2">Поставить задачу</button>
					<button className="btn btn-outline-danger mr-5"><img src="cancel.png" alt=""/></button>
					<button className="btn btn-outline-info mr-1 "><img src="calendar.png" alt="calendar"/></button>
					<button className="btn btn-outline-warning"><img src="warning.png" alt="warning"/></button>
				</div>
			</div>
		);
	}
	
}