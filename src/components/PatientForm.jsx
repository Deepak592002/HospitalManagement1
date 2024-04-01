import React, { useState } from 'react';

function PatientForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [instance, setInstance] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Instance:", instance);
    console.log("Status:", status);
    // You can add your logic here to handle form submission, such as sending the data to an API
  };

  return (
    <div className="mx-auto flex justify-center my-8">
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-gray-100 rounded-lg px-8 py-6">
      <h1 className="text-3xl text-center font-bold mb-4">Add Patient</h1>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="instance" className="block text-gray-700 font-bold mb-2">Instance:</label>
          <input
            type="text"
            id="instance"
            value={instance}
            onChange={(e) => setInstance(e.target.value)}
            className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Instance"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="status" className="block text-gray-700 font-bold mb-2">Status:</label>
          <input
            type="text"
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Status"
          />
        </div>
        <div className="flex items-center justify-between">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default PatientForm;
