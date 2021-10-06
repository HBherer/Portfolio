import React from "react"
import AboutScreen from "../screens/AboutScreen";
import SkillsScreen from "../screens/SkillsScreen";
import ProjectsScreen from "../screens/ProjectsScreen"
import ContactScreen from "../screens/ContactScreen";
import { Route, Switch } from 'react-router'

const AppNavigator = () => {
    return (
        <Switch>
            <Route exact path="/">
                <AboutScreen/>
            </Route>
            <Route exact path="/skills">
                <SkillsScreen/>
            </Route>
            <Route exact path="/projects">
                <ProjectsScreen/>
            </Route>
            <Route exact path="/contact">
                <ContactScreen/>
            </Route>
        </Switch>
    );
};

export default AppNavigator;