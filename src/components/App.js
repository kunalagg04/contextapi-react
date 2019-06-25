import "./App.css";
import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import UserForm from '../components/UserForm';

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
                <LanguageContext.Provider value={this.state.language}>
                    <UserForm></UserForm>
                </LanguageContext.Provider>
            </div>
        );
    }


}

export default App; 