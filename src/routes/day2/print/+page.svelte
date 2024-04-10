<script lang="ts">
	import Print from '$lib/Print.svelte';
	import Icon from '@iconify/svelte';
	import pages from '$lib/pages/day2';
</script>

<template lang="pug">
Print(pages="{pages}")
</template>
