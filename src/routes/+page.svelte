<script lang="ts">
	import { goto } from "$app/navigation";

    let query: string;

    function redirect(){
        goto(`/search?search=${query}`)
    }
</script>

<h1 class="h1">Basketball Search Engine</h1>

<div class="form-container">
    <form on:submit|preventDefault={redirect}>
        <input class="form" type="text" bind:value={query}>
    </form>
</div>


<style>
    .h1{
        text-align: center;
        margin-top: 20rem;
    }

    .form-container{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 2rem;
    }

    .form{
        width: 40rem;
        height: 2rem;
        border-radius: 5rem;
        font-size: large;
        border: 1px solid #ccc;
    }
</style>