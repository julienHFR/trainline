import React from 'react';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
import Services from './components/services/Services';
import Callings from './components/callings/Callings';
import { store } from './redux/store';

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
        if (response.data && response.data.services) {
          store.dispatch({
            type: 'SERVICES_SET_SERVICES',
            services: response.data.services,
          });
        } else {
          this.componentDidCatch('No services received');
        }
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
      <Switch>
        <Route exact path="/" component={Services} />
        <Route path="/callings" component={Callings} />
      </Switch>
    );
  }
}

export default App;
