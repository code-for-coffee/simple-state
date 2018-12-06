import chai from "chai";
import SimpleState from "../src/index";

const expect = chai.expect;
const should = chai.should();

describe("a SimpleState", () => {
  it("can be instantiated", () => {
    const state = new SimpleState();
    should.exist(state);
    expect(typeof state).to.equal("object");
    expect(typeof SimpleState).to.equal("function");
  });
  it("has an initial state and returns it", () => {
    const emptyInitialState = new SimpleState();
    const filledInitialState = new SimpleState({ kittens: "are awesome" });
    expect(typeof emptyInitialState.getInitialState).to.equal("function");
    expect(typeof emptyInitialState.getInitialState()).to.equal("object");
    expect(Object.keys(emptyInitialState.getInitialState()).length).to.equal(0);
    expect(typeof filledInitialState.getInitialState).to.equal("function");
    expect(typeof filledInitialState.getInitialState()).to.equal("object");
    expect(Object.keys(filledInitialState.getInitialState()).length).to.equal(
      1
    );
    expect(filledInitialState.getInitialState().hasOwnProperty("kittens"));
    expect(filledInitialState.getInitialState().kittens).to.equal(
      "are awesome"
    );
  });
  it("has a state and returns it", () => {
    const emptyInitialState = new SimpleState();
    const filledInitialState = new SimpleState({ kittens: "are awesome" });
    expect(typeof emptyInitialState.getState).to.equal("function");
    expect(typeof emptyInitialState.getState()).to.equal("object");
    expect(Object.keys(emptyInitialState.getState()).length).to.equal(0);
    expect(typeof filledInitialState.getState).to.equal("function");
    expect(typeof filledInitialState.getState()).to.equal("object");
    expect(Object.keys(filledInitialState.getState()).length).to.equal(1);
    expect(filledInitialState.getState().hasOwnProperty("kittens"));
    expect(filledInitialState.getState().kittens).to.equal("are awesome");
  });
  it("can return previousState", () => {
    const emptyInitialState = new SimpleState();
    const filledInitialState = new SimpleState({ kittens: "are awesome" });
  });
  it("updates the store and merges child array values by default", () => {
    const emptyInitialState = new SimpleState();
    const filledInitialState = new SimpleState({ kittens: "are awesome" });
  });
  it("can update the store and not merge child arrays", () => {
    const emptyInitialState = new SimpleState();
    const filledInitialState = new SimpleState({ kittens: "are awesome" });
  });
  it("returns state as JSON", () => {
    const emptyInitialState = new SimpleState();
    const filledInitialState = new SimpleState({ kittens: "are awesome" });
    expect(emptyInitialState.toJSON()).to.equal(`{"state":{}}`);
    expect(filledInitialState.toJSON()).to.equal(
      `{"state":{"kittens":"are awesome"}}`
    );
  });
});
