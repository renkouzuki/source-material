"use client";
import { AddTaskButton } from "@/components/add-task";
import { DecrementButton } from "@/components/decrement-button";
import { IncrementButton } from "@/components/increment-button";
import { TaskList } from "@/components/task-list";
import { useStore } from "@/hooks/use-store";
import { $counter } from "@/lib/example-states";

export default function Home() {
  const counter = useStore($counter);

  return (
    <div>
      <p>Count: {counter.value}</p>
      <IncrementButton />
      <DecrementButton />

      <AddTaskButton />
      <TaskList />
    </div>
  );
}
