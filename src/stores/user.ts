import { writable } from "svelte/store";

export const loggedIn = writable(false);
export const user = writable({
  username: "",
  email: "",
});
