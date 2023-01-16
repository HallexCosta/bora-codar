import path from 'path'

export interface Paths {
  [k: string]: string[]
}

export function resolveDesafio1Alias(paths: Paths) {
    const baseURL = path.resolve(__dirname, '../desafio-1-app')

    const removeIndicatorFiles = (s: string) => s.replace('/*', '')
    const foreverGetFirstPosition = (paths: string[]) => paths.shift()
    const mountAliasPath = (baseURL: string, pathsMap: string[]) => `${baseURL}/${removeIndicatorFiles(foreverGetFirstPosition(pathsMap))}`

    return Object.entries(paths)
        .reduce((prev, [key, pathMap]) => {
        prev[removeIndicatorFiles(key)] = mountAliasPath(baseURL, pathMap)
        return prev
        }, {})
}
  