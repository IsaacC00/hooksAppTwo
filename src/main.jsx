import { StrictMode } from 'react'
//?el BrowserRouter se le conoce como higer component
//?por que este es cadas de recibir mas componentes en su interior
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import './index.css'
import { MainApp } from './10-useContext/MainApp';
import { MultipleHook } from './03-example/MultipleHook';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter>
      <MultipleHook />
  </BrowserRouter>
  // {/* </StrictMode> */}
)
