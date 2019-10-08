import React from 'react';
import Contact from './components/Contact'



function App() {
  return (
    <div className="App">
      <Contact name='Brad Gibson' avatar ='https://randomuser.me/api/portraits/thumb/men/75.jpg' online ={false}/>
      <Contact name='Marc Hansen' avatar ='https://randomuser.me/api/portraits/men/85.jpg' online ={true}/>
      <Contact name='Sebastian Garza' avatar ='https://randomuser.me/api/portraits/men/6.jpg' online ={false}/>
      
    </div>
  );
}

export default App;
