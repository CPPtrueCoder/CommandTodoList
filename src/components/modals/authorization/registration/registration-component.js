import React,{Component} from "react";

export default class RegistrationComponent extends Component{
render() {

return(
    <form>
        <input type="text" name="user_name" required/>
        <input type="text" name="user_email" required/>
        <input type="password" name="user_password" required/>

    </form>
)
}

}