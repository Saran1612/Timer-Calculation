import React, { useState } from 'react';

const Api = () => {
  const [data, setData] = useState([]);
  const handleButtonClick = () => {
    const url = 'https://dummyjson.com/products';
    fetch(url)
      .then((data) => data.json())
      .then((response) => setData(response.products));
  };
  return (
    <>
      <div>
        <button onClick={handleButtonClick}>Click Me!</button>
      </div>

      <div>
        {data.map((items, index) => (
          <div style={{ display: 'flex' }} key={index}>
            <div>
              <img
                src={items.thumbnail}
                alt={items.title}
                width="70px"
                height="70px"
              />
            </div>
            <div>
              <h2>{items.title}</h2>
              <h5>{items.description}</h5>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Api;
