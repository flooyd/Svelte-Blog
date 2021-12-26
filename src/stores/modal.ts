import { writable } from "svelte/store";

export const whichModalIsOpen = writable(null);
export const openedBySystem = writable(false);
