import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//component
import Day from './component/Day';
import DayList from './component/DayList';
import Header from './component/Header/Header';
import EmptyPage from './component/EmptyPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path='/' Component={DayList}/>
          <Route path='/day/:id' Component={Day}/>
        
        
        
          <Route path='*' Component={EmptyPage}/>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
