<script lang="ts">
	import { ChevronDown } from '@lucide/svelte';
</script>

<nav class=" absolute top-5 ml-[10%] w-4/5">
	<div class="mx-auto flex h-full w-full items-center justify-between rounded-2xl bg-black/50 px-10 text-white">
		<div class="logo size-20 scale-[2.5] rounded-full">
			<img src="/assets/logo.png" alt="logo" />
		</div>
		<div class="hidden items-center justify-center gap-10 lg:flex">
			<p>Promises</p>
			<p>Menifesto</p>
			<p>About</p>
			<p>Donate</p>
		</div>
		<div class="hidden cursor-pointer gap-2 border-[1px] border-slate-100/50 p-2 px-4 lg:flex">
			🇺🇸 <ChevronDown />
		</div>
	</div>
</nav>
