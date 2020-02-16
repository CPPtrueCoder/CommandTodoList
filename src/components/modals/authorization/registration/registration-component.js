import React,{Component} from "react";
import './registration.sass'
export default class RegistrationComponent extends Component{
render() {

return(
    <form method="post" action="" className="regform">
        <h2>Регистрация</h2>
        <input type="text" className="itemform form-control-plaintext" name="user_name"  placeholder="Имя" required/>
        <input type="text"  className="itemform form-control-plaintext" name="user_email" placeholder="Email" required/>
        <input type="password"  className="itemform form-control-plaintext" name="user_password"  placeholder="Пароль" required/>
        <input type="submit" className="btn btn-success itemform" value="Зарегистрироваться"/>
    </form>
)
}

}