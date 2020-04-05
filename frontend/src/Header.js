import React from 'react';

function Header({ title, counter }) {
    return(
        <header>
            <h1>{title}: {counter}</h1>
        </header>
    );
}

export default Header;