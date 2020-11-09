import React, { Component } from 'react'
import Select from 'react-select';

const options = [
    { value: "Room #1 /1 Full", label: "#1 /1 Full" },
    { value: "Room #2 /1 Full", label: "#2 /1 Full" },
    { value: "Room #3 /1 Full", label: "#3 /1 Full" },
    { value: "Room #4 /1 Full", label: "#4 /1 Full" },
    { value: "Room #5 /1 Full, 1 Twin", label: "#5 /1 Full, 1 Twin" },
    { value: "Room #6 /1 Full", label: "#6 /1 Full" },
    { value: "Room #7 /1 Full", label: "#7 /1 Full" },
    { value: "Room #8 /1 Full, 1 Twin", label: "#8 /1 Full, 1 Twin" },
    { value: "Room #9 /1 Full", label: "#9 /1 Full" },
    { value: "Room #10 /1 Full", label: "#10 /1 Full" },
    { value: "Room #11 /2 Full", label: "#11 /1 Full" },
    { value: "Room #12 /2 Full", label: "#12 /1 Full" },
    { value: "Room #14 /2 Full", label: "#14 /1 Full" },
    { value: "Room #15 /2 Full, 1 Twin", label: "#15 /2 Full, 1 Twin" },
    { value: "Room #16 /1 Full", label: "#16 /1 Full" },
    { value: "Room #17 /2 Full", label: "#17 /2 Full" },
    { value: "Room #18 /1 Full, 1 Twin", label: "#18 /1 Full, 1 Twin" },
    { value: "Room #19 /2 Full, 1 Twin", label: "#19 /2 Full, 1 Twin" },
    { value: "Room #20 /2 Full", label: "#20 /2 Full" },
    { value: "Room #21 /1 Full", label: "#21 /1 Full" },
    { value: "Room #22 /2 Full", label: "#22 /2 Full" },
    { value: "Room #23 /2 Full", label: "#23 /2 Full" },
    { value: "Room #24 /1 Full", label: "#24 /1 Full" },
    { value: "Room #25 /1 Full, 1 Twin", label: "#25 /1 Full, 1 Twin" },
    { value: "Room #26 /2 Full", label: "#26 /2 Full" },
    { value: "Room #27 /2 Full", label: "#27 /2 Full" },
    { value: "Room #28 /2 Full, 1 Twin", label: "#28 /2 Full, 1 Twin" },
    { value: "Room #29 /1 Full", label: "#29 /1 Full" },
    { value: "Room #30 /1 Full", label: "#30 /1 Full" },
    { value: "Room #31 /1 Full", label: "#31 /1 Full" },
    { value: "Room #32 /2 Full", label: "#32 /2 Full" },
    { value: "Room #33 /1 Full, 1 Twin", label: "#33 /1 Full, 1 Twin" }
];

export default class RoomOptions extends Component {
    state = {
        selectedOption: null,
      };
      handleChange = selectedOption => {
        this.setState(
          { selectedOption },
          () => console.log(`Option selected:`, this.state.selectedOption)
        );
      };
      render() {
        const { selectedOption } = this.state;
    
        return (
          <Select
            value={selectedOption}
            onChange={this.handleChange}
            options={options}
          />
        );
      }
}

