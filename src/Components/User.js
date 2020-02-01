import React from 'react';

const User = (props) => {

    const classes = props.sex ? "user woman" : "user"

    return (
        <div className={classes}>
            <div className="img-container">
                <img src={props.img} alt="avatar" />
            </div>
            <div className="user-information">
                <p><strong>{props.name}</strong></p>
                <p>{props.city}, ul. {props.street} {props.houseNumber}</p>
                <p>Płeć: {props.sex ? "kobieta" : "mężczyzna"}</p>
                <p>Wiek: {props.age}</p>
                <p>{props.email}</p>

            </div>
        </div>

    );
}

export default User;