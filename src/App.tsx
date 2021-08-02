import React, { FC } from 'react';
import Adjectives from './components/Adjectives';
import {Link, Route, useLocation} from 'react-router-dom'
import Home from './components/Home';
import Noun from './components/Noun'
import Random from './components/Random';
import Answer from './components/Answer';

const App: FC = () => {

  const location = useLocation()
  return (
    <div className="mt-8 mx-2">
    <Link to="/">
      <p className="text-center mb-4 text-lg uppercase tracking-wider">
          Clean insult generator
      </p>
    </Link>      
      <div className="max-w-lg mx-auto rounded-lg">
        <Route path="/" component={Home} exact />
        <div className={`${location.pathname !== '/' ? "p-4 border rounded-lg border-gray-500": ''}`}>
          <Route path='/adjectives' component={Adjectives} />
          <Route path='/random' component={Random} />
          <Route path='/noun' component={Noun} />
          <Route path='/answer' component={Answer} />
        </div>
      </div>
      {/* <Route path='/pool' component={Pool} /> */}

      {/* <div className="p-4 max-w-lg mx-auto border border-gray-600 rounded-lg">
        <Adjectives />
      </div> */}
    </div>
  );
}

export default App;
