import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
// Consumer method
class Button extends React.Component{

    renderSubmit = value => {
        return value.language === 'english'?'Submit':'Vaarlogen';
    }

    renderButton = color => {
        return (
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {(value) => this.renderSubmit(value)}
                </LanguageContext.Consumer>
            </button>
        )
    }

    render(){

        return(
            <ColorContext.Consumer>
             {(value) => this.renderButton(value)}
            </ColorContext.Consumer>
        );
    }
};

export default Button;