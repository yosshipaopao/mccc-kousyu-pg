import type { Pages } from '$lib/pages';

import * as Title from './Title.svelte';
import * as Install from './Install.svelte';
import * as Include from './Inc.svelte';
import * as Use from './Use.svelte';

export default [Title, Install,Include,Use] satisfies Pages;
