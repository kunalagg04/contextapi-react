import "./App.css";
import React from 'react';

class App extends React.Component {

    state = {language : 'English'};

    onLanguageChange = language => {
        this.setState({language: language});
    }

    render(){
        return (
            <div class="container" id="box">
                Choose a language !
                <i onClick={() => this.onLanguageChange('English') }    class="fas fa-flag"></i>
                <i onClick = {() => this.onLanguageChange('Dutch') }   class="far fa-flag"></i>
                <br></br>
                {this.state.language}
            </div>
        )
    }


}

export default App;