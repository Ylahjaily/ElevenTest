import React  from 'react';
import {Switch, Route,NavLink} from 'react-router-dom';
import AstronautesPage from "../AstronautesPage/AstronautesPage";
import AstronauteForm from "../AstronautesPage/AstronauteForm";
import AstronauteDetailsList from "../AstronautesPage/AstronauteDetailsList";

export const Home = () =>
{
    return (
        <div>

            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <NavLink to={'/'}> Astronautes</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={'/new'}> Add Astronaute</NavLink>
                </li>
            </ul>

            <Switch>
                <Route path="/" exact component={AstronautesPage} />
                <Route path="/new" component={AstronauteForm} />
                <Route path="/astronautes/:id" component={AstronauteDetailsList} />
            </Switch>
        </div>
    )
}


export default Home;
