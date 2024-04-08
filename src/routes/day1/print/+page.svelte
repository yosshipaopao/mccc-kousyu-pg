<script lang="ts">
	import Icon from '@iconify/svelte';
	import pages from '$lib/pages/day1';
</script>

<template lang="pug">
    +each("pages.flat(Infinity) as Page")
        .all-page(id="{Page.id}")
            <Page.default/>
</template>
