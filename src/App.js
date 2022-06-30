import logo from './logo.svg';
import './App.css';
import {userState, useState} from 'react'; 
import {useRef} from 'react';

function App() {

    const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputEl = useRef(null);

    const onSubmitForm = (e) => {
      e.preventDefault();
      if (parseInt(value) === first * second) {
        setResult('정답');
        setFirst(Math.ceil(Math.random() * 9));
        setSecond(Math.ceil(Math.random() * 9));
        setValue('');
        inputEl.current.focus();
      } else {
        setResult('땡');
        setValue('');
        inputEl.current.focus();
      }
    };

  return (
    <div className="App">
        <div>{first} 곱하기 {second}는?</div>
        <form onSubmit={onSubmitForm}>
          <input
            ref={inputEl}
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button>입력!</button>
        </form>
        <div id="result">{result}</div>
    </div>
  );
}

export default App;
