import './App.css';
import { useState } from "react";
import { data } from "./data";
import { dataTwo } from './dataTwo';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {

  const [macaron, setMacaron] = useState(0);
  const {name, price, image} = data[macaron];
  console.log(data[macaron]);
  const [services, setServices] = useState(dataTwo);

  const previousMacaron = () => {
    setMacaron(( macaron => {
      macaron --;
      if (macaron < 0) {
        return data.length-1;
      }
      return macaron;
    }))
  }

  const nextMacaron = () => {
    setMacaron(( macaron => {
      macaron ++;
      if (macaron > data.length - 1) {
        macaron = 0;
      }
      return macaron;
    }))
  }

  const removeService = (id) => {
    let newServices = services.filter((item) => item.id !== id);
    setServices(newServices);
  }


return (
    <div className='wrapper'>
    <Header />
    
    <div className="container pic">
      <img src={ image } width="250px" alt="macaron"/>
    </div>

    <div className="container">
      <h1>{ name }</h1>
    </div>

    <div className="container">
      <h2>{ price } $/piece</h2>
    </div>

    <div className="btn container">
      <button onClick={ previousMacaron }>Back</button>
      <button onClick={ nextMacaron }>Next</button>
    </div>

    <div className="container services">
      <p>Choose One Additional Service for Free</p>
    </div>

    {services.map((item => {
        const { id, description } = item;
        return(
          <div key={id}>
          <div className="container">
            <h2 className='services'>{ description }</h2>
          </div>
          <div className="container">
            <button className="btn" onClick={() => removeService(id)}>Remove</button>
          </div>
          </div>
        )
      }))}

    <Footer />
  </div>
  );
}

export default App;
