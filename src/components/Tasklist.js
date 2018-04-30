import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {deleteTask} from '../actions/';
import Task from './Task';


class Tasklist extends Component {
  render() {
    return (
      <div>
       <table className="table">
      <thead className="thead-dark">
      <tr>
        <th>Task Name</th>
        <th>Actions</th>
        <th><button style={{cursor:'pointer'}}>DeleteAll</button></th>
      </tr>
    </thead>
    <tbody>
        {this.props.tasks.map((task,index)=><Task key={index} task={task} />)}
    </tbody>
  </table>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    tasks:state.tasks
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({deleteTask},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Tasklist);
