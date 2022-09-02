export const isMultiplePets = (arr) => {
  let result = 0
  if (arr.length > 1) {
    result = -0.1
    console.log(`isMultiplePets Result>>`, result)
    return result
  }
  console.log(`isMultiplePets Result>>`, result)
  return result
}

const testArr = [
  1,
]

isMultiplePets(testArr)