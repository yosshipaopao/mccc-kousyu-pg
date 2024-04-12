<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import Menu from '$lib/Menu.svelte';
	import type {Pages} from '$lib/pages';
	import Icon from '@iconify/svelte';

    export let pages : Pages;

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
			label.btn.btn-circle.btn-outline.btn-primary.drawer-button.fixed.top-3.left-3.p-1(for="drawer")
				Icon.full(icon="ic:outline-menu")
			.item.aspect-video.carousel.carousel-vertical.gap-2
				+each("pages.flat(Infinity) as Page")
					.page(id="{Page.id}")
						<Page.default/>
		.drawer-side
			label.drawer-overlay(for="drawer",aria-label="close sidebar")
			.menu.p-4.w-80.min-h-full.bg-base-200.text-base-content
				Menu(pages="{pages}")
				li.mt-auto
					a(href="/") Home
				li
					a(href="{$page.url.pathname}/print") Print
</template>
