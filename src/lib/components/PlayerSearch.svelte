<script lang="ts">
    export let name: string;
    export let surName: string;
    export let link: string;
</script>

<a href={link}>{name} {surName}</a>