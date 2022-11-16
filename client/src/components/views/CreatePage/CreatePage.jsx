import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addLink } from './CreatePageSlice';
import { getUser} from '../Main/MainSlice';
import Table from '../Table/Table';
import { selectTable, loadTable } from '../Table/TableSlice';
import './CreatePage.css';


function CreatePage(props) {

  const dispatch = useDispatch();
  const table = useSelector(selectTable);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  useEffect(() => {
    dispatch(loadTable());
  }, [dispatch]);

  const newLink = React.useCallback(
    async(event) => {
      event.preventDefault();
      const dispatchResult = await dispatch(
        addLink({
          from: event.target.text.value,
          address: event.target.address.value,
        })
      );
      if(dispatchResult.error) {
        event.target.reset();
      }
      dispatch(loadTable())
      event.target.reset();
      //   navigate('/')
    },
    [ dispatch ]
  )

  return (
    <>
      <div className='container form'>
        <h2> Let's Creat</h2>
        <form className='forma' onSubmit={newLink}>
          <input className='custom-input' placeholder='Вставте ссылку' name ='text'></input>
          <input className='custom-input'  placeholder='Короткий адрес' name ='address'></input>
          <button className='btn btnform'  type="submit">Сделать</button>
        </form> 
      </div>
      {table.length === 0 ? <p className='custom-p'> Ссылок пока нет 🙃 </p> : <Table></Table>}
    </>  
  );
}

export default CreatePage;