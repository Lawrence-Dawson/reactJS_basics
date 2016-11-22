import React from "react";

export class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      age: props.initialAge,
      status: 0,
      homeLink: "Changed Link"
  };
}
  onMakeOlder(){
    this.setState({
      age: this.state.age + 3
    });
  }

  onChangeLink() {
    this.props.changeLink(this.state.homeLink);
  }

  render() {
    var text = "Something!";
    return(
      <div>
        <p>I'm a new Component!</p>
        <p>Your name is {this.props.name}, and your age is {this.state.age}</p>
        <p>Status: {this.state.status}</p>
        <hr/>
        <button onClick={ this.onMakeOlder.bind(this) } className="btn btn-primaray">Make me older!</button>
        <hr/>
        <button onClick={this.props.greet} className="btn btn-primaray">Greet</button>
        <hr/>
        <button onClick={this.onChangeLink.bind(this)} className="btn btn-primaray">Change Header Link</button>
      </div>
    );
  }
}

Home.propTypes = {
  name: React.PropTypes.string,
  age: React.PropTypes.number,
  greet: React.PropTypes.func
}
