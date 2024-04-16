<script lang="ts">
	import type { Pages } from '$lib/pages';

	export let pages: Pages;
</script>

<ul>
	{#each pages as Page}
		<li>
			{#if Page instanceof Array}
				<details>
					<summary>
						{#if !(Page[0] instanceof Array)}
							{Page[0].name}
						{/if}
					</summary>
					<svelte:self pages={Page} />
				</details>
			{:else}
				<a href="#{Page.id}">{Page.name}</a>
			{/if}
		</li>
	{/each}
</ul>
