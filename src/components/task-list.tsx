import { useStore } from "@/hooks/use-store";
import { $tasks } from "@/lib/example-states";

export function TaskList() {
  const tasks = useStore($tasks);

  return (
    <ul>
      {tasks.value.map((task, i) => (
        <li key={i}>{task}</li>
      ))}
    </ul>
  );
}
