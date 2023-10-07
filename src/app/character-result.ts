export interface CharacterResult{
    results: Character[]
}

export interface Character {
    name: string,
    gender: string,
    id: number,
    image: string,
    species: string,
    status: string
}