import React from 'react';

import {TopPanel} from './TopPanel';
import {ViewDirectory} from './ViewDirectory';

import './FmBlock.less';

export class FmBlock extends React.PureComponent {
    constructor (props) {
        super(props);
    }

    render() {
        let width = `${(1 / this.props.windows_length) * 100}%`;
        return (
            <div className="FmBlock" style={styles.container, {width: width}}>
                <TopPanel source={this.props.source} />
                <ViewDirectory windows_length={this.props.windows_length} source={this.props.source} />
            </div>
        );
    }
}

let styles = {
  container: {
    height: "100%"
  }
}