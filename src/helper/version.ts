import { version } from '../../package.json'

export function getVersion() {
  return version
}

export function upVersion(value = 0.01) {
  return Number(version) + value
}
