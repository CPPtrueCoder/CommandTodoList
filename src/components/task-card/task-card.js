import React from "react";
import AppHeader from "../app-header";
import CardHeader from "../card-header";
import CardBody from "../card-body";
import TaskManager from "../task-manager";

const TaskCard = ()=>{
	return(
		<div>
		
			
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
	)
};
export default TaskCard;