import React, { Suspense, useState } from 'react';

import Stopwatch from './features/stopwatch/Stopwatch';

const SuperComponent = React.lazy(() => import('./SuperComponent'));

function App() {
  const [load, setLoad] = useState(false);

  return (
    <div className="App">
      <Stopwatch />

      <button
        type="button"
        style={{ marginBottom: '1rem' }}
        onClick={() => setLoad(true)}
      >
        Load
      </button>

      {
        load ? (
          <Suspense fallback={<p>Loading…</p>}>
            <SuperComponent />
          </Suspense>
        ) : null
      }
    </div>
  );
}

export default App;
