function filterEntries() {
  // Get user input from search bar
  var input = document.getElementById("searchBar").value.toUpperCase();
  // Get list of entries
  var entries = document.getElementById("entryList").getElementsByTagName("li");

  // Loop through entries to find matches
  for (var i = 0; i < entries.length; i++) {
    var entry = entries[i];
    var name = entry.getElementsByClassName("bestiary-item-text")[0].getElementsByTagName("h3")[0].textContent.toUpperCase();
    var description = entry.getElementsByClassName("bestiary-item-text")[0].getElementsByTagName("p")[0].textContent.toUpperCase();

    // Show entry if it matches search input, otherwise hide it
    if (name.indexOf(input) > -1 || description.indexOf(input) > -1) {
      entry.style.display = "";
    } else {
      entry.style.display = "none";
    }
  }
}
