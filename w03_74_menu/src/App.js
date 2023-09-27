import { useState } from 'react';
import './App.css';
import menu_data from './data';
import Menu_74 from './components/Menu_74';
import Category_74 from './components/Category_74';


const App = () => {
  const [menu, setMenu] = useState(menu_data);
  console.log('menu', menu);
  return (
    <section className="menu">
    <div className="title">
      <h2>our menu - 211410674</h2>
      <link rel="stylesheet" href="./style_74.css"/>
      <div className="underline"></div>
    </div>
    <Category_74 />
    <Menu_74 menu={menu}/>
  </section> 
  );
};
export default App;
