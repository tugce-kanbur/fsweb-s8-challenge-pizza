import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import OrderPage from './components/OrderPage';
import SuccessPage from './components/SuccessPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/order" component={OrderPage} />
        <Route path="/success" component={SuccessPage} />
      </Switch>
    </Router>
  );
}

export default App;
