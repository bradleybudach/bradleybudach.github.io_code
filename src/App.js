import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='main'>
      <Header />
    </div>
  );
}

const Header = () => {
  return (
    <div className='header'>
      <div className='header-title'>
        <div>BRADLEY BUDACH</div>
      </div>
      <h1 className='header-text'>Portfolio</h1>
    </div>
  )
}

export default App;
