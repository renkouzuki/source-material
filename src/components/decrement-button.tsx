import { useStore } from "@/hooks/use-store";
import { $counter } from "@/lib/example-states";

export function DecrementButton() {
  const counter = useStore($counter);

  return (
    <button onClick={() => counter.value--}>Decrement {counter.value}</button>
  );
}
