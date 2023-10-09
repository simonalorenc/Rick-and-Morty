// export interface CharacterResult{
//     results: Character[]
// }

// export interface Character {
//     name: string,
//     gender: string,
//     id: number,
//     image: string,
//     species: string,
//     status: string
// }

export interface CharacterResult {
    info: Info
    results: Character[]
  }
  
  export interface Info {
    count: number
    pages: number
    next: string
    prev: any
  }
  
  export interface Character {
    id: number
    name: string
    status: string
    species: string
    type: string
    gender: string
    image: string
    episode: string[]
    url: string
    created: string
  }
  
  