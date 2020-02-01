import React from 'react';
import User from './User'

const UsersList = (props) => {
    const sort = props.sortUser
    const inputValue = props.inputValue.toLowerCase()
    let data = [...props.data]

    const filerItems = (letters) => {
        return (data.filter(item => item.name.toLowerCase().indexOf(letters) > -1))

    }

    data = filerItems(inputValue)


    if (sort === "AZ") {
        data = data.sort((a, b) => {
            if (b.email < a.email) {
                return 1
            }
            if (b.email > a.email) {
                return -1
            }
            return 0
        })
    } else if (sort === "ZA") {
        data = data.sort((a, b) => {
            if (b.email > a.email) {
                return 1
            }
            if (b.email < a.email) {
                return -1
            }
            return 0
        })
    } else if (sort === "age-up") {
        data = data.sort((a, b) => {
            if (a.age > b.age) {
                return 1
            }
            if (a.age < b.age) {
                return -1
            }
            return 0
        })
    }
    else if (sort === "age-down") {
        data = data.sort((a, b) => {
            if (b.age > a.age) {
                return 1
            }
            if (b.age < a.age) {
                return -1
            }
            return 0
        })
    }

    const users = data.map(user => (
        <User key={user._id} name={user.name} img={user.avatar} city={user.address.city} street={user.address.street} houseNumber={user.address.houseNumber} email={user.email} sex={user.sex} age={user.age} />
    ))

    const stylesVertical = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around"
    }

    const stylesHorizontally = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"

    }



    return (

        <div style={props.displayVertical ? stylesHorizontally : stylesVertical}>
            {users}
        </div>


    );
}

export default UsersList;