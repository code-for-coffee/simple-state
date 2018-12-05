/**
 * Created by codeforcoffee on 11/2/18.
 */
class SimpleState {
  appStore = { state: undefined };

  /**
   * constructor
   * @param {*} initialState
   */
  constructor(initialState = {}) {
    this.appStore = { state: initialState };
    this.initialState = initialState;
  }

  /**
   * Returns initial state
   */
  getInitialState() {
    return {
      ...this.initialState
    };
  }

  /**
   * Update the store. MergeArrays is true by default.
   * @param {*} newAttributes
   * @param {Boolean} mergeArrays
   */
  updateStore(newAttributes = {}, mergeArrays = true) {
    let currentState = this.appStore;
    let existingArrays = () => {
      let arraysInState = Object.keys(this.appStore.state).map(key => {
        if (Array.isArray(this.appStore.state[key])) return key;
      });
      let arraysInNextState = Object.keys(newAttributes).map(key => {
        if (Array.isArray(newAttributes[key])) return key;
      });
      let result = arraysInState.filter(key => arraysInNextState.includes(key));
      let obj = {};

      result.forEach(key => {
        if (!key) return;
        let state = this.appStore.state;
        obj[key] = state[key].concat(newAttributes[key]);
      });

      return obj;
    };

    let nextState = {
      state: {
        ...currentState.state,
        ...newAttributes,
        ...(mergeArrays === true ? existingArrays() : {})
      },
      previousState: { ...currentState.state }
    };

    this.appStore = nextState;
    return currentState;
  }

  /**
   * Get current state
   */
  getState() {
    return this.appStore.state;
  }

  /**
   * Get prior state
   */
  getPreviousState() {
    return this.appStore.previousState;
  }

  /**
   * converts state to JSON
   */
  toJSON() {
    return JSON.stringify(this.appStore);
  }
}

/** @namespace SimpleState */
export default SimpleState;
