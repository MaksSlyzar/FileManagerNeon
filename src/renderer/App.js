import React from 'react';

import {FmBlock} from './components/FmBlock';
import {LeftBar} from './components/LeftBar';

export class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      Windows: [
        {
          source: "/home/maksym/Projects"
        },
        {
          source: "/home/maksym/Projects/kinootmarka_repository"
        }
      ]
    }
  }
  render() {
    let windows = this.state.Windows.map((window, index) => {
      return <FmBlock source={window.source} windows_length={this.state.Windows.length} key={index} />
    })

    return (
      <div style={styles.container}>
        <LeftBar />
        <div style={styles.windows}>{windows}</div>
      </div>
    );
  }
}

const styles = {
  windows: {
    width: "100%",
    display: "flex"
  },
  container: {
    width: "100%",
    height: "100%",
    display: "flex"
  }
}