import {
  getCurrentInstance,
  ComponentPublicInstance
} from 'vue'
import type { RouteLocation } from 'vue-router'

interface routeProps {
  to?: string | object,
  url?: string,
  replace?: boolean
}

export function to (vm: ComponentPublicInstance<RouteLocation>, route: routeProps) {
  const router: any = vm.$router
  const { to, url, replace } = route
  if (to && router) {
    router[replace ? 'replace' : 'push'](to)
  } else if (url) {
    replace ? (location.replace(url)) : (location.href = url)
  }
}

export function useRouter () {
  const vm = getCurrentInstance()!.proxy as ComponentPublicInstance<RouteLocation>
  return (route: routeProps) => {
    to(vm, route)
  }
}
