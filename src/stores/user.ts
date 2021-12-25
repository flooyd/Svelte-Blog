import { writable } from "svelte/store";

export const user = writable({
  username: "",
  email: "",
  token: "",
  bio: "",
  id: null,
});
