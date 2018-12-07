import React from 'react';

const Texts = ({onClicky,id,description}) => {

    return(
            <li onClick={onClicky} data-id={id}>{description}</li>
    );
};

export default Texts;