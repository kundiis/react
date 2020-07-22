import React from "react";

class ConverterBar extends React.Component {
	state = { input: "" , output:""};

	onFormSubmit = (event) => {
		event.preventDefault();
		console.log("SearchBar --> " + this.state.term);

        // callback from parent component
		//this.props.onSubmitTermCallback(this.state.term);
	}

    onUserEnteringText = (event) => {
		this.setState({ input: event.target.value, output: event.target.value*1000 });
    };

	render() {
		return (
			<div className="ui segment">
				<form onSubmit={ e => this.onFormSubmit(e) } className="ui form">
					<div className="field">
						<label> Convert Kg to Grams </label>
						<input
							type="text"
							placeholder="Enter Kg's"
							value={this.state.input}
							onChange={this.onUserEnteringText} />
					</div>
				</form>
				<div className="ui divider"></div>
				<div className="ui label">
  					Value in Grams:  {this.state.output}
				</div>	
			</div>
		);
	}
}

export default ConverterBar;
