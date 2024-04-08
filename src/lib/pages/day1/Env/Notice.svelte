<script lang="ts" context="module">
	export const id: string = 'env_notice';
	export const name: string = 'もし、、、';
</script>

<template lang="pug">
	.full.flex-center-col
        h2 4.もし、、、
        .spacer
        p もしこのような画像が表示されたらすべてインストールする。
        .spacer
        img.object-cover(class="max-h-[30vw] w-auto",src="/assets/env/notice.png",alt="")
</template>
