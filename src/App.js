import './App.css';
import {useState, useEffect} from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://universities.hipolabs.com/search?country=United+States")
      .then(res => {
        console.log(res);
        setData(res.data);
      })  .catch(err => {
        console.log(err);
    } );  
  }, []);

  return (
    <div className="App">
        <h1>
            University of the United States, Sample Table
        </h1>
        <body>
        {
          // 1. One way to do it just to use .map method and render a regular list
            // data.map(item => {
            //     return (
            //         <div>
            //             <h2>{item.alpha_two_code}</h2>
            //             <p>{item.country}</p>
            //             <p>{item.name}</p>
            //         </div>
            //     );
            // })
            // 2.Another way to create a simple HTML Table
            // <table>
            //     <tr>
            //       <td>Code</td>
            //       <td>Country</td>
            //       <td>Name</td>
            //     </tr>
                      
            //     {data.map(item => {
            //       return (
            //         <tr>
            //           <td>{item.alpha_two_code}</td>
            //           <td>{item.country}</td>
            //           <td>{item.name}</td>
            //         </tr>
            //       )
            //     })
            //   };
            // </table>
            
            //3. We can also use a datatable library and use data state there

        }
        </body>
    </div>
  );
}

export default App;
