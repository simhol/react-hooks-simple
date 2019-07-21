import React, { Component } from "react";
import axios from "axios";

class ResourceList extends Component {
  componentDidUpdate() {
    axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
  }
  render() {
    return <div>{this.props.resource}</div>;
  }
}

export default ResourceList;
