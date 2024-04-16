<script lang="ts">
	import type {Pages,Page} from '$lib/pages';
	export let pages : Pages;

    let current_page = 0;

    // @ts-ignore
    const flatPage = pages.flat(Infinity) as Page[];

    const increment = () => current_page = (current_page+1)%flatPage.length;
    const decrement = () => current_page = (current_page-1+flatPage.length)%flatPage.length;
</script>
<svelte:body on:click={increment}
    on:keydown={(e)=>{
        if(e.key == 'ArrowRight'){
            increment();
        }else if(e.key == 'ArrowLeft'){
            decrement();
        }else if(e.key == 'ArrowUp'){
            decrement();
        }else if(e.key == 'ArrowDown'){
            increment();
        }else if(e.key == ' '){
            increment();
        }else if(e.key == 'Enter'){
            increment();
        }else if(e.key == 'Backspace'){
            decrement();
        }
    }}
    />
<div class="all-page">
    {#each flatPage as P,i}
        {#if i == current_page}
            <P.default/>
        {/if}
    {/each}
</div>
