import { writable } from "svelte/store";

export const articleTitleValue = writable("");
export const articleValue = writable("");
export const articleTagsValue = writable("");

export const viewArticle = writable<any | null>(null);
