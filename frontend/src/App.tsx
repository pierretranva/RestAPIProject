// Copyright (C) 2022 Obscurity Labs LLC. <admin@obscuritylabs.com> - All Rights Reserved
// Unauthorized copying of this file, via any medium is strictly prohibited.
// All rights reserved. No warranty, explicit or implicit, provided.
// Proprietary and confidential.
import React, { useEffect, useState } from "react";
import type { FC } from 'react';
import { Button, Dialog, Typography, TextField, Skeleton, HomeIcon } from '@material-ui/core';
import { Counter } from "./Counter"
import { ShoppingCart } from "./ShoppingCart"

const App: FC = () => {
  const [data, setData] = useState<string>()
  const [open, setOpen] = React.useState<boolean>(false);
  const [veggie, setVeggie] = useState<string>()
  const fetchData = async () => {
    const response = await fetch("http://localhost:8000/hello")
    const jsonRes = await response.json()
    setData(jsonRes)

  }

  const handleClose = () => {
    setOpen(false)
  }
  const handleClickVeggie = (rand: number) => {
    let veg = ["potato", "onion", "lettuce", "tomato", "death"]
    setVeggie(veg[rand])
    console.log(veg[rand])

  }

  return (
    <div>
      <Button onClick={fetchData}>Hello World</Button>

      <h1>Pick a random number to get a Veggie</h1>
      <Button onClick={() => handleClickVeggie(0)}>Veggie 1</Button>
      <Button onClick={() => handleClickVeggie(1)}>Veggie 2</Button>
      <Button onClick={() => handleClickVeggie(2)}>Veggie 3</Button>
      <Button onClick={() => handleClickVeggie(3)}>Veggie 4</Button>
      <Button onClick={() => handleClickVeggie(4)}>DON'T CLICK THIS BUTTON UNLESS YOU WANT THE WORLD TO END</Button>
      <Typography>{veggie}</Typography>
      <Counter>
        {(count, setCount) =>
          <div>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>

          </div>}
      </Counter>
      <Skeleton variant="text" />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={118} />
      <ShoppingCart>
        {(cart, modifyCart) =>
          <div>
            <TextField size="small" />
            {cart.name}{cart.count}{modifyCart}

            <button onClick={() => modifyCart({ name: cart.name, count: cart.count + 1 })}>+</button>
            <button onClick={() => modifyCart({ name: cart.name, count: cart.count - 1 })}>-</button>
          </div>
        }
      </ShoppingCart>

    </div>

  );
};

export default App;
