const addTask=(task,count)=>{
	console.log('count',count);
	return{
		type:'ADD_TASK',
		payload: {id:count, task: task}
	}
},
deleteTask=(taskId)=>{
	return{
		type:'DELETE_TASK',
		payload:taskId
	}
},
editTask=(taskName)=>{

	return{
		type:'EDIT_TASK',
		payload:taskName
	}
}

export {addTask,deleteTask,editTask};