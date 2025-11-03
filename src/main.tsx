import { createRoot } from 'react-dom/client'
import { App } from './App';
import './App.css'
import { BrowserRouter } from 'react-router-dom';
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw Error('Element is null')
}
createRoot(rootElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)