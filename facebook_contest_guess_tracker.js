// In a situation like this:
// "I have a number in my head and I'm giving something away on facebook. Comment with your guesses 0-999."
// This script keeps track of which numbers have been guessed already and which are still available.


// Usage:
// Go to facebook post's permalink page by clicking on the time of the original post. 
// (Otherwise comments from other posts will interfere.)
// Click "see more" until all the comments are on the screen
// If you wrote a comment about which numbers were taken already, be sure to remove that
// comment through the chrome inspector before you run this!


// Matches up to 3 digits anywhere in a comment
var re = /\d{1,3}/;

// Allocate space for all 3 digit numbers 0..999
var visited = Array(1000);

// Iterate through all comments, parsing 1..3 digit guesses from comment bodies
// If found, mark visited at that index as true
for (span of document.querySelectorAll(".UFICommentBody span")) {
  if ((match = re.exec(span.textContent)) !== null) {
    visited[parseInt(match[0], 10)] = true;
  }
}

yesVisited = [];
notVisited = [];

// Now gather all the trues and nulls.
for (var i = 0; i < visited.length; i++) {
  if (visited[i]) {
    yesVisited.push(i);
  } else {
    notVisited.push(i);
  }
}

console.log("Already guessed: " + yesVisited.join(", "));
console.log("Still available: " + notVisited.join(", "));


