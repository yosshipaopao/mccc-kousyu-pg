import type { ComponentType, SvelteComponent } from 'svelte';
export type Pages = (
	| { id: string; name: string; default: ComponentType<SvelteComponent> }
	| Pages
)[];