import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Menu  from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard"
import ProjectDetails from "./components/project/ProjectDetails";
import SignIn from "./components/auth/SignIn";
import SignOut from "./components/auth/SingUp";
import CreateProject from "./components/project/CreateProject";
import {compose} from "redux";
import {connect} from "react-redux";
import {firestoreConnect} from "react-redux-firebase";
import ResetPassword from "./components/auth/ResetPassword";

const App = ({projects,notifications}) => {
  return (
      <BrowserRouter>
    <div className="Blog">
      <header className="App-header">
        <Menu/>
        <Switch>
            <Route exact path={"/"} render={(props) => <Dashboard projects={projects} notifications={notifications} />}></Route>
            <Route path={"/project/:id"} component={ProjectDetails}></Route>
            <Route path={"/signin"} component={SignIn}></Route>
            <Route path={"/signup"} component={SignOut}></Route>
            <Route path={"/createproject"} component={CreateProject}></Route>

        </Switch>
      </header>
    </div>
      </BrowserRouter>
  );
}

const mapStateToProps = (state) => {

    //        { collection: 'projects',limit: 4 ,orderBy: ['createdAt', 'desc']},
    return {

        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}

export default compose(
    connect(mapStateToProps),

    firestoreConnect([

        { collection: 'projects'  ,orderBy: ['createdAt', 'desc']},
        { collection: 'notifications', limit: 3, orderBy: ['time', 'desc']}
    ])
)(App)

