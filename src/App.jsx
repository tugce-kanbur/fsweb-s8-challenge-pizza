import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import OrderPage from './components/OrderPage';
import SuccessPage from './components/SuccessPage';
import NotFound from './components/NotFound';
import { useState } from 'react';

function App() {
  const [orderData, setOrderData] = useState(null);

  return (
    <Switch>
      <Route exact path="/" component={HomePage} />

      <Route
        path="/order"
        render={() => <OrderPage orderData={orderData} setOrderData={setOrderData} />}
      />

      <Route
        path="/success"
        render={() => <SuccessPage orderData={orderData} />}
      />

      <Route path="*" render={() => <NotFound />} />
    </Switch>
  );
}

export default App;