import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import axios from 'axios';
import { store } from './redux/store';
import Services from './components/services/Services';
import Callings from './components/callings/Callings';
import setError from './utils/error';

const history = createHistory();

class App extends React.Component {
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
            type: 'SET_SERVICES',
            services: response.data.services,
          });
        } else {
          setError('No services received');
        }
      })
      .catch((error) => {
        setError(error.toString());
      });
  }

  /**
   * Render the application
   */
  render() {
    return (
      <div className="main">
        <h1>{this.props.error}</h1>
        <ConnectedRouter history={history}>
          <div>
            <Route exact path="/" component={Services} />
            <Route path="/callings" component={Callings} />
          </div>
        </ConnectedRouter>
      </div>
    );
  }
}

/**
 * Links the needed state properties to the component
 * @param {*} state
 */
function mapStateToProps(state) {
  return {
    error: state.get('error'),
  };
}

export default connect(mapStateToProps)(App);
