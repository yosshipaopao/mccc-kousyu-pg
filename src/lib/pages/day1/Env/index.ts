import type { Pages } from '$lib/pages';

import * as Title from './Title.svelte';
import * as Download from './Download.svelte';
import * as Install from './Install.svelte';
import * as Run from './Run.svelte';
import * as Notice from './Notice.svelte';

export default [Title, Download, Install, Run, Notice] satisfies Pages;
