export const looseShallowEqual = <T extends object>(
  a: T | undefined,
  b: T | undefined,
) => {
  if (!a || !b) {
    return false
  }
  const keys = Object.keys({ ...a, ...b })
  return keys.every((key) => (a as any)[key] === (b as any)[key])
}
