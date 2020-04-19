const intialState = {
  tasks: [],
  task: ''
};

// まずはReducerの生成
// Reducerを通してStoreの値を変更する
export default function tasksReducer(state = intialState, action) {
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