import React, { Component } from 'react'
class Search extends Component {
    constructor(props) {
        super(props)
    } 

    render() {
        const searchResults = this.props.searchResults.map( curr => <li key={curr.id} data-id={curr.id} onClick={this.props.handleSelect} className="currency-list-item"><a href="#"><span>{curr.name}</span></a><span>{curr.currency_symbol}</span></li>)
        return(
            <div>
                <h2>Cryptocurrency Portfolio Calculator</h2>
                <form>
                    <div className="form-group">
                        <label>Search for a Currency</label><br/>
                        <input onChange={this.props.handleChange} autoComplete="off" type="text" name="name" placeholder="Ex Bitcoin, Litecoin, Ethereum..." value={this.props.name} className="field"/>
                    </div>
                    <div className="currency-list">
                        {searchResults}
                    </div>
                </form>
            </div>
        )
    }
}
export default Search