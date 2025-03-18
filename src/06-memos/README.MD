# Memorize on react

Memorize work in order to only reload a React component when a value
passed to the component changes, this is mainly helpful when you 
have a big component that requires a certain process to load before
it's loaded correctly.

For example, if my component makes an http query every time is created
i want to avoid the loading every time the parent component gets updated
so a good way to do this is using memorize.

Another example could be just having a lot of process going on with 
the data passed, doing refactoring, creation of variables, etc.
and avoid the unnecessary process if the props passed hasn't changed.


## Memo Hook

The same as memorizing a component, we can memorize a value,
the idea is that the process does not get reprocess in case is not
necesary BASED on certain dependencies given.

## useCallback hook

A function if re rendered will be diferent to the previous function
created that has the same properties when comparing it on JS, this is
because we are comparing not the functionality but the memory place
of the functions. 

This is a problem because it means the Memo Hook
does not work as expected for functions. In order to avoid this problem
we have the useCallback. You could consider that useCallback has
the same functionality of memoHook only that is meant to be used
for functions.
