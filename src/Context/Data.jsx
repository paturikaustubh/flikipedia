import { createContext, Component } from "react";

let Context = createContext();

export class Data extends Component {
  handleAdult = () => {
    this.setState((prevVals) => ({ ...prevVals, adult: !this.state.adult }));
  };

  state = {
    handleAdult: this.handleAdult,
    adult: false,
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export let Consumer = Context;
