import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {deleteTaskAll} from '../actions/';
import Task from './Task';
import $ from 'jquery';

class Tasklist extends Component {
  constructor(props){
    super(props);
    this.state={
      checked:false
    }
    this.selectAllCheck=this.selectAllCheck.bind(this);
    this.deleteAllTask=this.deleteAllTask.bind(this);
  }
  
  deleteAllTask(e){
    const val=document.getElementsByName('delBox');
    const len=$('input[type="checked"]').value;
     let favorite = [];
            $.each($("input[name='delBox']:checked"),function(){            
                favorite.push($(this).val());
            });

   this.props.deleteAll.deleteTaskAll(favorite)
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
        <th><button style={{cursor:'pointer'}} className="btn btn-default" onClick={this.deleteAllTask}>DeleteAll</button></th>
        <th>{this.state.checked===false ? <button style={{cursor:'pointer'}} className="btn btn-default" 
        onClick={this.selectAllCheck}>SelectAll</button>: <button style={{cursor:'pointer'}} className="btn btn-default" 
        onClick={this.selectAllCheck}>UnSelectAll</button>}</th>
      </tr>
    </thead>
    <tbody>
        {this.props.tasks.map((task,index)=><Task key={index} task={task} 
        checked={this.state.checked} deleteTask={this.deleteAllTask}
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
  return{
     deleteAll:bindActionCreators({deleteTaskAll},dispatch)
  } 
}


export default connect(mapStateToProps,mapDispatchToProps)(Tasklist);
