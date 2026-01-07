import { useStore } from "@/hooks/use-store";
import { $counter } from "@/lib/example-states";

export function IncrementButton() {
  const counter = useStore($counter);

  return (
    <button onClick={() => counter.value++}>Increment {counter.value}</button>
  );
}
