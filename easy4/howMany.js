function countOccurrences(vehicles) {
  var occurrences = {};
  for (var i = 0; i < vehicles.length; i++) {
    occurrences[vehicles[i]] = occurrences[vehicles[i]] || 0;
    occurrences[vehicles[i]]++;
  }

  displayOccurrences(occurrences);
}

function displayOccurrences(occurrences) {
  for (var item in occurrences) {
    console.log(item + ' => ' + occurrences[item]);
  }
}