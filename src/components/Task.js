import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {deleteTask,editTask} from '../actions/';


class Task extends Component {
	constructor(props){
		super(props);

		this.state={
			isEdit:false,
			value:''
			}		
		this.handleDelete=this.handleDelete.bind(this);
		this.onEditClick=this.onEditClick.bind(this);
		this.onSaveClick=this.onSaveClick.bind(this);
	}

	handleDelete(){
	this.props.deleteSingle.deleteTask(this.props.id)
	}

	onEditClick(key){

		this.setState({isEdit:true,key: key});
	}
	onCancelClick(){
		this.setState({isEdit:false});
	}

	onSaveClick(e){
		e.preventDefault();
		console.log('sample', this.props.tasklist);
		const updateddata =this.props.tasklist.map((list)=>{
			if(list.id===this.state.key){
				list.task=this.refs.editInput.value;
				return list;
			}
			else{
				return list;
			}
		});
		console.log('updateddata', updateddata);
       this.props.editSingle.editTask(updateddata);
       this.setState({isEdit:false});
	}

	renderEditAction(){
	              if(this.state.isEdit){
		        	return(
		                 <input type="text"  ref="editInput" 
		                 defaultValue={this.props.task.task} />
		        		);
		              }
          return(
          <h4>{this.props.task.task}</h4>
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
               <button className="btn btn-info" key={this.props.task.id} 
               onClick={()=>this.onEditClick(this.props.task.id)}>Edit</button>
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
               <td><button className="btn btn-warning">
               <input 
               type="checkbox" 
               onChange={this.props.changeHandler}
               checked={this.props.checked} 
               style={{width:'25px',height:'25px',cursor:'pointer'}} 
               value=""
	           id={this.props.task.id}
               name="delBox"/>
               </button></td>
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

function mapStateToProps(state){
	return{
		tasklist: state.tasks
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Task);




