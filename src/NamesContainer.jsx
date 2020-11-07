import React, { Component } from 'react'
import Name from './Name'

class NamesContainer extends Component {
    render() {
        // console.log("inside names container" + this.props.names);
        for (const [key, value] of Object.entries(this.props.names)) {
            console.log(`${key}: ${value}`);
        }
        // console.log("inside names container" + Object.entries(this.props.names)[0]);
        return (
            <div>
                {this.props.names.map(element =>
                    <li key={element.id.toString()}> 
                    <Name name = {element.name}/>
                    <p>{element.recent_match_time}</p>
                    <p>{element.KDA}</p>
                    </li>)
                }
            </div>
        )
    }
}
export default NamesContainer