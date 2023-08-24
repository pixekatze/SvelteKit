<script lang="ts">
	import { user, auth } from "$lib/firebase";

	import { GoogleAuthProvider, signInWithPopup, signOut, getAuth } from "firebase/auth";

	async function signInWithGoogle() {
		const provider = new GoogleAuthProvider();
		const user = await signInWithPopup(auth, provider);
		console.log(user);
	}
</script>

{#if $user}
	<h2 class="card-title mb-6">Welcome, {$user.displayName}</h2>

	<button class="btn" on:click={() => signOut(auth)}>Sign out</button>
	<button class="btn btn-circle btn-outline mt-7">
		<svg class="h-6 w-6 fill-current md:h-8 md:w-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
			><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg
		>
	</button>
{:else}
	<h2 class="card-title mb-6">Sign In</h2>
	<button class="btn btn-primary" on:click={signInWithGoogle}>Sign in with Google</button>
{/if}
