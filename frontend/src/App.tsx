// Copyright (C) 2022 Obscurity Labs LLC. <admin@obscuritylabs.com> - All Rights Reserved
// Unauthorized copying of this file, via any medium is strictly prohibited.
// All rights reserved. No warranty, explicit or implicit, provided.
// Proprietary and confidential.
import React, { useEffect, useState } from "react";
import type { FC } from 'react';
import { Button, Dialog, Typography, TextField, Skeleton } from '@material-ui/core';
import { Counter } from "./Counter"
import { ShoppingCart } from "./ShoppingCart"
import Navbar from "./Navbar"

const App: FC = () => {
  const [data, setData] = useState<string>()
  const [open, setOpen] = React.useState<boolean>(false);
  const fetchData = async () => {
    const response = await fetch("http://localhost:8000/hello")
    const jsonRes = await response.json()
    setData(String(jsonRes))

  }

  const handleClose = () => {
    setOpen(false)
  }
  return (

    <div>
      <Navbar />
      <Counter>
        {(count, setCount) =>
          <div>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>

          </div>}
      </Counter>

      <ShoppingCart />
    </div>

  );
};

export default App;
