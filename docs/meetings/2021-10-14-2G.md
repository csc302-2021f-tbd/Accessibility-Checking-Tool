# 2021-10-14

## Meeting #1 with Greg

- Drop the web api part. Our tool can be used in CI/CD anyway, so it'll still be usable.

- We should only worry about static violation. so don't worry about checking pages that are dynmaic (JS)

- Plug-in archeticture, can be one of two common options:
  1- Config files that looks like json, containing list of plugins to be loaded. (simplest)
  2- Load everything from a directory.
  Or combine the two. We could use wildcards as well.

- The hard part is how to dynamically load modules (how import in JS works, I think we'd want to replicate that but with exporting?)

- One way is to read file as text, call eval to evaluate it (bad, don't remember why)

- There's a better way (we'd need to search for it a bit). 

- The input of every plug-in would probably be a DOM tree.

- Generally, the plugin would output only one thing. either:
  1- a list of strings (simpler)
  2- export a class instead. where the class has some methods that could be called, to handle some parsing decisions of the output maybe.

- Bundling tests together (> or vs.) one file with everything inside. 
  e.g. pytest test and teardown one for each bundle instead of only one for the whole suite of tests that needs to be split into multiple files instead. we should pick what's simplest.

- Simple plugins for test purposes: html has head and body, or return an empty list.
  This has to work first, to make sure we can load plugins, take their outputs. 

- Plugin numbers or complexities are optional. the framework is most important.

- We need to write unit tests to make sure framework is working.
  Especially the part where we load different JS plugins with different names. 
  It doesn't matter how complex the plugin is. This is the core of our project: how to dynamically load plugins.

- If an invalid plugin is given, we should test against this with try catches. (if plugin isn't JS for example). 
  This is semi required, it might be optional if it gives us too much trouble, but this is the only thing Greg heavily suggested as should be there (with contrast to the plugins number or complixity for example).

