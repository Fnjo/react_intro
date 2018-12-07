import React from 'react';

const Pinned = ({pinnedText}) => {
    return(
        <div className="pinContainer">

            {
                pinnedText.map((item, i) =>{
                    return(
                        <div>
                        <p>{pinnedText[i]}</p>
                        </div>
                    )
                })
            }

        </div>
    );
};

export default Pinned;