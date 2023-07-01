import type { PageServerLoad } from './$types';

async function getPlayers(query: string) {
    try {
        const res = await fetch(`https://www.balldontlie.io/api/v1/players?search=${query}`)
        if (!res.ok){
            throw new Error("Bad Request")
        }
        const players = await res.json()
        return players
    } catch {
        return {
            error: true
        }
    }
}

export const load = (async (req) => {
    const query = req.url.searchParams.get("search")

    if (query === null){
        return {
            data: null,
            missingQP: true
        }
    }

    const players = await getPlayers(query)

    if (players.error == true){
        return {
            data: null,
            error: false
        }
    }

    return {
        data: players,
        error: false
    }

}) satisfies PageServerLoad;