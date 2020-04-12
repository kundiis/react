import React from "react";

class SearchBar extends React.Component {
	state = { term: "" };

	onFormSubmit = (event) => {
		event.preventDefault();
		console.log("SearchBar --> " + this.state.term);

        // callback from parent component
		this.props.onSubmitTermCallback(this.state.term);
	}

    onUserEnteringText = (event) => {
        this.setState({ term: event.target.value });
    };

	render() {
		return (
			<div className="ui segment">
				<form onSubmit={ e => this.onFormSubmit(e) } className="ui form">
					<div className="field">
						<label> Video Search </label>
						<input
							type="text"
							value={this.state.term}
							onChange={this.onUserEnteringText} />
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
