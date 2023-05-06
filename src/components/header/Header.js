import { Component } from "react";
import "../../App.css";


//Header component as Class Component
class Header extends Component {
  render() {
    return <h1 className="hader">{this.props.data}</h1>;
  }
}

export default Header;
