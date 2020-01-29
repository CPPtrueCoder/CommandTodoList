import React,{Component} from "react";

export  default class App extends Component{


render() {
	return(
		<div>
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
			<a className="navbar-brand" href="#"><img src="logotask.png" alt=""/></a>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
			        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav">
					<li className="nav-item active">
						<a className="nav-link" href="#">Задачи <span className="sr-only">(current)</span></a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">Проекты</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">Статистика</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#" tabIndex="-1" aria-disabled="true">Чат</a>
					</li>
				</ul>
			</div>
		</nav>
		
			{/*Elements table tasks and tasks*/}
			<div className="container mt-5">
			<div className="card d-inline-block mx-2 my-2">
			<div className="card-header d-flex"><h4 className="pr-2 mt-2">Родин Андрей</h4> <p className="bg-primary pl-2 pr-2 ">Web-разработчик</p></div>
				<div className="card-body">
					<div className="list-group">
						<li className="list-group-item list-group-item-action d-flex justify-content-between align-items-baseline">
							Задача 1 <button className="btn btn-danger btn-sm"><img src="deleter.png" alt=""/></button>
						</li>
					
					</div>
			</div>
				<div className="card-footer mx-auto">
					<input type="text " className="form-control"/>
					
					<div className="access mt-2">
					<button className="btn btn-success mr-2">Поставить задачу</button>
					<button className="btn btn-outline-danger mr-5"><img src="cancel.png" alt=""/></button>
						<button className="btn btn-outline-info mr-1 "><img src="calendar.png" alt="calendar"/></button>
						<button className="btn btn-outline-warning"><img src="warning.png" alt="warning"/></button>
					</div>
				</div>
				</div>
				
		</div>
		</div>
	);
}
}