<script lang="ts">
	import Separator from '@components/Separator.svelte';
</script>

<!-- 
<div class="bg-black lg:py-20">
	<Separator />
	<div class="flex min-h-screen w-full flex-col items-center justify-start bg-black lg:py-20 py-10">
		<h1 class="lg:text-6xl text-xl font-bold text-primary">What We Do</h1>
		<div class="lg:mt-20 mt-5 flex flex-col lg:flex-row w-full items-center justify-around gap-10 lg:gap-0 xl:w-5/6">
			<div
				class="flex lg:h-[20rem] lg:w-[30%] w-4/5 flex-col items-center justify-start gap-10 px-5 py-10 font-mono text-slate-300 shadow-inner shadow-slate-400 text-center lg:text-start"
			>
				<h1 class="lg:text-2xl font-bold capitalize text-primary text-lg text-center">Set the progress</h1>
				<p class="text-sm lg:text-base">
					We track every big promise, from grand plans to small pledges. Our progress bars show you exactly how much (or how little) has been done. We
					celebrate the steps forward and highlight when a promise seems to have vanished into thin air.
				</p>
			</div>

			<div
				class="flex lg:h-[20rem] lg:w-[30%] w-4/5 flex-col items-center justify-start gap-10 px-5 py-10 font-mono text-slate-300 shadow-inner shadow-slate-400"
			>
				<h1 class="text-lg lg:text-2xl capitalize text-primary font-bold text-center">Praise the Keepers</h1>
				<p class="text-sm lg:text-base">
					It's not all doom and gloom! We give a big shout-out to the rare politicians who actually deliver on their word. They're like political
					unicorns - hard to find, but we'll try to spot them and give them the credit they deserve (for now).
				</p>
			</div>

			<div
				class="flex lg:h-[20rem] lg:w-[30%] w-4/5 flex-col items-center justify-start gap-10 px-5 py-10 font-mono text-slate-300 shadow-inner shadow-slate-400"
			>
				<h1 class="text-lg lg:text-2xl capitalize text-primary font-bold text-center">Spot the Tall Tales</h1>
				<p class="text-sm lg:text-base">
					Some promises are simply too good (or too ridiculous) to be true. We love to point out the wild claims, the impossible dreams, and the
					pledges that sound like they came straight from a cartoon. It's all in good fun, mostly.
				</p>
			</div>
		</div>
		<div class="lg:mt-20 mt-10 flex w-full flex-col lg:flex-row items-center justify-around gap-10 lg:gap-0 text-center lg:text-start xl:w-5/6">
			<div
				class="flex lg:h-[20rem] lg:w-[30%] w-4/5 flex-col items-center justify-start gap-10 px-5 py-10 font-mono text-slate-300 shadow-inner shadow-slate-400"
			>
				<h1 class="text-lg lg:text-2xl font-bold capitalize text-primary text-center">Your Voice Matters</h1>
				<p class="text-sm lg:text-base">
					We welcome your reviews and comments on how well (or badly) promises are being kept. Join the discussion and share your take on political
					accountability!
				</p>
			</div>

			<div
				class="flex lg:h-[20rem] lg:w-[30%] w-4/5 flex-col items-center justify-start gap-10 px-5 py-10 font-mono text-slate-300 shadow-inner shadow-slate-400"
			>
				<h1 class="text-lg lg:text-2xl capitalize text-primary font-bold">Manifesto Vault</h1>
				<p class="text-sm lg:text-base">
					Explore our archives of past election promises, sorted by party and year. Compare what was said then to what's happening now - it's quite
					the journey!
				</p>
			</div>

			<div
				class="flex lg:h-[20rem] lg:w-[30%] w-4/5 flex-col items-center justify-start gap-10 px-5 py-10 font-mono text-slate-300 shadow-inner shadow-slate-400"
			>
				<h1 class="text-lg lg:text-2xl capitalize text-primary font-bold">Speeches & Broadcasts (Future Fun!)</h1>
				<p class="text-sm lg:text-base">
					Coming soon: we'll dive into political speeches and broadcasts. Get ready to analyze the grand words, the fancy delivery, and how they stack
					up against reality.
				</p>
			</div>
		</div>
	</div>
	<Separator />
