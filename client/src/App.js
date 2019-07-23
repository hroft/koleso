import React from 'react';
import AppNavbar from './components/AppNavbar';
import SprList from './components/SprList';
import ItemModal from './components/ItemModal';
import {Container} from 'reactstrap';
import {Provider} from 'react-redux';
import store from './store';


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <AppNavbar />
      <Container>
      <ItemModal />
      <SprList />
      </Container>
    </div>
    </Provider>
  );
}

export default App;
