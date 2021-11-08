import React from "react";

class SignIn extends React.Component {

  goToCreator = () => {
    window.location = ('/Creator/MeMyselfandI');
  };

  render() {
    return (
      <div className="Title">
        <h1>Sign In By Clicking the Button Below</h1>
        <button onClick={this.goToCreator}>&#8594; Here &#8592; </button>
      </div>
    );
  }
}

export default SignIn;
