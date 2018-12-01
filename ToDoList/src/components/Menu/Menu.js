import React, { Component } from 'react';


class Menu extends Component {
  render(){
    return(
      <div>
        <form onSubmit={this.props.addListItem}>
          <input 
            autoComplete="off"
            name="taskText"
            placeholder="Введіть задачу" 
            ref={this.props.textInput}
            onChange={this.props.handleInput}
          />
          <button
            type="submit"
          > ADD </button>
        </form>
      </div>
    )
  }
}

export default Menu