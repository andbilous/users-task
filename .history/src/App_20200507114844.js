import React from 'react';
import './App.css';
import {Users} from './pages/Users';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}></Provider>
    <div className="App">
      <Users/>
    </div>
  );
}

export default App;
