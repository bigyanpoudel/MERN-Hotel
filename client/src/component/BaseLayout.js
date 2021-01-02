import React from 'react'
import {Route,Switch,BrowserRouter as Router} from 'react-router-dom';
import Layout from './Layout';
import Home from '../screen/Home';
const BaseLayout = () => {
    return (
      
        <Router>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home}/>
                </Switch>
            </Layout>
        </Router>

    )
}

export default BaseLayout
