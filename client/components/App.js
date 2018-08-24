import React from 'react';
import Welcome from './welcome.jsx';
import NavigationBar from './navigationBar.jsx'

class App extends React.Component {
    render(){
        return (
            <div className="container">
                <NavigationBar />
                {this.props.children}
            </div>
        );
    }
}

export default App;