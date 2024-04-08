import type { ComponentType, SvelteComponent } from 'svelte';
import * as Title from './Title.svelte';
import Env from './Env';
import Usage from './Usage';
import Program from './Program';
import Examples from './Examples';

export default [Title, Env, Usage, Program, Examples] satisfies Pages;

export type Pages = (
	| { id: string; name: string; default: ComponentType<SvelteComponent> }
	| Pages
)[];
