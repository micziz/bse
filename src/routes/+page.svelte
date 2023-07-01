<script lang="ts">
	import { goto } from "$app/navigation";

    let query: string;

    function redirect(){
        goto(`/search?search=${query}`)
    }
</script>

<h1 class="h1">Basketball Search Engine</h1>

<form on:submit|preventDefault={redirect}>
    <input type="text" bind:value={query}>
</form>


<style>
    .h1{
        text-align: center;
    }
</style>