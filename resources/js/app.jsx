import React from 'react';
import ReactDOM from 'react-dom';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import { ThemeProvider } from 'styled-components'

import Nav from './components/nav';
import StarredCarousel from './components/starred-carousel'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import theme from './theme'

library.add(fab, fas)

const App = () => (
  <div>
    <ThemeProvider theme={theme}>
      <Nav />
      <StarredCarousel />
    </ThemeProvider>
  </div>
)

ReactDOM.render(<App />, document.getElementById('app'))

require('./bootstrap');
