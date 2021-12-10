import React, { Component } from 'react';

import './App.css';

import './appStyles.css';
import Button from './components/html-css/button';
import Footer from './components/html-css/footer';
import Loading from './components/html-css/loading';

class App extends Component {
    render() {
        return (
            <div className="app">
                <div className="container">
                    <div className="row-1">
                        <div className="button-box">
                            <Button />
                        </div>
                        <div className="loading-box">
                            <Loading />
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <Footer />
                </div>
            </div>
        );
    }
}
export default App;
