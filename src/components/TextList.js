import React from 'react';
import Texts from './Texts';

const TextList = ({legalTexts, textClick}) => {

    return(
        <div className="legaltext_container">
            <ul>
                {
                    legalTexts.map((item, i) =>{
                        return (
                            <Texts
                                key={i}
                                id={legalTexts[i].id}
                                description={legalTexts[i].title}
                                onClicky={textClick}
                            />
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default TextList;