import './App.scss';
import Header from './components/Header';
import Expenses from './pages/Expenses';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './pages/Landing';

function App() {
    return (
        <Router>
            <div className="app">
                <Header />
                <Route path="/expenses">
                    <Expenses />
                </Route>
                <Route path="/" exact>
                    <Landing />
                </Route>
            </div>
        </Router>
    );
}

export default App;
