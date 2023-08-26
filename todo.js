import React, { useState } from 'react';

const Todo = () => {
  const [data, setData] = useState('');
  const [dataArr, setDataArr] = useState([]);
  const [ID, setId] = useState(1);

  const handleChange = (event) => {
    setData(event.target.value);
  };

  const handleAdd = () => {
    setData('');
    setId((prev) => prev + 1);
    setDataArr((prev) => [...prev, { id: ID, task: data }]);
  };

  const handleEdit = (id) => {
    console.log(id, 'editedOne');
    const needToEdit = dataArr.filter((item) => Number(item.id) === Number(id));
    setData(needToEdit[0].task);
    console.log(needToEdit, 'needToEdit');
  };

  const handleDelete = (id) => {
    console.log(id, 'deletedOne');
    const needToEdit = dataArr.filter((item) => Number(item.id) !== Number(id));
    setDataArr(needToEdit);
  };

  return (
    <>
      <div>
        <input type="text" onChange={handleChange} value={data} />
        <button onClick={handleAdd}>Add</button>
      </div>

      <div>
        <ul>
          {dataArr.map((item) => (
            <li
              key={item.id}
              style={{ display: 'flex', justifyContent: 'start' }}
            >
              <p>{item.task} </p>
              {/* <button onClick={() => handleEdit(item.id)}>Edit</button> */}
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Todo;
