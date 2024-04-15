import type { Pages } from '$lib/pages';
import * as Title from './Title.svelte';
import * as Serial from './Serial.svelte';
import * as LED_BUILTIN from './LED_BUILTIN.svelte';

export default [Title, Serial,LED_BUILTIN] satisfies Pages;
