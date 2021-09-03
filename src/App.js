import React from 'react';


function Food({ name,picture }) {
  return (
    <div>
      <h2>I love {name}</h2>
      <img src={picture} alt="이미지" />
  </div>
  );
}

const foodILike = [
  {
    name: 'Kimchi',
    image: 'https://re-dev.eyes.co.kr/assets/images/all/logo.png'
  },
  {
    name: 'Samgyeopsal',
    image: 'https://re-dev.eyes.co.kr/assets/images/all/logo.png'
  },
  {
    name: 'Bibimbap',
    image: 'https://re-dev.eyes.co.kr/assets/images/all/logo.png'
  },
  {
    name: 'Doncasu',
    image: 'https://re-dev.eyes.co.kr/assets/images/all/logo.png'
  }
];

function App() {
  return (
    <div>
      {foodILike.map((dish,index) => (
        <Food name={dish.name} picture={dish.image} key={index} />
      ))}
    </div>
  );
}

export default App;
