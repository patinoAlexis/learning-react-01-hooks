import {useRef} from "react";


export const FocusScreen = () => {
    const inputRef = useRef();
    const onFocus = () => {
        console.log(inputRef.current.select());
    }
    return (
        <>
        <h1>Focus Screen</h1>
            <hr />
            <input ref={inputRef} type="text" placeholder="Focus Screen" className="form-control" />

            <button className="btn btn-primary " onClick={onFocus}>Set focus</button>

        </>
    )
}
