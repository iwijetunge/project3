import React from 'react';
import Header from "../../components/Header/";
import NavShell from "../../components/NavShell";
import LoginForm from "../../components/LoginForm/";
import API from '../../util/API';


export default class LoginPage extends React.Component {
   

 //   componentDidMount () {
 //   ();
 //  }

    render () {
        return (
            <div>
                <Header>
                </Header>
                <NavShell>
                    <LoginForm></LoginForm>
                </NavShell>
            </div>
        );
    }
};