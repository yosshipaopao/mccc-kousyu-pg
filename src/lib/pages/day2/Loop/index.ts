import type { Pages } from '$lib/pages';
import * as Title from './Title.svelte';
import * as For from './For.svelte';
import * as While from './While.svelte';

export default [Title,For,While] satisfies Pages;
