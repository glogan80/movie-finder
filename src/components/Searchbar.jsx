import React from 'react';
//destructuring handleInput
function Searchbar({ handleInput, search }) {
    return (
        <section className="searchbar-wrap">
            <input type="text" placeholder="Search for a movie..." className="searchbar" onChange={handleInput} onKeyPress={search} />
        </section>
    );
}

export default Searchbar;