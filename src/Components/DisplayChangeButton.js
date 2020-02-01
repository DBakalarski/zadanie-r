import React from 'react';

const DisplayChangeButton = (props) => {
    return (
        <div className="button-change-display">
            <button onClick={props.click}>
                {props.displayVertical ? "Wyświetalaj poziomo" : "Wyświetlaj pionowo"}
            </button>
        </div>
    );
}

export default DisplayChangeButton;