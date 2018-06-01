import React from 'react';
import Services from './components/services/Services';

class App extends React.Component {
  /**
   * Initialize services data into the state
   */
  componentWillMount() {
  }

  /**
   * Render the application
   */
  render() {
    return (
      <div className="main">
        <Services />
      </div>
    );
  }
}

export default App;
