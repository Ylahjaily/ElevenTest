import React  from 'react';
import {Link, Switch, Route} from 'react-router-dom'
import AstronautesPage from "../AstronautesPage/AstronautesPage";
import AstronauteForm from "../AstronautesPage/AstronauteForm";
import AstronauteDetailsList from "../AstronautesPage/AstronauteDetailsList";

class Home extends React.Component
{
    render()
    {
        return (
            <div>

                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <Link to={'/'}> Astronautes</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/new'}> Add Astronaute</Link>
                    </li>
                </ul>

                <Switch>
                    <Route exact path="/" component={AstronautesPage} />
                    <Route path="/new" component={AstronauteForm} />
                    <Route path='/astronaute/:id' component={AstronauteDetailsList} />
                </Switch>
            </div>
        )
    }
}


export default Home;
