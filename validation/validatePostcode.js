import fetch from 'node-fetch'


export const validatePostcode = async (postcode) => {

  const response = await fetch(`https://api.postcodes.io/postcodes/${postcode}`);

  const data = await response.json();
  
  // console.log(`validatePostcode data >>`, data)

  // console.log(`validatePostcode return value >>`, isPostcodeValidated(data))

  return isPostcodeValidated(data)

}

export const isPostcodeValidated = (data)=> {
  return data.status === 200 ? true : false
  
}

// validatePostcode(`b633dp`)