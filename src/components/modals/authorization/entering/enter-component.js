import React,{Component} from "react";
import "./entering.sass"

export default class EnteringComponent extends Component{
    render() {
        return(
            <>
            <h1 className="h1 text-center">Добро пожаловать, <br/> в  WELMA </h1>
            <form action="" method="POST" className="author">
            <input type="text" className="itemform form-control-plaintext" name="user_name" placeholder="Login" />
            <input id="userPassword" className="itemform form-control-plaintext" type="password" placeholder="Password"/>
            <input type="submit" className="btn btn-success itemform" value="Войти"/>
            </form>
                </>
        )
    }
}