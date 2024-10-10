/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import RootNavigaton from './rootnavigation/RootNavigation';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import RootReducer from './storage/RootReducer';
const store=createStore(RootReducer)

function App(){
   
 

  return ( 
  <Provider store={store}>
       <RootNavigaton/>
  </Provider>
  );
}


export default App;

