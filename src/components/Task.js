import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {deleteTask,editTask} from '../actions/';


class Task extends Component {
	constructor(props){
		super(props);

		this.state={
			isEdit:false
		}
		this.handleDelete=this.handleDelete.bind(this);
		this.onEditClick=this.onEditClick.bind(this);
		this.onSaveClick=this.onSaveClick.bind(this);
	}

	handleDelete(){
	this.props.deleteSingle.deleteTask(this.props.id)
	}

	onEditClick(){
		this.setState({isEdit:true});
	}
	onCancelClick(){
		this.setState({isEdit:false});
	}

	onSaveClick(e){
		e.preventDefault();
       this.props.editSingle.editTask(this.refs.editInput.value);
       this.setState({isEdit:false});
	}

	renderEditAction(){
		        if(this.state.isEdit){
		        	return(
		                 <input type="text"  ref="editInput"
		                 defaultValue={this.props.task}/>
		        		);
		              }
          return(
          <h4>{this.props.task}</h4>
          );
	 }


	renderActionSec(){

		if(this.state.isEdit){
			return(
                  <td>
               <button className="btn btn-info"
               onClick={this.onSaveClick}>Save</button>
               <button className="btn btn-danger" 
               onClick={this.onCancelClick}>Cancel</button>
               </td>
				);
				}

				return(
               <td>
               <button className="btn btn-info" onClick={this.onEditClick}>Edit</button>
               <button className="btn btn-danger" 
               onClick={this.handleDelete}>Delete</button>
               </td>
			);
			}

		  render() {
		    return (
		 
               <tr key={this.props.key}>
               <td>{this.renderEditAction()}</td>
               {this.renderActionSec()}
               <td><button className="btn btn-warning"><input type="checkbox"  value=""/></button></td>
               </tr>

     );
  }
}


function mapDispatchToProps(dispatch){
  return{
  	deleteSingle:bindActionCreators({deleteTask},dispatch),
  	editSingle:bindActionCreators({editTask},dispatch)
  } 
}

export default connect(()=>{return{}},mapDispatchToProps)(Task);




