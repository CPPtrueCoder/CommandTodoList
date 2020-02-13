import React,{Component} from "react";
// import AppHeader from "../app-header";
// import CardHeader from "../card-header/card-header";
// import CardBody from "../card-body";
// import TaskManager from "../task-manager";
import TaskCard from "../task-card/task-card";
import AppHeader from "../app-header";


export  default class App extends Component{



render() {

	return(
		<><AppHeader/>
		<div className="d-flex justify-content-around">
		<TaskCard/>
		<TaskCard/>
		<TaskCard/>
		
		</div>
			</>
	);
}
}