import React, { Component } from "react";
import axios from "axios";

import BarGraph from "../bar-graph/BarGraph";
import PieChart from "../pie-chart/PieChart";

class Dashboard extends Component {
	
	state = {
		data:[]
	}

componentDidMount() {
	axios.get('/api/channels/view-data-bar')
  .then( (response) => {
    console.log(response.data);
    this.setState({data:response.data})
  })
  .catch( (error) => {
    console.log(error);
  })
}

  render() {
    return (
      <div>
        <BarGraph data={this.state.data} />
      </div>
    );
  }
}

export default Dashboard;
