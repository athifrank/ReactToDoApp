import {combineReducers} from 'redux';


const taskReducer=(state=[],action)=>{

	switch(action.type){
		case 'ADD_TASK':
		state=state.concat(action.payload)
		break;
		case 'DELETE_TASK':
		state=state.slice();
		state.splice(action.payload,1);
		break;
		case 'EDIT_TASK':
		 return[
           ...state.filter(task=>task.id !==action.payload.id),
           Object.assign({},action.payload)
		 ];
        break;
		default:
		return state
		break;
	}

	return state;
},
reducers=combineReducers({
	tasks:taskReducer
});

export default reducers;


 // return state.map( (task) => {
 //           return task.key === action.payload.key ? action.payload : task;
 //        })