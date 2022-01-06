import { writable } from "svelte/store";

export const currentScreen = writable("home");
export const history = writable([]);
