import React from "react";

//.

class Input extends React.Component {
  render() {
    const { location, handleSearch } = this.props;

    return (
      <input
        type="text"
        placeholder="search location..."
        value={location}
        onChange={handleSearch}
      />
    );
  }
}
export default Input;
