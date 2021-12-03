# A2 TODOs

## Features to be implemented

- Basic plugins are what we expect to complete for this project. Extra plugins are what we will implement after ensuring that basic is completed.
- Every error/warning is accompanied by an example output message that is subject to change. It will be changed to ensure more consistency. 
We'll also aim to include the parts relelvant to the error in the message.
- We breakdown each feature and include the acceptance creteria in the following list. If a snippet exactly matching the one provided, or matches the description provided, it should trigger the error message specified or something similar (and more informative).

### Basic plugins: 

1. <strike>A missing <head> or <body> tag. The output would be "Error: missing/empty <head> element" or "Error: missing/empty <body> element" or "Error missing <head> and <body> elements"</strike>
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
1. <strike>HTML missing language attribute.
  
     Snippet: `<html>` instead of, for example, `<html lang="en">`
  
      Error message: "Error: HTML element missing language attribute"</strike>
1. <strike>HTML title that is: empty, untitled, no title, new page, or whatever place holder. this goes for filenames of the HTML as well.
  
     Snippet: `<head> <title>Untitled</title> </head>`
     
      Error message: "Error: page title error"</strike>
1. <strike>Links not visually distinguishable from text. If a link isn't underlined, bold, etc. and has the same color as the surronding text, it's an error.
  
     Snippet: ```<head> <style type="text/css"> p a:link {text-decoration: none} p a:visited {text-decoration: none} p a:active {text-decoration: none} p a:hover {text-decoration: underline; color: red;} </style> </head> <body> <p>To find out more about the <a href="rain_in_spain.htm">rain in spain</a>there are many resources.</p> </body>``` 
  
     Error message: "Error: link ... not visually distinguishable from text"<ظstrike>
1. <strike>Missing id attribute in input field
  
     Snippet: `Phone number: (<input type="text" size="3">) <input type="text" size="3">-<input type="text" size="4">)` Here every chunk of the input field should have its own id.
  
      Error message: "Error: missing id attribute in input field" </strike>
1. Justified text
  
     Snippet: any `align="justify"` attribute in HTML or `{text-align: justify}` in CSS
  
     Error message: "Error: Justified text"
1. Accessible name and visible label mismatch && Accessible name does not contain a match for the string of the visible label. If both are missing, it's an error.
  
     Snippet: `<button id="sitesearch" aria-label="Find in this site">Go</button>`
  
     Error message: "Error: Accessible name and visible label mismatch"
  

### Extra plugins:
  
   We don't provide acceptance criteria for these feature, as we don't know how to tackle these problems yet, and how much our implementation will achieve. This is for all plugins in general, but these are more of our extra milestones, and are particularly challenging to us. We just included them to share our extra goals if everything else went smoothly.
  
1. Contrast related errors/warnings. We'd output the contrast ratio, since we'll need to obtain to catch the error in the first place.
1. Navigation links that are repeated on web pages do not change order when navigating through the site. This would require us to read multiple HTML pages and detect this.
1. Multiple ways exist to find other pages on the website - at least two of: a list of related pages, table of contents, site map, site search, or list of all available web pages.
1. If the author specifies either a background color or foreground color for texts (plus other stuff, maybe everything), then they must also specify the other one. If only one is specified, it's an error.
1. Text readability in terms of difficulty and word usage.
  
  
## Task Splitup
All members will pick a roughly equal number of plugins to work on for the remaining ~month. 
