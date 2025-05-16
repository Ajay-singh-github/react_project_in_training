import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// ----------redux---------------------
import RootReducer from './Storage/RootReducer.jsx';
import { createStore } from "redux";
import { Provider } from 'react-redux';



var store = createStore(RootReducer)

// -----------------redux------------------

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>
)
