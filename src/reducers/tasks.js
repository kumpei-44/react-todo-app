const intialState = {
  tasks: [],
  task: ''
};

export default function tasksReducer(state = intialState, action) {
  console.log('reducer通りました');
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: state.tasks.concat([action.payload.task])
      };
    case 'INPUT_TASK':
      return {
        ...state,
        task: action.payload.task
      };
    default:
      return state;
  }
}