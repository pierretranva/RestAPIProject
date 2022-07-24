import React, { useState } from "react";

interface Props {
    children: (
        cart: typeof item,
        modifyCart: React.Dispatch<React.SetStateAction<{
            name: string;
            count: number;
        }>>,
    ) => JSX.Element | null
}
var item = {
    name: "",
    count: 0
};



export const ShoppingCart: React.FC<Props> = ({ children }) => {
    const [cart, modifyCart] = useState({ name: "", count: 0 });

    return (<div>
        {
        children(cart, modifyCart)
        }
        </div>;)

};
