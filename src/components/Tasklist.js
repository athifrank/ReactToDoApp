import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {deleteTask} from '../actions/';
import Task from './Task';


class Tasklist extends Component {
  constructor(props){
    super(props);
    this.state={
      checked:false
    }
    this.selectAllCheck=this.selectAllCheck.bind(this);
    this.changeHandler=this.changeHandler.bind(this);
  }
  
  changeHandler(e){
    const len=e.target.name;
    const id=e.target.id;
    const nBoxes = document.getElementsByName('delBox');
    nBoxes[id].checked=true;
  }

  selectAllCheck(){
   this.setState({checked:!this.state.checked});
  }

  render() {
    return (
      <div>
       <table className="table">
      <thead className="thead-dark">
      <tr>
        <th>Task Name</th>
        <th>Actions</th>
        <th><button style={{cursor:'pointer'}} className="btn btn-default">DeleteAll</button></th>
        <th>{this.state.checked===false ? <button style={{cursor:'pointer'}} className="btn btn-default" 
        onClick={this.selectAllCheck}>SelectAll</button>: <button style={{cursor:'pointer'}} className="btn btn-default" 
        onClick={this.selectAllCheck}>UnSelectAll</button>}</th>
      </tr>
    </thead>
    <tbody>
        {this.props.tasks.map((task,index)=><Task key={index} task={task} 
        checked={this.state.checked} 
        changeHandler={this.changeHandler}
        />)}
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
