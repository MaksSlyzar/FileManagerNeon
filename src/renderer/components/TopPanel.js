import { TouchBarScrubber } from 'electron';
import React from 'react';

import './TopPanel.less';

export class TopPanel extends React.Component {
  constructor (props) {
    super(props);
  }
  render() {
    return (
      <div className="TopPanel">
        <span>{this.props.source}</span>
      </div>
    );
  }
}

