<script lang="ts">
	interface PromiseCardProps {
		title: string;
		subtitle: string;
		result: string;
		statusPercentage: number;
		statusText: string;
	}

	const { title, subtitle, result, statusPercentage, statusText }: PromiseCardProps = $props();
</script>

<div
	class="group flex min-h-[20rem] max-w-md flex-shrink-0 flex-grow basis-80 flex-col items-center justify-start gap-10 px-5 py-10 text-center
                font-mono text-slate-300 shadow-inner shadow-slate-400 hover:cursor-pointer md:basis-[calc(50%-20px)] lg:basis-[calc(33.333%-27px)]"
>
	<h3 class="mb-2 text-2xl font-bold text-[#4e769e] group-hover:underline">{title}</h3>
	<p class="mb-4 text-sm italic text-gray-400">{subtitle}</p>

	<div class="mb-4 flex-grow">
		<p class="mb-2 text-gray-500">{result}</p>
	</div>

	<div class="mb-2 h-4 w-full overflow-hidden rounded-full bg-gray-700">
		<div
			class="h-full rounded-full"
			style="width: {statusPercentage}%; background-color: {statusPercentage < 20 ? '#CC0000' : statusPercentage < 50 ? '#FF6347' : '#FFD700'};"
		></div>
	</div>
	<p class="text-sm text-gray-500">Status: {statusText}</p>
</div>
