export const discountedBreeds = [
  `alsatian`,
  `poodle`,
  `shih tzu`
]

const isDiscountedBreed = (breed) => {
  const result = discountedBreeds.some((item) => item === breed)
  return result
}

export const calculateDiscountByBreed = (breed) => {
  let result = 0
  if (isDiscountedBreed(breed)) {
    result = -0.1
    return result
  }
  return result
}
