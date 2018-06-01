import React from 'react';
import axios from 'axios';
import Services from './components/services/Services';

class App extends React.Component {
  /**
   * Constructor
   * @param {*} props
   */
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorString: null };
  }

  /**
   * Initialize services data into the state
   */
  componentWillMount() {
    const servicesUrl = 'https://realtime.thetrainline.com/departures/wat';
    axios
      .get(servicesUrl)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        this.componentDidCatch(error);
      });
  }

  /**
   * Catch error and put it in the state
   * @param {*} error
   */
  componentDidCatch(error) {
    this.setState({ hasError: true, errorString: error });
  }

  /**
   * Render the application
   */
  render() {
    if (this.state.hasError) {
      return <h1>{this.state.errorString.toString()}</h1>;
    }
    return (
      <div className="main">
        <Services />
      </div>
    );
  }
}

export default App;
