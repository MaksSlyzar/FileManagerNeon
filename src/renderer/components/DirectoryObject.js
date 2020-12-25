import React from 'react';
const fs = require('fs');

import './DirectoryObject.less';

export class DirectoryObject extends React.PureComponent {
    constructor (props) {
        super(props);
    }

    handleClick() {
        
    }
    

    render() {
        return (
            <div className="DirectoryObject" style={{width: `${this.props.width}px`}} onClick={this.handleClick}>
                <div className="Img">

                </div>
                <div className="Name" style={{width: `${this.props.width}px`}}>
                    {this.props.name}
                </div>
            </div>
        )
    }
}
