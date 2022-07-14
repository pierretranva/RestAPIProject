// Copyright (C) 2022 Obscurity Labs LLC. <admin@obscuritylabs.com> - All Rights Reserved
// Unauthorized copying of this file, via any medium is strictly prohibited.
// All rights reserved. No warranty, explicit or implicit, provided.
// Proprietary and confidential.
import React, { useEffect, useState } from "react";
import type { FC } from 'react';
import { Button, Dialog, Typography } from '@material-ui/core';

const App: FC = () => {
  const [data, setData] = useState([])
  const [open, setOpen] = React.useState(false);
  const fetchData = async () => {
    const response = await fetch("http://localhost:8000/hello")
    const jsonRes = await response.json()
    setData(jsonRes.data)
    setOpen(!open)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <><Button onChange={fetchData}>Hello World</Button><Dialog
      open={open}>
      onClose={handleClose}
      <Typography>{data}</Typography>
    </Dialog></>
  );
};

export default App;
