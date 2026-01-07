"use client";
import { Store } from "@/lib/store";
import { useEffect, useState } from "react";

export function useStore<T>(store: Store<T>) {
  const [_, setRevision] = useState(0);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setRevision((revision) => revision + 1);
    });

    return unsubscribe;
  });

  return {
    get value() {
      return store.get();
    },
    set value(newState: T) {
      store.set(newState);
    },
  };
}
