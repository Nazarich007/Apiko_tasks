import React, { Component } from 'react';
import './App.css';
import Menu from '../Menu'
import List from '../List'
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

class App extends Component {
  state = {
    listItems: [],
    listText: { text: '', key: '', date: '', done: false },
    deadline: new Date(),
  }

  textInput = React.createRef();

  addListItem = e => {
    e.preventDefault();
    const newItem = {text: this.state.listText.text, key: this.state.listText.key, date: this.state.listText.date, deadline: this.state.deadline, done: this.state.listText.done};
    if(newItem.text !== '')
      this.setState({listItems: [...this.state.listItems, newItem],
                     listText: { text: '', key: '', date: '', done: false }});
  }

  handleInput = e => {
    const newText = e.target.value;
    this.setState({listText: {text: newText, key: Date.now(), date: new Date(), done: false}});
  }

  doneItem = keyval => {
    const itemsList = this.state.listItems
      .map(itemList => itemList.key !== keyval? itemList : {text: itemList.text, key: itemList.key, date: itemList.date, deadline: itemList.deadline, done: !itemList.done});
    this.setState({listItems: itemsList});
  }

  deleteItem = keyval => {
    const itemsList = this.state.listItems
      .filter(itemList => itemList.key !== keyval);
    this.setState({listItems: itemsList});
  }

  handleDateChange = date => {
    this.setState({deadline: date});
  }

  render() {
    return (
      <div className="App">
        <Menu
          textInput={this.textInput}
          handleInput={this.handleInput}
          addListItem={this.addListItem}
          deadline={this.state.deadline}
          handleDateChange={this.handleDateChange}
        />
        <DatePicker
          selected={this.state.deadline}
          onChange={this.handleDateChange}
        />
        <List
          listItemsArr={this.state.listItems}
          doneItem={this.doneItem}
          deleteItem={this.deleteItem}
          deadline={this.state.deadline}
        />
      </div>
    );
  }
}

export default App;
