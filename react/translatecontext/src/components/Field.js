import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component{
    static contextType = LanguageContext; // special name like state

    render(){
        const text = this.context.language === 'english'?'Name':'Naam';
        console.log(this.context);
        return(
            <div className="ui field">
                <label>{text}</label>
                <input />
            </div>
        );
    }
};

export default Field;   