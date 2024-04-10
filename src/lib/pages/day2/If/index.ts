import type { Pages } from '$lib/pages';
import * as Title from './Title.svelte';
import * as If from './If.svelte';
import * as Switch from './Switch.svelte';
import * as LogicalOP from './LogicalOP.svelte';
import * as LogicalOP2 from './LogicalOP2.svelte';

export default [Title,If,Switch,LogicalOP,LogicalOP2] satisfies Pages;
