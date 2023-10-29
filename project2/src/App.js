

import './App.css';

import ContactForm from './Components/contactForm/ContactForm';
import ContactHeader from './Components/contactHeader/ContactHeader';
import { Navbar } from './Components/navbar/Navbar';



function App() {
  return (
    <div>
      <Navbar />
      <main className='main-container'>
        <ContactHeader />
        <ContactForm />
      </main>
    </div>
  );
}

export default App;