<script lang="ts">
	import { onMount } from 'svelte';
	import Menu from '$lib/Menu.svelte';
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';
	import pages from '$lib/pages/day1';

	onMount(() => {
		// scroll to the data.hash
		if ($page.url.hash) {
			const el = document.getElementById($page.url.hash);
			if (el) {
				el.scrollIntoView({ behavior: 'smooth' });
			}
		}
	});
</script>

<template lang="pug">
	.drawer
		input.drawer-toggle(id="drawer",type="checkbox")
		.drawer-content.w-screen.h-screen.flex-center-col.bg-base-300
			label.btn.btn-circle.btn-outline.btn-primary.drawer-button.fixed.top-4.left-4.p-2(for="drawer")
				Icon.full(icon="ic:outline-menu")
			.max-w-screen.max-h-screen.aspect-video.carousel.carousel-vertical.gap-2
				+each("pages.flat(Infinity) as Page")
					.page(id="{Page.id}")
						<Page.default/>
		.drawer-side
			label.drawer-overlay(for="drawer",aria-label="close sidebar")
			.menu.p-4.w-80.min-h-full.bg-base-200.text-base-content
				Menu(pages="{pages}")
				li.mt-auto
					a(href="/day1/print") Print
</template>
