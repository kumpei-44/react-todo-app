import React from 'react';

// reduxのみの場合、Store自体がPropsに渡りそこからStateを取得していた
// react-reduxの場合、containersから整形されたオブジェクトがPropsに渡っている
// コンポーネントのRedux依存が消えて、再利用率が高まった
export default function TodoApp({task, tasks, addTask, inputTask}) {
  return (
    <div>
      <input type="text" onChange={(e) => inputTask(e.target.value)} />
      <input type="button" value="add" onClick={() => addTask(task)} />
      <ul>
        {
          tasks.map(function(item, i) {
            return (
              <li key={i}>{item}</li>
            );
          })
        }
      </ul>
    </div>
  );
}