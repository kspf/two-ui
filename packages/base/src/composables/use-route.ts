import {
  ExtractPropTypes,
  getCurrentInstance,
  ComponentPublicInstance
} from 'vue'
import type { RouteLocation } from 'vue-router'

export const routeProps = {
  to: [String, Object],
  url: String,
  replace: Boolean
}

export type RouteProps = ExtractPropTypes<typeof routeProps>;

export function to (vm: ComponentPublicInstance<RouteLocation>, route: ComponentPublicInstance<RouteProps>) {
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
  return (route: ComponentPublicInstance<RouteProps>) => {
    to(vm, route)
  }
}
