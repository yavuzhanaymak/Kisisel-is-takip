import { useState,useEffect } from "react";

import Title from "../src/components/Title";
import Input from "../src/components/Input";
import Select from "../src/components/Select";
import Button from "../src/components/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Plus from '@mui/icons-material/Add';
import Tables from "../src/components/Tables";
import Modal from "../src/components/Modal";
const currencies = [
  {
    value: 'Urgent',
    label: 'Urgent',
  },
  {
    value: 'Regular',
    label: 'Regular',
  },
  {
    value: 'Trival',
    label: 'Trival',
  }
];
const columnData = [
  'Name',
  'Priority',
  'Actions',
];
export default function Home() {

  const [jobs, setJobs] = useState([]);
  const [name, setName] = useState("");
  const [Priority, setPriority] = useState("");
  const [id, setId] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
 
console.log(jobs)

  },[jobs]);
  function handleSubmit() {
 
 
  }
let count = 0;
  function handleDelete(id) {
    const newJobs = jobs.filter((item) => item.id !== id);
    setJobs(newJobs);
  }

  function handleEdit(id) {
    const newJobs = jobs.filter((item) => item.id !== id);
    setJobs(newJobs);
  }


  function handleAdd() {
   setId(id+1);
    setJobs([...jobs, { id: id, name: name, Priority: Priority }]);
 
  } 


  return (
    <Container maxWidth="xl">
      <Title title="Create New Job" />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
      >

        <Grid item xs={12} sm={12} md={6} xl={6}>
        <Input onChange={(e)=>setName(e.target.value)} label={"Job Name"} />
        </Grid>
        <Grid item xs={12} sm={12} md={4} xl={4}>
        <Select data={currencies} value={Priority} onChange={(e)=>setPriority(e.target.value)} label={"Job Priority"} />
        </Grid>
        <Grid item xs={12} sm={12} md={2} xl={2}>
        <Button actions={()=>handleAdd()} label={"Create"} Icon={Plus} />
        </Grid>
      </Grid>
<Modal open={open} />
      <Tables actionDelete={()=>setOpen(!open)} actionEdit={()=>handleEdit()} columnData={columnData} rowsData={jobs} />
    </Container>
  );
}
