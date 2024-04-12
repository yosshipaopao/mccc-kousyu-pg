import type { Pages } from '$lib/pages';
import * as Title from './Title.svelte';
import Library from './Library';
import CompileIf from './CompileIf';
import Class from './Class';

export default [Title,Library,CompileIf,Class] satisfies Pages;

