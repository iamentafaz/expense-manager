import './App.scss';
import Header from './components/shared/header/Header';
import Expenses from './pages/Expenses';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import NoMatchFound from './components/NoMatchFound';
import PrivateRoute from './routes/PrivateRoute';

function App() {
    return (
        <Router>
            <div className="app">
                <Header />
                <Switch>
                    <PrivateRoute
                        path="/expenses"
                        component={Expenses}
                    ></PrivateRoute>
                    <Route path="/" exact>
                        <Landing />
                    </Route>
                    <Route path="*">
                        <NoMatchFound />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
