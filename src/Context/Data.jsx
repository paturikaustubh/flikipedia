import { createContext, Component } from "react";

let Context = createContext();

export class Data extends Component {
  handleAdult = () => {
    this.setState((prevVals) => ({ ...prevVals, adult: !this.state.adult }));
  };

  state = {
    handleAdult: this.handleAdult,
    adult: false,
    header: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYWJkZGUxZmYxNTg5MjBhMzc5ZDNmZjhjNDk2YzVkNyIsInN1YiI6IjY0NmI2ZDhkYzM1MTRjMmIwYTMzNWMwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5HbEmD6dynpOHWFNSglBkGwyS7-Scl1pyUtLwXzBpnI",
    },
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
