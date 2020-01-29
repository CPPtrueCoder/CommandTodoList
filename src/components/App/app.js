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
			<div className="card d-inline-block ">
			<div className="card-header d-flex align-items-baseline"><h3 className="pr-2">Родин Андрей</h3> <h4>Web-разработчик</h4></div>
				<div className="card-body">
					<div className="list-group">
						<li className="list-group-item list-group-item-action">
							Задача 1
						</li>
						<li className="list-group-item list-group-item-action">
							Задача 2
						</li>
						<li className="list-group-item list-group-item-action">
							Задача 3
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