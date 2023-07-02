<script lang="ts">
    export let name: string;
    export let surName: string;
    export let link: string;
</script>

<a class="link" href={link}>{name} {surName}</a>

<style>

    a {
        text-decoration: none;
        color: inherit;
        font-size: large;
    }

    a:hover{
        color: blue;
    }
</style>