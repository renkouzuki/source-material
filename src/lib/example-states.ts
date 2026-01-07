import { Store } from "./store";

export const $counter = new Store(0)
export const $tasks = new Store<string[]>([]);