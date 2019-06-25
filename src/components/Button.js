import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component{

    static contextType = LanguageContext;

    render() {
        return(
            <div>
                Hi
            </div>
        );
    }
}

export default Button;