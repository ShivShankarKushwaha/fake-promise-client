<script lang="ts">
	import Saos from 'saos';
	import { homepagePromiseData } from '@data/homepagePromise';
	import PromiseCard from '@components/PromiseCard.svelte';
	import WhatWeDo from '@components/whatWeDo.svelte';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	let swapAnimation = $state(false);
	onMount(() => {
		setTimeout(() => {
			swapAnimation = true;
		}, 0);
	});
</script>

<svelte:head>
	<title>Political Promises Tracker - Satirical Look at Grand Pledges</title>
	<meta
		name="description"
		content="Track and laugh at the grand, unachievable promises made by politicians. Explore hilarious outcomes and question everything with our satirical promise tracker."
	/>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta property="og:title" content="Political Promises Tracker" />
	<meta property="og:description" content="A satirical tracker for political promises and their hilarious outcomes." />
	<meta property="og:image" content="/assets/politician.png" />
	<meta property="og:type" content="website" />
</svelte:head>

<main>
	<div class="flex h-full min-h-screen w-full overflow-hidden bg-gradient-to-tr from-black from-60% via-blue-950 via-70% to-black to-80% pb-10 pt-40">
		<div class="flex h-full w-full flex-col items-center justify-center">
			<div class="flex w-full flex-row items-center justify-center gap-10 transition-all duration-1000 lg:flex-row lg:justify-between">
				<div class="manga-thought-cloud relative -right-10">
					<p class="font-mono text-xl text-primary sm:text-2xl lg:w-3/4 lg:text-6xl">
						&ldquo;Free flying cars for everyone by next <span class="text-satire">election</span>!&rdquo;
					</p>
				</div>
				<div class="relative -left-10 -top-14 min-h-40 min-w-40 scale-125 overflow-visible lg:w-1/4 lg:scale-[1.5]">
					{#if swapAnimation}
						<img
							class=""
							transition:fly={{ x: -1000, duration: 1500 }}
							src="/assets/politician.png"
							alt="Cartoon of a politician making a grand promise"
							width="320"
							height="320"
							loading="lazy"
						/>
					{/if}
				</div>
			</div>
			<div class="my-10 w-4/5 px-5 text-center font-mono text-base font-bold capitalize text-slate-300 lg:w-2/3 lg:px-10 lg:text-start">
				<p>
					<span class="text-base font-bold uppercase text-satire">Political promises</span> go to die (or never truly live). <br />
					We hilariously track the grand, unachievable pledges of politicians. <br />
					Prepare to laugh, sigh, and question everything.
				</p>
			</div>
			<nav
				aria-label="Main actions"
				class="flex w-full flex-col items-center justify-center gap-10 pt-5 text-sm lg:flex-row lg:justify-start lg:pl-40 lg:text-base"
			>
				<button class="w-4/5 rounded-xl bg-satire p-4 px-6 uppercase text-white lg:w-fit" aria-label="Explore the grand delusion">
					Explore the grand delusion
				</button>
				<button class="w-4/5 rounded-xl bg-primary p-4 px-6 uppercase text-white lg:w-fit" aria-label="See the promises"> See the PROMISES </button>
			</nav>
		</div>
	</div>
	<section aria-labelledby="what-we-do">
		<WhatWeDo />
	</section>
	<div class="h-full w-full bg-black">
		<section
			class="mx-auto flex w-4/5 flex-col items-center justify-center bg-black py-20 text-white lg:py-8"
			aria-labelledby="grand-promises-heading"
		>
			<h2 id="grand-promises-heading" class="mb-10 text-center text-xl font-bold text-satire lg:text-3xl">
				<span class="text-xl text-satire lg:text-6xl"> Some Grand Promises <br /> and </span>
				<br /> Their Hilarious Outcomes
			</h2>
			<Saos animation={'from-left 1s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
				<div class="mx-auto mt-5 flex w-full flex-wrap justify-center gap-10 lg:mt-20 xl:w-5/6">
					{#each homepagePromiseData.slice(0, 12) as promise (promise.title)}
						<PromiseCard
							title={promise.title}
							subtitle={promise.subtitle}
							result={promise.result}
							statusPercentage={promise.statusPercentage}
							statusText={promise.statusText}
							aria-label={`Promise: ${promise.title}`}
						/>
					{/each}
				</div>
			</Saos>
		</section>
	</div>
</main>
