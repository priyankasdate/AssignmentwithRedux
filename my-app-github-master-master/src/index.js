import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
//import { BrowserRouter ,Routes ,Route} from "react-router-dom";
//import App from "./App";
// import EditComp from "./AppComponent/EditComp";
//import EditComp from "./Component/EditComp";
import store from "./Redux/store";
import { Provider } from "react-redux/es/exports";
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>

);