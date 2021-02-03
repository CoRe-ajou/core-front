import React from 'react';
import { init } from 'emailjs-com';
import EmailForm from './components/EmailForm';
import './App.css';

function App() {
  init("user_31qB4cbozFu8ri8yb8wY4");
  return (
    <>
      <EmailForm />
    </>
  );
}

export default App;
