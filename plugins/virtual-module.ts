import { Plugin, ResolvedConfig } from 'vite'

const virtualModuleId = 'virtual:my-module'
const resolvedVirtualModuleId = '\0' + virtualModuleId
const virtualEnvModuleId = 'virtual:env'
const resolvedEnvVirtualModuleId = '\0' + virtualEnvModuleId

function myPlugin(): Plugin {
  let config: ResolvedConfig | null = null

  return {
    name: 'my-plugin',
    configResolved(c: ResolvedConfig) {
      config = c
    },
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId
      }
      if (id === virtualEnvModuleId) {
        return resolvedEnvVirtualModuleId
      }
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        return `export const msg = "from virtual module"`
      }
      if (id === resolvedEnvVirtualModuleId) {
        return `export default ${JSON.stringify(config!.env)}`
      }
    }
  }
}
export default myPlugin
