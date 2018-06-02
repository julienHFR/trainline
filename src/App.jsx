import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import Services from './components/services/Services';
import Callings from './components/callings/Callings';

const history = createHistory();

class App extends React.Component {
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
