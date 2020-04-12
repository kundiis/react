import React from 'react';

const Context =  React.createContext('english'); // use capital C for react quirks

export class LanguageStore extends React.Component{

    state = {language: 'english'};

    onLanguageChange = (lang) => {
        this.setState({language: lang});
    }
    
    render(){
        console.log(this.props.children);
        return(
            <Context.Provider value = {{ ...this.state, onLanguageChange: this.onLanguageChange }}>
                {this.props.children}
            </Context.Provider>
            );
    }
}

export default Context;
