import type { Pages } from '$lib/pages';
import * as Title from './Title.svelte';
import Env from './Env';
import Usage from './Usage';
import Program from './Program';
import Library from './Library';
import Examples from './Examples';

export default [Title, Env, Usage, Program,Library , Examples] satisfies Pages;

