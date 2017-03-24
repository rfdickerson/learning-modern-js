import React from 'react';
import {render} from 'react-dom';

import Layout from './layout.jsx';

// load stylesheet
require("../sass/default.scss");

class App extends React.Component {

    render () {
        return (
            <Layout/>
        );
    }
}

render(<App/>, document.getElementById('app'));