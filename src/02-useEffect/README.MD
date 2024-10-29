# How does it work the useEffect?
useEffect is mostly used when you want to be in charge of specific changes on your
variables inside the component. useEffect helps you to be like "hey when this value changes do
this function". It can also be used as an initial render, if the dependency array is empty.

I have read on some places useEffect is preferable to not be used in general,
but is still useful in different cases.

On the dependency array you can put any variable and react will handle the work on notifying
the useEffect when the variable changes. is not a necessity that every value has to be a
useState, but for better performance is might be better to try to keep it that way, or that
at least the variable COMES from an useState. For example

You have the variable
```javascript
const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
});
const {name, email, password} = form;
useEffect(() => {
    console.log('name changed');
}, [name]);
```
In the example above even tho you are not using the useState directly on the useEffect, you
are still using the variable that comes from the useState.

## Recomendations
- Is recommended that by every new action you create, do a new useEffect. The best thing is
to try to avoid doing big logical functions for useEffect.
