/*
Now that you've practiced destructuring, default parameters, and the spread operator,
try reversing the challenge by rewriting this code without using these modern features.
*/

/*
export const getNameAndCountry = ({ name, country }) => [name, country];

export const getRelocatedCity = (
  city1,
  city2 = { name: "Berlin", country: "Germany" }
) => {
  const [, country] = getNameAndCountry(city2);
  return {
    ...city1,
    country,
  };
};
*/

export const getNameAndCountry = (obj) => [obj.name, obj.country];

export const getRelocatedCity = (
  city1,
  city2 = { name: "Berlin", country: "Germany" }
) => {
    let returnObject = {};

    for (let [key, val] of Object.entries(city1)) {
        returnObject[key] = val;
    }
    
    returnObject.country = getNameAndCountry(city2)[1];
    
    return returnObject;
};
