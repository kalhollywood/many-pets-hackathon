const discountedBreeds = [
  `alsatian`,
  `poodle`,
  `shih tzu`
]

const isDiscountedBreed = (breed) => {
  const result = discountedBreeds.some((item) => item === breed)
  console.log(`isDiscountedBreed >>`, result)
  return result

}

// console.log(`isDiscountedBreed`);
// isDiscountedBreed(`poodle`)

export const calculateDiscountByBreed = (breed) => {
  let result = 0
  if (isDiscountedBreed(breed)) {
    result = -0.1
    console.log(`isDiscountedBreed Result>>`, result)
    return result
  }
  console.log(`isDiscountedBreed Result>>`, result)
  return result
}

calculateDiscountByBreed(`cat`)