import React from 'react';
const fs = require('fs');

import {DirectoryObject} from './DirectoryObject';

import './ViewDirectory.less';

export class ViewDirectory extends React.PureComponent {
    constructor (props) {
        super(props);

        this.state = {
            DirectoryObjects: fs.readdirSync(this.props.source)
        }
    }

    render() {
        //console.log(this.state.DirectoryObjects)
        return (
            <div className="DirectoryObjects">
                {this.state.DirectoryObjects.map((obj, index) => {
                    return <DirectoryObject key={index} name={obj} width={100} />
                })}
            </div>
        )
    }

    getDirectoryObjects() {
        this.setState({ 
            DirectoryObjects: fs.readdirSync(this.props.source) 
        });
    }
}
