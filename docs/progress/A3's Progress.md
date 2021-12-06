# Overview of Features Implemented

- The core engine that parses a given HTML into a DOM tree, then loads the plugins, each plugin is a separate JS file that exports a function that does one accessibility check. There's a helper JS file that loads the JS functions from separate file by fetching the names listed in a plugins.txt file inside /plugins. The helper JS gives back an array of JS functions. This array is looped in a foreach, then every element is given the DOM tree of an HTML to run its checks on. We're only supporting one HTML file per run right now.

- There's a /run.sh file which hardcodes an experimental command line argument required for node.js to run our JS files.

- There's also a /test.sh which hardcodes a different command line argument for the same reason.

- Every plugin loosely resembles one WCAG rule. We've simplified some violations in our checker.

## Delivered plugins:

1. Missing head or body tag: This plugin looks through the DOM tree to check if either of the Head or Body tags are empty or missing. It does so by getting the length of the parent node in the DOM tree that contains the head and body elements as children, checks if they exist, then if their children.length field is 0. 

1. HTML missing language attribute: If the <HTML> tag is missing the attribute lang="xx", where xx is any valid language code, an error is captured. We do this by first checking if the lang attribute exists. If it does, we check if a valid language is given by hardcoding a list of all language codes we know grabbed from W3 and check against them one by one. If none exist in the lang attribute, then a faulty language is provided and an error is flagged.
  
1. Bad title: We check if a bad placeholder title is given for the HTML page, such as: Untitled, new page, etc. We only check for a certain subset of these bad titles. If the bad title is a substring inside a longer title, we don't flag the title as faulty, as we'll end up with false positives. 
  
1. Links not visually distinguishable from text: If a link in a <a> tag has text that isn't wrapped in a bold or underline, then an error is flagged. We check for HTML \<b>, \<u>, and inline style attributes. We don't check for internal or external CSS rules. We recursively descend into children elements of the body, check for links, and check if that link has any bold or underline tag or inline style. We don't check for other decorations, but the infrastructure is there which makes it easily extendable.
  
1. Missing id attribute in input field: The same recursive algorithm applied above is done here. If an input element is found, a getAttribute search is done to check if there's an id attribute, and then if it's not empty.
  
## Undelivered plugins:
  
  1. Redundant link: If two links are close to each other and refer to the same page. This would require a good metric for detecting close enough links that is easier seen in a rendered page than in HTML format. Since we were short on time, and prioritized making our tool avoid flagging false positive errors, we decided to skip this one. 
  
## The acceptance criteria for all plugins, delivered and undelivered:

1. A missing \<head> or \<body> tag. The output would be "Error: missing/empty <head> element" or "Error: missing/empty \<body> element" or "Error missing \<head> and \<body> elements"
1. Illogical heading order (decreasing, so \<h2> followed by \<h1>) "Warning: \<h2> followed by \<h1>". Note that this has some extra rules.
1. Image without alternative text would trigger: "Error: image .... doesn't have alternative text"

      Snippets that could trigger the error: `<img src="squiggle.gif" width="20" height="20" alt="" />` or `<img src="squiggle.gif" width="20" height="20" />` (empty or missing alt attribute)
1. A link that contains no text.
  
     Snippet: `<a href="//www.w3schools.com"></a>`
  
     Error message: "Error: link <a href="//www.w3schools.com"></a> has no text".~~
1. Redundant link.
  
     Snippet: ```<a class="w3-bar-item w3-button" href="/jsref/default.asp"> JavaScript Reference </a> 
  <a class="w3-bar-item w3-button" href="/jsref/default.asp"> HTML DOM Reference </a>```
  
     Error message: "Error: 2 redundant links ... ..."
1. HTML missing language attribute.
  
     Snippet: `<html>` instead of, for example, `<html lang="en">`
  
      Error message: "Error: HTML element missing language attribute"
1. HTML title that is: empty, untitled, no title, new page, or whatever place holder. this goes for filenames of the HTML as well.
  
     Snippet: `<head> <title>Untitled</title> </head>`
     
      Error message: "Error: page title error"
1. Links not visually distinguishable from text. If a link isn't underlined, bold, etc. and has the same color as the surrounding text, it's an error.
  
     Snippet: ```<head> <style type="text/css"> p a:link {text-decoration: none} p a:visited {text-decoration: none} p a:active {text-decoration: none} p a:hover {text-decoration: underline; color: red;} </style> </head> <body> <p>To find out more about the <a href="rain_in_spain.htm">rain in spain</a>there are many resources.</p> </body>``` 
  
     Error message: "Error: link ... not visually distinguishable from text"
1. Missing id attribute in input field
  
     Snippet: `Phone number: (<input type="text" size="3">) <input type="text" size="3">-<input type="text" size="4">)` Here every chunk of the input field should have its own id.
  
      Error message: "Error: missing id attribute in input field"
1. Justified text
  
     Snippet: any `align="justify"` attribute in HTML or `{text-align: justify}` in CSS
  
     Error message: "Error: Justified text"
1. Accessible name and visible label mismatch && Accessible name does not contain a match for the string of the visible label. If both are missing, it's an error.
  
     Snippet: `<button id="sitesearch" aria-label="Find in this site">Go</button>`
  
     Error message: "Error: Accessible name and visible label mismatch"
  
  
 ## How we've met the acceptance criteria:
  - For every implemented plugin we have a corresponding .test.js file ran using jest. All these files are in /tests. Every test file runs only its plugin, and runs different test pages found in /samplepages. By having each test run only one plugin and check for its correctness, it's easier to isolate errors and extend our program without too much hassle. We've created many pages that violate some specific rules and others that are close to violating them, but don't. Some pages have no errors and some have errors in different ways to show that our code successfully detects errors in clear and corner cases. All the tests can be ran by running sh test.sh from the root dir. 
