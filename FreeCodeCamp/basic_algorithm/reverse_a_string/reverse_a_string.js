function reverseString(str) {
  //split string into an array
  //the string is split with argument ''
  //this results in an array of single characters from the string including spaces
  return str.split('')
  //.reverse() reverses the entire array.
  .reverse()
  //.join() is used with '' argument to join the array back into a reverseString
  //using '' as an argument joins the string as is without added characters between each letter
  .join('');
}
