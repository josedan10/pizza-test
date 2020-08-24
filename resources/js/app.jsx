import React from 'react';
import ReactDOM from 'react-dom';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import Nav from './components/nav';

library.add(fab, fas)

const App = () => (
  <div>
    <Nav />
  </div>
)

ReactDOM.render(<App />, document.getElementById('app'))

require('./bootstrap');
