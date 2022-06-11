import React from "react";
import Database from "../../database";
import { ref, onValue } from "firebase/database";

const Massages = () => {
  
  const [info, setInfo] = React.useState([]);
  window.addEventListener("load", () => {
    Fetchdata();
  });

  // Fetch the required data using the get() method
  const Fetchdata = () => {
    onValue(ref(Database, "ic-data"), (snapshot) => {
      snapshot.forEach((element) => {
        const data = element.val();
        setInfo((arr) => [...arr, data]);
      });
    });
  };
 


  return (
    <>
      <h2 className="text-6xl font-bold text-center text-indigo-500 decoration-sky-500 mb-10 underline">
        Messages
      </h2>
      <div className="flex flex-wrap justify-center">
        {info &&
          info.reverse().map((message, index) => (
            <div className="w-full md:w-1/2 lg:w-1/3 p-3" key={index}>
              <div className="bg-white border-2 border-gray-300 rounded-lg shadow-md">
                <div className="flex flex-col">
                  <div className="flex-1 p-3">
                    <div className="flex items-center justify-between">
                      <div className="ml-3 flex-1">
                        <p className="md:text-2xl text-4xl leading-5 font-bold text-gray-900">
                          {message.first_name} {message.last_name}
                        </p>
                        <p className="text-2xl md:text-xl mt-3 underline decoration-sky-500 leading-5 text-gray-500">
                          {message.email}
                        </p>

                        <p className="md:text-medium text-2xl mt-4 leading-5 text-gray-500">
                          {message.message}
                        </p>
                        <p className="md:text-sm text-medium mt-4 leading-5 font-medium mb-4 text-gray-900">
                          {message.date}
                        </p>
                        <a
                          href={"mailto:" + message.email}
                          className="md:text-2xl text-2xl bg-blue-500 mt-8 hover:bg-blue-700 text-white font-bold p-2 rounded"
                        >
                          Reply to {message.first_name}
                        </a>
                        
                      </div>
                      <div className="flex-shrink-0">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Massages;

// import React, { Component } from "react";

// export default class Messages extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       messages: [],
//     };
//   }

//   componentDidMount() {
//     const ref_val = ref(Database, "ic-data");
//     onValue(ref_val, (snapshot) => {
//         let messagelist = [];
//       snapshot.forEach((element) => {
//         const data = element.val();
//         messagelist.push(data);
//       });
//       console.log(messagelist);
//       this.setState({messages: messagelist});
//       // console.log("data", this.state.messages);
//     });
//   }
//   render() {
//     return <div>Hey</div>;
//   }
// }
