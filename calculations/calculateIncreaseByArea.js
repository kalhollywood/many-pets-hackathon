export const IncreasedAreas = [
  `SE10`,
  `B32`,
  `NW10`
]

const isIncreasedArea = (area) => {
  const result = IncreasedAreas.some((item) => item === area)
  return result

}

export const calculateIncreaseByArea = (area) => {
  let result = 0
  if (isIncreasedArea(area)) {
    result = 0.15
    return result
  }
  return result
}