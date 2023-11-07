import Button from "devextreme-react/button";
import { useState } from "react";
function Counter() {
    const [count, setCount] = useState(0);
    function increment() {
        setCount(prev => prev + 1);
    }
    return (<>
        Count: <div data-testid="count">{count}</div>
        <Button text="Increment" onClick={increment} stylingMode="outlined" type="success" />
    </>);
}

export default Counter;