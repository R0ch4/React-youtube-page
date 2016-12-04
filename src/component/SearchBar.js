import React, {Component} from 'react';
import logo from './../../public/youtube-logo.png';

export default class SearchBar extends Component{
	constructor(props) {
		super(props);
		this.state = {term:''};
	}

	render() {
		return(
			<div className=" navbar navbar-default search-bar">
				
				<a href="/" ><img src={logo} className="App-logo" alt="logo"/></a>
				<input value={this.state.term}
				onChange={event => this.onInputChange(event.target.value)}/>
				
			</div>
		);
	}
	onInputChange(term){
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}