import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadTable, selectCurrentPage, selectPerPage, selectTable, selectTotalCounte, setCurrentPage } from './TableSlice';
import './Table.css';

function Table(props) {
  const dispatch = useDispatch();
  const table = useSelector(selectTable);
  const currentPage = useSelector(selectCurrentPage);
  const totalCounte = useSelector(selectTotalCounte);
  const perPage = useSelector(selectPerPage);

  const pages = [];
  for (let i = 1; i <= Math.ceil((totalCounte/perPage)); i++){pages.push(i)};
  
  const lastTableIndex = currentPage * perPage;
  const firstTableIndex = lastTableIndex - perPage;
  const currentTable = table.slice(firstTableIndex,lastTableIndex); 
 
  useEffect(() => {
    dispatch(loadTable());
  }, [dispatch]);

  return (
    <>
    <div>
      <table className='table'>
          <thead>
            <tr>     
              <th>Original URL</th>
              <th>Short URL</th>
            </tr>
          </thead>
          <tbody>
            {currentTable?.map((el)=>(
            <tr key={el._id}><td><a href={el?.from}  >{el?.from}</a></td><td><a href={el?.from} >{el?.code}</a></td></tr>))}      
          </tbody>  
      </table>
    </div> 
    <div className='pages'>
      {pages.map((el, index) => 
      <span key={index} className={currentPage === el ? "current-page" : "page"} onClick={() => dispatch(setCurrentPage(el))}>{el}</span>)}
    </div>
    </>
  );
}

export default Table;