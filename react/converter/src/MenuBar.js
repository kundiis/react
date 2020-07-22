import React from 'react';

const MenuBar = (props) => {
    return(
        <div className="ui top secondary menu">
            <a className="active item">Home</a>
            <a className="item">Contact</a>
            <div className="right menu">
                <div className="item">
                    <div className="ui icon input">
                        <input type="text" placeholder="Search..."/>
                        <i className="search link icon"></i>
                    </div>
                 </div>
            </div>
        </div>

    );
}

export default MenuBar;