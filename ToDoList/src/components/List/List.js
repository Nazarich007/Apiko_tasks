import React, { Component } from 'react';
import './List.css'

class List extends Component{

  confirmTasks = itemList => {
      return (
        <li
          key={itemList.key}
        >
        <span>
        <button className="task">
          <span
          onClick={ e => this.props.doneItem(itemList.key)}
          className={itemList.done? 'done' : 'undone'}
        >{itemList.text}</span>
        </button>
        </span>
        <span>Deadline - {`${itemList.deadline.getMonth() + 1}/${itemList.deadline.getDate()}/${itemList.deadline.getFullYear()}`}
        </span>
        <button 
          onClick={ e => this.props.deleteItem(itemList.key)}
        >Delete</button>
        <span className="created">Created on-{`${itemList.date.getMonth()}/${itemList.date.getDate()}/${itemList.date.getFullYear()} `}</span>
        </li>
    );
  }
        /* {`${itemList.date.getMonth()}/${itemList.date.getDate()}/${itemList.date.getFullYear()} ${itemList.date.getHours()}:${itemList.date.getMinutes()}`} */

  render() {
    const listItemsArr = this.props.listItemsArr;
    const undoneListItems = listItemsArr.filter(listItem => listItem.done === false);
    const doneListItems = listItemsArr.filter(listItem => listItem.done === true);
    const undoneList = undoneListItems.map(this.confirmTasks);
    const doneList = doneListItems.map(this.confirmTasks);
    return (<div>
              <h3>TODOlist</h3>
              <ul>{undoneList}</ul><br/>
              <h3>Done</h3>
              <ul>{doneList}</ul>
            </div>);
  }
}

export default List