import { get } from './API'

const baseUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

export function GetWordDefinitions(word: string) {
    return get(baseUrl + word)
}