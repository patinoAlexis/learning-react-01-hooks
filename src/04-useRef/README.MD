# UseRef

The useRef hook has a principal value as a constant that if the value changes
it sohuld not cause a re-render the component. This can be useful
on scenarios when dealing with data that even if changes it should not cause a re-render.

A common use case is to store a reference to a DOM element.
Another example is with timers, where you want to store the ID of the timer so you can clear it later.
