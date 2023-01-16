import { defineConfig, UserConfigExport } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// import {tsconfig} from '../challenger-1-app/tsconfig.json'
// console.log(tsconfig)
// SCOPO - AUTO CONFIGURE APP PATHS
interface Paths {
  [k: string]: string[]
}
//interface Path {
//  resolve: (...rest: string[]) => void
//}
//class PathMappingsDecorator {
//  private path: Path
//  private applies: string[]
//
//  constructor(props) {
//    this.path = props.path
//    this.applies = props.applies
//  }
//  decorate(paths: Paths) {
//    
//  }
//  foreverGetFirstPosition(paths: string[]) {
//    return paths[0]
//  }
//  removeIndicatorFiles(key: string) {
//    return key.replace('*/', '')
//  }
//  mountAliasPath(baseURL, appName) {
//    return this.path.resolve(__dirname, '..', appName)
//  }
//}
//new PathMappingsDecorator().decorate(tsconfig.compilerOptions.paths)

function resolveChallenger1Alias(paths: Paths) {
  const baseURL = path.resolve(__dirname, '../challenger-1-app')

  const removeIndicatorFiles = (s: string) => s.replace('/*', '')
  const foreverGetFirstPosition = (paths: string[]) => paths.shift()
  const mountAliasPath = (baseURL: string, pathsMap: string[]) => `${baseURL}/${removeIndicatorFiles(foreverGetFirstPosition(pathsMap))}`

  return Object.entries(paths)
    .reduce((prev, [key, pathMap]) => {
      prev[removeIndicatorFiles(key)] = mountAliasPath(baseURL, pathMap)
      return prev
    }, {})
}

// const alias = resolveChallenger1Alias(tsconfig.compilerOptions.paths)

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5171
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@landing': path.resolve(__dirname, 'src'),
      // ...alias,
      '@challenger-1': path.resolve(__dirname, '../challenger-1/src'),
      '@challenger-2': path.resolve(__dirname, '../challenger-2/src')
    },
  }
} as UserConfigExport)

