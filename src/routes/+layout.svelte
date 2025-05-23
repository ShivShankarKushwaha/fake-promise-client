<script>
	import '../styles/index.css';
	import NavBar from '../components/NavBar.svelte';
</script>

<NavBar />
<slot></slot>
<div class="bg-black pt-20">
	<footer class="mx-auto w-full rounded-xl bg-slate-900 px-4 py-6 text-center text-white shadow-lg">
		<p class="text-sm text-gray-300">
			&copy; 2025 FantaLies. Fulfil of a promise is subjected to point of view of the person, we do not clain any absolute result / decision on a
			promise / statement. All These content are purely for history knowledge of politics.
		</p>
	</footer>
</div>
