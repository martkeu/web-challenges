export function getAnimal(animals) {
  if (animals === undefined) {
    return "I do not like animals at all!";
  }
   
   if (animals === "cats") {
    return "I totally love cats!";
  }
   
   return `I like ${animals}!`;
}
