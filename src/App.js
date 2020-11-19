import logo from './logo.svg';
import './App.css';

import {
  Link,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  link: {
    color: '#61dafb'
  }
})

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link
          className={classes.link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          underline="always"
        >
          Learn React
        </Link>
      </header>
    </div>
  );
}

export default App;
