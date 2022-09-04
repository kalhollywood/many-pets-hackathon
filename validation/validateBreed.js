import fetch from 'node-fetch'
import * as dotenv from 'dotenv' 
dotenv.config({path: '../.env'})


export const validateBreed = async (species, breed) => {

  const response = await fetch(`https://api.api-ninjas.com/v1/${species}s?name=${breed}`,
    {
      method: 'GET',
      headers: { 'X-Api-Key': process.env.API_KEY_NINJA},
      contentType: 'application/json'
    }
  );

  const data = await response.json();

  console.log(`data >>`, data)
    
  return isValidated(data)

}

export const isValidated = (data)=> Array.isArray(data) && data.length > 0 ? true : false