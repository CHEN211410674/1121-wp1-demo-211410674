import { useState} from 'react';

import Alert_74 from './components/Alert_74';
import List_74 from './components/List_74';

const App_xx = () => {
  const [name, setName] = useState('');
  const [list, setList] =useState([]);
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: ''
  });

  const App_xx = () => {
    const [name, setName] = useState('');
    const [list, setList] = useState([]);
    const [alert, setAlert] = useState({
      show: false,
      msg: '',
      type: '',
    });
  }

const showAlert = (show=false, msg='', type='') => {
  setAlert({show, msg, type});
};

const handleSubmit = (e) =>{
  e.preventDefault();
  if(!name){
    showAlert(true, 'please enter value', 'danger');
  } else {
    showAlert(true, 'value change', 'success');
    const newItem = {
      id : new Date().getTime().toString(),
      title:name,
    };
    setList([...list, newItem]);
    setName('');
  }
};

const removeItem = () => {};

const clearList = () => {
  showAlert(true, 'empty list', 'danger');
  setList([]);
};

  return(
     <>
      <section className="section-center">
        <form className="grocery-form" onSubmit={handleSubmit}>
          {alert.show && <Alert_74{...alert} removeAlert={showAlert}/>}
          <h3>Grocery Bud -- 陳宜真</h3>
          <div className ="form-control">
            <input type="text" className ='grocery' value={name} placeholder='e.g.eggs' onChange={(e)=>setName(e.target.value)}></input>
            <button type ='submit' className='submit-btn'>Submit</button>
          </div>
        </form>
        {list.length > 0 && (
          <div className ='grocery-container'>
          <List_74 items={list} removeItem={removeItem}/>
          <button className ='clear-btn' onClick={clearList}>clear Items</button>
          </div>
        )}
      </section>
     </>
  );
};

export default App_xx;
