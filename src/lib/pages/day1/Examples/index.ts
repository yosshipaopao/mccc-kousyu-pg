import type { Pages } from '$lib/pages';
import * as Title from './Title.svelte';
import * as Serial from './Serial.svelte';
import * as LED1 from './LED1.svelte';
import * as LED2 from './LED2.svelte';

export default [Title, Serial,LED1,LED2] satisfies Pages;
