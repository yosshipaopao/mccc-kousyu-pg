import type { Pages } from '$lib/pages';
import * as Title from './Title.svelte';
import * as Template from './Template.svelte';
import * as Serial from './Serial.svelte';
import * as Basics from './Basics.svelte';
import * as Digital from './Digital.svelte';
import * as Analog from './Analog.svelte';

export default [Title, Template, Serial, Basics, Digital, Analog] satisfies Pages;
