import React, { useState } from "react";

interface Props {
    veggie: (
        cart: string,
        setVeggie: React.Dispatch<React.SetStateAction<string>>,
        count: number,
        setCount: React.Dispatch<React.SetStateAction<number>>,
    ) => JSX.Element | null
}



export const ShoppingCart: React.FC<Props> = ({ veggie }) => {
    const [cart, modifyCart] = useState<list>("");
    const [count, setCount] = useState<number>(0);

    return <div>{veggie(name, setVeggie, count, setCount)}</div>;
};
