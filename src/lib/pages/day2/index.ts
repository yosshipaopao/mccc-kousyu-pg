import type { Pages } from '$lib/pages';
import * as Title from './Title.svelte';
import  Types from './Types';
import If from './If';
import Loop from './Loop';
import Fn from './Fn';
import Class from './Class';
import CompileIf from './CompileIf';
import Try from './Try';

export default [Title,Types,If,Loop,Fn,Class,CompileIf,Try] satisfies Pages;

