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
},
deleteTaskAll=(taskId)=>{

	return{
		type:'DELETE_TASK_ALL',
		payload:taskId
	}
}

export {addTask,deleteTask,editTask,deleteTaskAll};