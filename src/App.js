import React from "react";
import "./App.css";

//redux
import store from "./store";
import { Provider, useSelector } from "react-redux";

function Show() {
  const todo = useSelector((state) => state);
  return <div>{console.log(todo.alerts.showAlert)}</div>;
}

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>React - Redux</h1>
        <div className="alert">Aletta activada</div>
        <Show />
      </div>
    </Provider>
  );
}

export default App;
