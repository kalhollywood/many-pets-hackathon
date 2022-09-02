const IncreasedAreas = [
  `SE10`,
  `B32`,
  `NW10`
]

const isIncreasedArea = (area) => {
  const result = IncreasedAreas.some((item) => item === area)
  // console.log(`isIncreasedArea >>`, result)
  return result

}

export const calculateIncreaseByArea = (area) => {
  let result = 0
  if (isIncreasedArea(area)) {
    result = 0.15
    // console.log(`calculateIncreaseByArea Result>>`, result)
    return result
  }
  // console.log(`calculateIncreaseByArea Result>>`, result)
  return result
}

calculateIncreaseByArea(`B63`)