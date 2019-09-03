/**
* @desc gets the 'guests' object and returns a string, with handled plural/single words
* @param Object $plural - Object of plural/single of adults,children,infants
* @param Object $guests - Object like : {adults: 1, children: 2, infants: 1}
* @return string - All guests Concatenated with commas and the last with 'and', and managed if it is plural or single.
*/
export const concatGuests = (plural, guests) => {

  // regular expr. that looks for the last occurence of a string ','
  const reg = /(,)(?!.*,)/i

  // corect plural/single form array, e.g ['1 adult', '2 infants', '1 child']
  const guestsInPluralSingle=[];

  for(let key in guests){
    // guest in plural, e.g. adults
    if(guests[key] > 1){
        guestsInPluralSingle.push(`${guests[key]} ${key}`)
      } 
      // guest in singe, e.g. adult
      else if (guests[key] === 1){
        guestsInPluralSingle.push(`${guests[key]} ${plural[key].single}`)
      }
  }
  
  // join the array into a string and replace last ',' with 'and'
  return guestsInPluralSingle.join().replace(reg,' & ');
}
