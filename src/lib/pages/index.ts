import type { ComponentType, SvelteComponent } from 'svelte';
export type Page = { id: string; name: string; default: ComponentType<SvelteComponent> };
export type Pages = (Page| Pages)[];
