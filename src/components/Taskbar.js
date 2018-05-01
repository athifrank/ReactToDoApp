import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addTask} from '../actions/';

class TaskBar extends Component {

  constructor(props){
    super(props);
    this.state={
      title:"",
      count: 0
    }
    this.handleChange=this.handleChange.bind(this);
    this.handleClick=this.handleClick.bind(this);
  }

handleChange(e){
  this.setState({title:e.target.value});
}

handleClick(){
  this.setState({count:this.state.count+1});
  this.props.addTask(this.state.title, (this.state.count));
  this.refs.task.value='';
}

  render() {
    return (
      <div>
      <label htmlFor="task">Create Task:</label>
      <input type="text" className="form-control" ref="task"
      onChange={this.handleChange} placeholder="Enter task" name="task"/>   
      <button className="btn btn-primary" onClick={this.handleClick}>Add Task</button>        
      </div>
    );
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({addTask},dispatch);
}

export default connect(()=>{return{}},mapDispatchToProps)(TaskBar);
