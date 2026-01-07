import { useStore } from "@/hooks/use-store";
import { $tasks } from "@/lib/example-states";

export function AddTaskButton() {
  const tasks = useStore($tasks);

  const addTask = () => {
    tasks.value = [...tasks.value, `Task ${tasks.value.length + 1}`];
  };

  return <button onClick={addTask}>Add Task</button>;
}
