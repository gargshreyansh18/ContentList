import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import ContentListScreen from './src/screens/ContentListScreen';

const App = () => {
  return (
    <Provider store={store}>
      <ContentListScreen />
    </Provider>
  );
};

export default App;