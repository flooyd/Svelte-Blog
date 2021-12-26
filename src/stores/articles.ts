import { writable } from "svelte/store";

export const userArticles = writable([]);
export const userArticlesCount = writable(0);