</div> -->
<div class="bg-black lg:py-20">
	<Separator />
	<div class="flex min-h-screen w-full flex-col items-center justify-start bg-black px-5 py-10 lg:py-20">
		<h1 class="text-xl font-bold text-primary lg:text-6xl">What We Do</h1>
		<div class="mt-5 flex w-full flex-wrap justify-center gap-10 lg:mt-20 xl:w-5/6">
			<div
				class="flex min-h-[20rem] max-w-sm flex-shrink-0 flex-grow basis-80 flex-col items-center justify-start gap-10 px-5 py-10
                text-center font-mono text-slate-300 shadow-inner shadow-slate-400 md:basis-[calc(50%-20px)] lg:basis-[calc(33.333%-27px)]"
			>
				<h1 class="text-center text-lg font-bold capitalize text-primary lg:text-2xl">Set the progress</h1>
				<p class="text-sm lg:text-base">
					We track every big promise, from grand plans to small pledges. Our progress bars show you exactly how much (or how little) has been done. We
					celebrate the steps forward and highlight when a promise seems to have vanished into thin air.
				</p>
			</div>

			<div
				class="flex min-h-[20rem] max-w-sm flex-shrink-0 flex-grow basis-80 flex-col items-center justify-start gap-10 px-5 py-10
                text-center font-mono text-slate-300 shadow-inner shadow-slate-400 md:basis-[calc(50%-20px)] lg:basis-[calc(33.333%-27px)]"
			>
				<h1 class="text-center text-lg font-bold capitalize text-primary lg:text-2xl">Praise the Keepers</h1>
				<p class="text-sm lg:text-base">
					It's not all doom and gloom! We give a big shout-out to the rare politicians who actually deliver on their word. They're like political
					unicorns - hard to find, but we'll try to spot them and give them the credit they deserve (for now).
				</p>
			</div>

			<div
				class="flex min-h-[20rem] max-w-sm flex-shrink-0 flex-grow basis-80 flex-col items-center justify-start gap-10 px-5 py-10
                text-center font-mono text-slate-300 shadow-inner shadow-slate-400 md:basis-[calc(50%-20px)] lg:basis-[calc(33.333%-27px)]"
			>
				<h1 class="text-center text-lg font-bold capitalize text-primary lg:text-2xl">Spot the Tall Tales</h1>
				<p class="text-sm lg:text-base">
					Some promises are simply too good (or too ridiculous) to be true. We love to point out the wild claims, the impossible dreams, and the
					pledges that sound like they came straight from a cartoon. It's all in good fun, mostly.
				</p>
			</div>

			<div
				class="flex min-h-[20rem] max-w-sm flex-shrink-0 flex-grow basis-80 flex-col items-center justify-start gap-10 px-5 py-10
                text-center font-mono text-slate-300 shadow-inner shadow-slate-400 md:basis-[calc(50%-20px)] lg:basis-[calc(33.333%-27px)]"
			>
				<h1 class="text-center text-lg font-bold capitalize text-primary lg:text-2xl">Your Voice Matters</h1>
				<p class="text-sm lg:text-base">
					We welcome your reviews and comments on how well (or badly) promises are being kept. Join the discussion and share your take on political
					accountability!
				</p>
			</div>

			<div
				class="flex min-h-[20rem] max-w-sm flex-shrink-0 flex-grow basis-80 flex-col items-center justify-start gap-10 px-5 py-10
                text-center font-mono text-slate-300 shadow-inner shadow-slate-400 md:basis-[calc(50%-20px)] lg:basis-[calc(33.333%-27px)]"
			>
				<h1 class="text-lg font-bold capitalize text-primary lg:text-2xl">Manifesto Vault</h1>
				<p class="text-sm lg:text-base">
					Explore our archives of past election promises, sorted by party and year. Compare what was said then to what's happening now - it's quite
					the journey!
				</p>
			</div>

			<div
				class="flex min-h-[20rem] max-w-sm flex-shrink-0 flex-grow basis-80 flex-col items-center justify-start gap-10 px-5 py-10
                text-center font-mono text-slate-300 shadow-inner shadow-slate-400 md:basis-[calc(50%-20px)] lg:basis-[calc(33.333%-27px)]"
			>
				<h1 class="text-lg font-bold capitalize text-primary lg:text-2xl">Speeches & Broadcasts (Future Fun!)</h1>
				<p class="text-sm lg:text-base">
					Coming soon: we'll dive into political speeches and broadcasts. Get ready to analyze the grand words, the fancy delivery, and how they stack
					up against reality.
				</p>
			</div>
		</div>
	</div>
	<Separator />
</div>
