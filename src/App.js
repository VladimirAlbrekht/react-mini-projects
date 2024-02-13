import './App.css';
import Counter from './Components/Counter/Counter';
import Modal from './Components/Modal/Modal';
import Quiz from './Components/Quiz/Quiz';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <ol className='list'>
          <li className='list__item'>
            <h2 >Counter:</h2>
            <Counter />
          </li>
          <li className='list__item'>
            <h2>Modal:</h2>
            <Modal />
          </li>
          <li className='list__item'>
            <h2>Quiz:</h2>
            <Quiz />
          </li>
        </ol>
      </div>
    </div>
  );
}

export default App;
