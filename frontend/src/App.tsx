// Copyright (C) 2022 Obscurity Labs LLC. <admin@obscuritylabs.com> - All Rights Reserved
// Unauthorized copying of this file, via any medium is strictly prohibited.
// All rights reserved. No warranty, explicit or implicit, provided.
// Proprietary and confidential.
import React, { useEffect, useState } from "react";
import type { FC } from 'react';
import { Button, Dialog, Typography, DialogTitle, DialogContent } from '@material-ui/core';
import { Counter } from "./Counter"

const App: FC = () => {
  const [data, setData] = useState<string>()
  const [open, setOpen] = React.useState<boolean>(false);
  const [veggie, setVeggie] = useState<string>()
  const fetchData = async () => {
    const response = await fetch("http://localhost:8000/hello")
    const jsonRes = await response.json()
    console.log(jsonRes)
    setData(jsonRes)
    console.log("it is working rght here")
    console.log(jsonRes)
  }

  const handleClose = () => {
    setOpen(false)
  }
  const handleClickVeggie = (rand: number) => {
    let randomVeg = ["potato", "onion", "lettuce", "tomato"]
    setVeggie(randomVeg[rand])
    console.log(randomVeg[rand])
  }

  return (
    <div>
      <Button onClick={fetchData}>Hello World</Button>
      <Typography>{JSON.stringify(data)}</Typography>
      <h1>Pick a random number to get a Veggie</h1>
      <Button onClick={() => handleClickVeggie(0)}>Veggie 1</Button>
      <Button onClick={() => handleClickVeggie(1)}>Veggie 2</Button>
      <Button onClick={() => handleClickVeggie(2)}>Veggie 3</Button>
      <Button onClick={() => handleClickVeggie(3)}>Veggie 4</Button>
      <Typography>{veggie}</Typography>
      <Counter>
        {(count, setCount) =>
          <div>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>

          </div>}
      </Counter>

    </div>

  );
};

export default App;
