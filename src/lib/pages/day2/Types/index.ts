import type { Pages } from '$lib/pages';
import * as Title from './Title.svelte';
import * as Number from './Numbers.svelte';
import * as Others from './Others.svelte';
import * as Array from './Array.svelte'

export default [Title,Number,Others,Array] satisfies Pages;
