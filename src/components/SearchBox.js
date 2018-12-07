import React from 'react';

const SearchBox = ({searchbar, searchChange}) => {
    return (
        <>
            <input
                type="search"
                placeholder="Zoeken op naam"
                className="searchbar"
                onChange={searchChange}
            />
        </>
    );
}

export default SearchBox;