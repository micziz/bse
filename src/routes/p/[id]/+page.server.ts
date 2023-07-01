import type { PageServerLoad } from './$types';

async function getPlayer(id: string) {
    try {
        const res = await fetch(`https://www.balldontlie.io/api/v1/players/${id}`)
        if (!res.ok){
            throw new Error("Bad Request")
        }
        const playerData = await res.json()
        return playerData
    } catch {
        return {
            error: true
        }
    }
}

export const load = (async ({ params }) => {
    const player = await getPlayer(params.id)

    if (player.error === true){
        return {
            data: null,
            error: true
        }
    }

    return {
        data: player,
        error: false        
    };
}) satisfies PageServerLoad;