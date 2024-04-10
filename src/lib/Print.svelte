<script lang="ts">
	import Icon from '@iconify/svelte';
	import type {Pages} from '$lib/pages';
	export let pages : Pages;
</script>

<template lang="pug">
    +each("pages.flat(Infinity) as Page")
        .all-page(id="{Page.id}")
            <Page.default/>
</template>
