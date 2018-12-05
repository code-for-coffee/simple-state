import React, { Component } from "react";
import SimpleState from "@codeforcoffee/simple-state";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.store = new SimpleState({
      data: {
        foo: "bar",
        isInitial: true
      }
    });
  }

  render() {
    return (
      <div className="App">
        <section>
          <h1>State Management</h1>
          <button
            onClick={() => {
              this.store.updateStore({
                cats: this.store.getState().cats + 1 || 1,
                isInitial: false
              });
              console.log(this.store.getState());
            }}
          >
            console.log Update Store
          </button>
          <button
            onClick={() => {
              console.log(this.store.getState());
            }}
          >
            Current State
          </button>
          <button
            onClick={() => {
              console.log(this.store.getPreviousState());
            }}
          >
            console.log Previoius State
          </button>
          <button
            onClick={() => {
              console.log(this.store.getInitialState());
            }}
          >
            console.log Initial State
          </button>
          <button
            onClick={() => {
              console.log(this.store.toJSON());
            }}
          >
            console.log toJSON
          </button>
        </section>
      </div>
    );
  }
}

export default App;
