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
  });
  it("has a state and returns it", () => {
    const emptyInitialState = new SimpleState();
    const filledInitialState = new SimpleState({ kittens: "are awesome" });
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
  });
});
