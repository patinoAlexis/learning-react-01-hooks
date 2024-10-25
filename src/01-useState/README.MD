# How does useState work?
The useState is the most basic hook or at least the most commonly used on react apps,
it allows you to create a variable that will be visible on the screen, and tell the react app
that when a change is made, how to update acordingly.

We have tow examples on our file, the most common one, being an update of a single value,
in the example is a number, but it could be a boolean representing a toggle-side

The second example is even more common in my opinion, and it refers to the object updates.
This can be very useful when dealing with forms or just general gropued information, so instead
of havin a bunch of useState for each value, you can have a single one that will update the object.

The thing that is important to remember is taht every object needs to be "recreated", every time that we 
set the new state