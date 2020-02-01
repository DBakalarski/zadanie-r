import React, { Component } from 'react';


class SearchPanel extends Component {



    render() {
        return (
            <div className="search-pannel">
                <div className="select-sort">
                    <span>Sortuj według </span>
                    <select onChange={(e) => this.props.change(e)} value={this.props.value} >
                        <option value="default">domyslnie</option>
                        <option value="AZ">e-mail (A-Z)</option>
                        <option value="ZA">e-mail (Z-A)</option>
                        <option value="age-up">wiek (rosnąco)</option>
                        <option value="age-down">wiek (malejąco)</option>
                    </select>
                </div>
                <div className="input-search">
                    <span>Wyszukaj po imieniu lub nazwisku </span>
                    <input type="text" onChange={(e) => this.props.change(e)} value={this.props.valueInput} />
                </div>
            </div>
        );
    }
}

export default SearchPanel;