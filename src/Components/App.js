import React, { Component } from 'react';
import UsersList from './UsersList'
import './App.css';
import SearchPanel from './SearchPanel';
import DisplayChangeButton from './DisplayChangeButton'


class App extends Component {

    state = {
        data: [],
        sortUsers: 'default',
        inputValue: '',
        displayVertical: false
    }

    componentDidMount() {
        fetch('data/clients.json')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    data: data.data
                })
            })
    }

    handleDisplayChange() {
        this.setState({
            displayVertical: !this.state.displayVertical
        })
    }

    handleDropdownChange = (e) => {
        console.log(e.target.nodeName)
        if (e.target.nodeName === "SELECT") {
            this.setState({
                sortUsers: e.target.value
            })
        } else if ((e.target.nodeName === "INPUT")) {
            this.setState({
                inputValue: e.target.value
            })
        }

    }
    render() {
        return (
            <>
                <SearchPanel change={(e) => this.handleDropdownChange(e)} valueSelect={this.state.sortUsers} valueInput={this.state.inputValue} />
                <DisplayChangeButton click={() => this.handleDisplayChange()} displayVertical={this.state.displayVertical} />
                <UsersList displayVertical={this.state.displayVertical} data={this.state.data} sortUser={this.state.sortUsers} inputValue={this.state.inputValue} />
            </>
        )
    }
}

export default App;
