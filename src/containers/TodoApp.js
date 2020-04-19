import {connect} from 'react-redux';
import TodoApp from '../components/TodoApp';
import {inputTask, addTask} from '../actions/tasks';

// Storeにあるtask,tasksというStateをPropsに渡す
function mapStateToProps({task, tasks}) {
  return {
    task,
    tasks
  };
}

// ActionをDispatchさせる関数をPropsに渡す
function maspDispatchToProps(dispatch) {
  return {
    addTask(task) {
      dispatch(addTask(task));
    },
    inputTask(task) {
      dispatch(inputTask(task));
    }
  };
}

export default connect(mapStateToProps, maspDispatchToProps)(TodoApp);