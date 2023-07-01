<script lang="ts">
    import type { PageData } from './$types';

    export let data: PageData;

    const firstName: string = data.data.first_name
    const lastName: string = data.data.last_name

    const nameToUseInImgUrl = lastName.toLowerCase().slice(0, 5) + firstName.toLowerCase().slice(0, 2)
    const imgUrl = `https://www.basketball-reference.com/req/202106291/images/headshots/${nameToUseInImgUrl}01.jpg`

    const teamShortName: string = data.data.team.abbreviation
    const teamUrl = `https://cdn.ssref.net/req/202306191/tlogo/bbr/${teamShortName}.png`
    console.log(data.data)

    
</script>

{#if data.error}
    <h1>There was an error when fetching the player!</h1>
{:else}
    <div class="container">
        <div class="playerData">
            <h1 class="firstName">{data.data.first_name}</h1>
            <h1 class="secondName">{data.data.last_name}</h1>
        </div>
        <img class="image" src={imgUrl} alt={data.data.first_name}>
    </div>
    <h2 class="h1">Team</h2>
    <div class="images">
        <img src={teamUrl} alt={data.data.team.full_name}>
    </div>
    <h2 class="h1">Position: {data.data.position}</h2>
{/if}

<style>
    .container{
        display: grid;
        grid-template-columns: auto auto;
    }
    .playerData{
        display: grid;
        grid-template-rows: auto auto;
        gap: 0;
        margin-right: 4rem;
    }

    .firstName{
        place-self: end;
    }
    
    .secondName{
        place-self: end;
    }


    .h1{
        text-align: center;
    }
    
    .images{
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>