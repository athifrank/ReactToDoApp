const addTask=(task)=>{
	return{
		type:'ADD_TASK',
		payload:task
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