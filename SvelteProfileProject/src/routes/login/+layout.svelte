<script lang="ts">
	import { page } from "$app/stores";
	import AnimatedRoute from "$lib/components/AnimatedRoute.svelte";
</script>

<nav class="flex justify-center my-8">
	<ul class="steps">
		<a href="/login" class="step step-primary">Sign In</a>
		<a href="/login/username" class="step" class:step-primary={$page.route.id?.match(/username|photo/g)}> Choose Username </a>
		<a href="/login/photo" class="step" class:step-primary={$page.route.id?.includes("photo")}> Upload Photo </a>
	</ul>
</nav>

<!-- <AnimatedRoute> -->
<main class="card w-1/3 bg-neutral text-neutral-content mx-auto min-w-[400px] pt-5 min-h-[215px]">
	<div class="card-body items-center content-start text-center">
		<slot />
	</div>
</main>
<!-- </AnimatedRoute> -->
