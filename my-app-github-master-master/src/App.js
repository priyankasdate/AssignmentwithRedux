import "./App.css";
//import { Link } from "react-router-dom";
// import UserDetailsComponent from "./Component/UserDetailsComponent";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "./Redux/saga/serviceCall";
import { useEffect } from "react";
//import { getUser } from './Redux/saga/serviceCall';
//import { useEffect } from "react"



function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
  dispatch(getUser());
  },[dispatch]);

  const users = useSelector((state) => state.userReducer.users);
  console.log(users)
  return (

    <div>
      <p>Redux...</p>
    </div>
  );
};
export default App;

