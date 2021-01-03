import React from 'react';
import 'firebase/database';
import { SuspenseWithPerf, useDatabase, useDatabaseObjectData } from 'reactfire';

import logo from './logo.svg';


/** Watching a single Object inside Firebase Real-Time Database */
function Tap() {

  type tapList = {
    isYummy: boolean
  }

  const ref = useDatabase().ref("list");

  // get the value from the doc
  const document = useDatabaseObjectData(ref);

  const data = document.data as tapList;
  const status = document.status;

  // easily check the loading status
  if (status === 'loading') {
    return <p>Fetching burrito flavor...</p>
  }

  return <p>The burrito is {data.isYummy ? 'good' : 'bad'}</p>;
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p >
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <SuspenseWithPerf fallback={'loading burrito status...'} traceId={'load-burrito-status'}>
          <Tap />
        </SuspenseWithPerf>
      </header>
    </div>
  );
}

export default App;
