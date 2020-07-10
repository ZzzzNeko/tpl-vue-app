import { VueConstructor, DirectiveOptions, DirectiveFunction } from "vue";

interface DirectiveConfig {
  name: string
  handler: DirectiveOptions | DirectiveFunction
}

function loadDirectives(Vue: VueConstructor) {
  const directives: DirectiveConfig[] = []
  directives.forEach(directive => {
    const { name, handler } = directive
    Vue.directive(name, handler)
  })
}

export default loadDirectives;
