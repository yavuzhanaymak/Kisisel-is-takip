import { useState,useEffect } from "react";

import Title from "../src/components/Title";
import Input from "../src/components/Input";
import Select from "../src/components/Select";
import Button from "../src/components/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Plus from '@mui/icons-material/Add';

export default function Home() {

  const [jobs, setJobs] = useState();
  function handleSubmit(e) {
  alert("Form submitted");
  }


  return (
    <Container maxWidth="xl">
      <Title title="Create New Job" />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
      >

        <Grid item xs={2} sm={4} md={6} xl={6}>
        <Input label={"Job Name"} />
        </Grid>
        <Grid item xs={2} sm={4} md={4} xl={4}>
        <Select label={"Job Priority"} />
        </Grid>
        <Grid item xs={2} sm={4} md={2} xl={2}>
        <Button actions={()=>handleSubmit()} label={"Create"} Icon={Plus} />
        </Grid>
      </Grid>
    </Container>
  );
}
