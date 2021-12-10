import React, { Component } from 'react';
import '../../styles/button.css';

export class Button extends Component {
    render() {
        return (
            <div>
                <body className="button-bodFy">
                    <a className="a" href="#" style={{ '--clr': '#ff22bb', '--i': 0 }}>
                        <span>Button</span>
                    </a>
                    <a className="a" href="#" style={{ '--clr': '#00ccff', '--i': 1 }}>
                        <span>Button</span>
                    </a>
                    <a className="a" href="#" style={{ '--clr': '#22e622', '--i': 2 }}>
                        <span>Button</span>
                    </a>
                </body>
            </div>
        );
    }
}

export default Button;
