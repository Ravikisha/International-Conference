import React from "react";
import Database from "../../database";
import {ref, push} from "firebase/database";

const ContactPage = () => {
  const [first_name,setFirstName] = React.useState("");
  const [last_name,setLastName] = React.useState("");
  const [email,setEmail] = React.useState("");
  const [message,setMessage] = React.useState("");

  function submitHandler(e){
    e.preventDefault();
    push(ref(Database, "ic-data"),{
      first_name : first_name,
      last_name : last_name,
      email : email,
      message : message,
      date: new Date().toLocaleString()
    }).then(()=>{
      alert("we got your message !, We will contact you soon.");
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
    }).catch((err)=>{
      alert(err.message);
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
    })
    
  };

  return (
    <>
      <br />
      <br />
      <br />
      <br />

      <div className="max-w-screen-md mx-auto p-5">
        <div className="text-center mb-16">
          <p className="mt-4 text-sm leading-7 text-gray-500 font-regular uppercase">
            Contact
          </p>
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
            Get In <span className="text-indigo-600">Touch</span>
          </h3>
        </div>

        <form className="w-full" onSubmit={submitHandler}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                required
                name="first_name"
                placeholder="Jane"
                value={first_name}
                onChange={(e)=>setFirstName(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                required
                name="last_name"
                placeholder="Doe"
                value={last_name}
                onChange={(e)=>setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Email Address
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-email"
                type="email"
                required
                name="email"
                placeholder="********@*****.**"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}

              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Your Message
              </label>
              <textarea
                rows="10"
                required
                name="message"
                value={message}
                onChange={(e)=>setMessage(e.target.value)}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              ></textarea>
            </div>
            <div className="flex justify-between w-full px-3">
              <button
                className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactPage;
