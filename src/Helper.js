// Example usage:
// const newObject = omitKeysFromObj(['password', 'photo'], object)
export const omitKeysFromObj = (keysToOmit, originalObj = {}) =>
  Object.fromEntries(
    Object.entries(originalObj).filter(([key]) => !keysToOmit.includes(key)),
  )
