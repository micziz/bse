
<script lang="ts">
    import PlayerSearch from '../../lib/components/PlayerSearch.svelte';
    import type { PageData } from './$types';



    export let data: PageData;    
</script>

<h1>Search</h1>

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
</style>