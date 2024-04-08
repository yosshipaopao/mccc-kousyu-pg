import type { Pages } from '$lib/pages';
import * as Title from './Title.svelte';
import * as UI from './UI.svelte';
import * as Upload from './Upload.svelte';

export default [Title, UI, Upload] satisfies Pages;
