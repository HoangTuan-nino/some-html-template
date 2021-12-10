import React, { Component } from 'react';
import '../../styles/loading.css';

export class Loading extends Component {
    render() {
        return (
            <div>
                <body className="loading-body">
                    <div class="container">
                        <div class="ring"></div>
                        <div class="ring"></div>
                        <div class="ring"></div>
                        <p>Loading...</p>
                    </div>
                </body>
            </div>
        );
    }
}

export default Loading;
