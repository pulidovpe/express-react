import React, { Component } from 'react';
/*import logo from '../logo.svg';*/
import { Button } from 'react-bootstrap';

class App extends Component {
	
	render() {
		return (
			<div className="App">
				<nav className="navbar navbar-dark bg-dark">
					<a href="" className="text-white">
						Home
						<span className="badge badge-pill badge-light ml-2">07</span>
					</a>
				</nav>
				<h1>Mi Aplicacion en React sobre Express</h1>
				<div className="container">
					<div className="row mt-4">
						<div className="col-md-3">
							{/*<img src={logo} className="App-logo" alt="logo" />*/}
							<div className="card">
								<form className="card-body" name="mi_form" >
									<div className="form-group">
										<input
											type="text"
											name="title"
											className="form-control"
											placeholder="Title"
										/>
									</div>
									<div className="form-group">
										<input
											type="text"
											name="responsible"
											className="form-control"
											placeholder="Responsible"
										/>
									</div>
									<div className="form-group">
										<input
											type="text"
											name="description"
											className="form-control"
											placeholder="Description"
										/>
									</div>
									<div className="form-group">
										<select name="priority"
											className="form-control" >
												<option value="low">Low</option>
												<option value="medium">Medium</option>
												<option value="high">High</option>
										</select> 
									</div>
									<div className="form-group">
										<input
											type="submit"
											name="submit"
											className="btn btn-primary"
											value="Save"
										/>
									</div>
								</form>
							</div>
						</div>
						<div className="col-md-9">
							<div className="row">
								{/*Tarjetas*/}
								<div className="col-md-4" >
									<div className="card mt-4">
										<div className="card-header">
											<h3>Datos</h3>
											<span className="badge badge-pill badge-danger ml-2">
												Datos
											</span>
										</div>
										<div className="card-body">
											<p>Datos</p>
											<p><mark>Datos</mark></p>
										</div>
										<div className="card-footer">
											<button className="btn btn-danger">
												Delete
											</button>
											<Button bsSize="md" bsStyle="warning">
												Update
											</Button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>			
		);
	}
}

export default App;