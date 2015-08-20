(function theLoop (i) {
  setTimeout(function () {
//list out the words
var arrOne = ["Clients say", "Clients want", "Clients insist on", "Clients beg for", "Clients deserve", "Clients request", "Clients prattle on and on about", "Clients exhibit confusion regarding", "Clients are genius when it comes to", "Clients are clueless about", "Clients yearn for", "Clients long for", "Clients are still harping about", "Clients drink excessively due to", "Clients expect", "Clients get excited thinking about", "Clients are super emo about", "Clients are, like, whatever over", "Clients make therapists rich due to", "Clients refuse to pay bills because of", "Client has soul of empty array due to", "Client causes 'pain-gasm' due to", "Client breaks heart of child with"]
var arrTwo = ["more", "bigger", "smaller", "easier", "dumbed-down", "souped up", "hyped up", "jaw dropping", "ear-splitting", "vaguely offensive", "incoherent", "illogical", "twisted", "paradoxical", "tragic", "inhumane", "contradictory", "absurd", "discordant", "vaguely familiar", "fatally flawed", "problematic", "psychedelic", "soul-crushing", "scandalous", "criminal"]
var arrThree = ["things like", "examples of", "instances of", "crates of", "cartons of", "JPGs of", "endless lists of", "sheafs of", "mountains of", "oceans of", "opportunities for", "cases of", "need for", "desire for", "namby-pamby about", "obsession over", "so-called 'deadline' regarding", "ideas about", "plans for", "drawings of", "meeting about", "active listening regarding", "false sincerity in the matter of"]
var arrFour = ["magically reappearing", "never-before-mentioned", "new", "unexplained", "sudden", "rushed", "trendy", "random", "elastic", "slippery", "slick", "stale", "conservative", "misguided", "silly", "out-of-touch", "back-dated", "forward looking", "dramatic", "OCD", "plaintive", "tone deaf", "little violin playing", "!@#$^", "bravely minimal", "lost cause", "object oriented"]
var arrFive = ["comps", "mobile sites", "PDFs", "junk", "poppycock", "balderdash", "so-called art", "communications", "collateral", "ad concepts", "brochures", "PowerPoint", "hang tags", "CD-ROMs", "responsive web pages", "UX", "infographics", "instant messages", "emails", "tweaks", "zombie project that won't die", "bulleted lists", "swooshes and swirls", "so-called consistency", "creative anti-matter", "wacky gradations", "terrible fonts", "circular arrows", "drop shadows", "making it bigger"]
//put them together at random
var num = Math.floor((Math.random() * arrOne.length));
var out = (arrOne[num] + " ");
var num = Math.floor((Math.random() * arrTwo.length));
var out = (out + arrTwo[num] + " ");
var num = Math.floor((Math.random() * arrThree.length));
var out = (out + arrThree[num] + " ");
var num = Math.floor((Math.random() * arrFour.length));
var out = (out + arrFour[num] + " ");
var num = Math.floor((Math.random() * arrFive.length));
var out = (out + arrFive[num] + " ");
//output
$(".my-output").append(
$('<p class="typing">' + out + '</p>'));
// the rest of the timeout loop
    if (--i) {          // If i > 0, keep going
      theLoop(i);       // Call the loop again, and pass it the current value of i
    }
  }, 5000);
})(200);