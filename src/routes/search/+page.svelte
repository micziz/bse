
<script lang="ts">
    import PlayerSearch from '../../lib/components/PlayerSearch.svelte';
    import type { PageData } from './$types';
    import { goto } from "$app/navigation";

    let query: string;

    function redirect(){
        goto(`/search?search=${query}`)
    }

    export let data: PageData;    
</script>

<h1 class="h1">
    <a href="/">
        Basketball Search Engine
    </a>
</h1>

<div class="form-container">
    <form on:submit|preventDefault={redirect}>
        <input class="form" type="text" bind:value={query}>
    </form>
</div>

{#if data.error}
    <h1 class="h1">There was an error when fetching the search!</h1>
{:else if data.missingQP}
    <h1 class="h1">You did not search anything. Try again!</h1>
{:else}
    <div class="container">
        {#each data.data.data as players}
            <PlayerSearch 
                name={players.first_name} 
                surName={players.last_name} 
                link={`/p/${players.id}`} 
            />
            <br>
            <div class="space"></div>
        {/each}
    </div>
{/if}

<style>
    .h1{
        text-align: center;
    }

    .container{
        text-align: center;
    }

    .space{
        margin-bottom: 1.5rem;
    }

    a {
        text-decoration: none;
        color: inherit;
        font-size: large;
        font-size: larger;
    }

    a:hover{
        color: blue;
    }

    .form-container{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 2rem;
    }

    .form{
        width: 30rem;
        height: 2rem;
        border-radius: 5rem;
        font-size: large;
        border: 1px solid #ccc;
        margin-bottom: 2rem;
    }
</style>