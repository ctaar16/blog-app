const compareKey = key =>
  (a, b) => {
    if (a[key] < b[key]) {
      return -1
    }
    if (a[key] > b[key]) {
      return 1
    }
    return 0
  }

// one liner
// const compareKey = key => (a, b) => a[key] == b[key]? (a[key] < b[key] ? -1 : 1) : 0

export const titleAZ = arr => arr.sort(compareKey('title'))
export const titleZA = arr => arr.sort(compareKey('title')).reverse()
export const userAZ = arr => arr.sort(compareKey('user'))
export const userZA = arr => arr.sort(compareKey('user')).reverse()