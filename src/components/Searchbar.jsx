import React from 'react';

function Searchbar({ handleInput, search }) {
    return (
        <section className="searchbar-wrap">
            <input type="text" placeholder="Search..." className="searchbar" onChange={handleInput} onKeyPress={search} />
        </section>
    );
}

export default Searchbar;