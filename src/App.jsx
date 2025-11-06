import React from 'react';
import Mystore from './Mystore';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
    <div>
      <Mystore/>
    </div>
    </Provider>
  );
};

export default App;