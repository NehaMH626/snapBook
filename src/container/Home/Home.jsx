import React, { Component } from "react";
import Appheader from "../../components/Appheader";
import Datatable from "../../components/Datatable";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Appheader />
        <Datatable />
      </div>
    );
  }
}

export default Home;
