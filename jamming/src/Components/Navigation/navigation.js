import React from 'react';
import "../Navigation/navigation.css"


class Navigation extends React.Component {

    render() {
        return (
            <div>
                <h1>Ja<span className="highlight">mmm</span>ing </h1>
                <div class="itemABContainer" id="itemABContainer">
                    <div class="itemABA" id="itemABA"><a href="https://coxnswebsite.surge.sh/">Back to Coxn's Webiste</a></div>
                </div>
            </div>
        )
    }
}

export default Navigation;