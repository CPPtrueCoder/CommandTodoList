import React,{Component} from "react";
import AppHeader from "../app-header";
import CardHeader from "../card-header/card-header";
import CardBody from "../card-body";
import TaskManager from "../task-manager";

export  default class App extends Component{


render() {
	return(
		<div>
		<AppHeader/>
		
			{/*Elements table tasks and tasks*/}
			<div className="container mt-5">
			<div className="card d-inline-block mx-2 my-2">
			<CardHeader/>
				<div className="card-body">
					<CardBody/>
				</div>
				<TaskManager/>
			</div>
			</div>
		</div>
				
	
	
	);
}
}