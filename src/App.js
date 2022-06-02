
import './App.css';
import Forms from './component/Forms';
// import Register from './component/Register';
// import RegistrationForm from './component/RegistrationForm';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='box'>
        {/* <div className='div-left'><span>User Registration Form </span></div> */}
          {/* <RegistrationForm/> */}
          <Forms/>
          {/* <Register/> */}
        </div>
      
      </header>
    </div>
  );
}

export default App;
