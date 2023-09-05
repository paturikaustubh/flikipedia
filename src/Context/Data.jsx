import { createContext, Component } from "react";

let Context = createContext();

export class Data extends Component {
  handleAdult = () => {
    this.setState((prevVals) => ({ ...prevVals, adult: !this.state.adult }));
  };

  handleInfoAlert = (value) => {
    this.setState((prevVals) => ({ ...prevVals, infoAlert: value }));
  };

  handleSuccessAlert = (value) => {
    this.setState((prevVals) => ({ ...prevVals, successAlert: value }));
  };

  handleErrorAlert = (value) => {
    this.setState((prevVals) => ({ ...prevVals, errorAlert: value }));
  };

  state = {
    handleAdult: this.handleAdult,
    handleInfoAlert: this.handleInfoAlert,
    handleSuccessAlert: this.handleSuccessAlert,
    handleErrorAlert: this.handleErrorAlert,
    adult: false,
    header: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYWJkZGUxZmYxNTg5MjBhMzc5ZDNmZjhjNDk2YzVkNyIsInN1YiI6IjY0NmI2ZDhkYzM1MTRjMmIwYTMzNWMwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5HbEmD6dynpOHWFNSglBkGwyS7-Scl1pyUtLwXzBpnI",
    },
    infoAlert: false,
    successAlert: false,
    errorAlert: false,
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export let ConsumerEffect = Context;
export let ConsumerJSX = Context.Consumer;
