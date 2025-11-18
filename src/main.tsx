import { createRoot } from 'react-dom/client'
import { App } from './App';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Store } from './redux/store';
import { Provider } from 'react-redux';
import { ContextData } from './hooks/Context';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw Error('Element is null')
}

createRoot(rootElement).render(
  <Provider store={Store}>
    <ContextData>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextData>
  </Provider>
)