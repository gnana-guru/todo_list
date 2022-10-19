import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import List from './List';
import Modal from './Modal';

function App() {

  const [openModal, setOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const dispatch = useDispatch();

  const getList = async() => {
    try {
      let list = await axios.get('https://gorest.co.in/public/v1/todos')
      if(list.status === 200) {
        dispatch({type: 'LIST', data: list.data.data})
      }
      console.log(list)
    } catch(err) {
      //err handling
    }
  }

  useEffect(() => {
    getList();
  }, []);

  return (
    <div className="app-container">
      <List setOpenModal={setOpenModal} setSelectedItem={setSelectedItem} />
      <Modal open={openModal} item={selectedItem} setOpenModal={setOpenModal} />
    </div>
  );
}

export default App;
