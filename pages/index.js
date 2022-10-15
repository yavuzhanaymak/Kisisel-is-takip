import { useState, useEffect } from "react";

import Title from "../src/components/Title";
import Input from "../src/components/Input";
import Select from "../src/components/Select";
import Button from "../src/components/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Plus from "@mui/icons-material/Add";
import Tables from "../src/components/Tables";
import Modal from "../src/components/Modal";
const currencies = [
  {
    value: "Urgent",
    label: "Urgent",
    type:1
  },
  {
    value: "Regular",
    label: "Regular",
    type:2
  },
  {
    value: "Trival",
    label: "Trival",
    type:3
  },
];
const columnData = ["Name", "Priority", "Actions"];
export default function Home() {
  const [jobs, setJobs] = useState([]);
  const [name, setName] = useState("");
  const [Priority, setPriority] = useState("Urgent");
  const [id, setId] = useState(0);
  const [open, setOpen] = useState(false);
  const [type, setType] = useState(0);

  const [itemID, setItemId] = useState(false);
  const [actions, setActions] = useState();
  const [InputError, setInputError] = useState(false);
  const [InputHelperText, setInputHelperText] = useState("");
  useEffect(() => {
    console.log(jobs);

   jobs.sort((a, b) => a.Priority !== b.Priority ? a.Priority < b.Priority ? 1 : -1 : 0);

 
    jobs.length > 0 && localStorage.setItem("data", JSON.stringify(jobs));


  }, [jobs]);
  useEffect(() => {
    const data = localStorage.getItem("data");

    if (data) {
      console.log(data);
      setJobs(JSON.parse(data));
      jobs.sort((a, b) => a.Priority !== b.Priority ? a.Priority < b.Priority ? 1 : -1 : 0);


    }
  }, []);

  function EditItem() {
    jobs[itemID].Priority = Priority;
    setJobs([...jobs]);
    setOpen(false);
  }

  function HandleDelete(item) {
    setOpen(true);
    setActions(1);
    setItemId(item);
  }

  function modalActions() {
    if (actions === 1) {
      const newJobs = jobs.filter((item, index) => index !== itemID);
      setJobs(newJobs);
      setOpen(false);
    } else {
      EditItem();
    }
  }

  function handleInput(e) {
    name.length > 3 ? setInputError(false) : setInputError(true);
    name.length > 3 ? setInputHelperText("") : setInputHelperText("Name is too short");

    name.length > 250 ? setInputError(true) : setInputError(false);
    name.length > 250 ? setInputHelperText("Name is too long") : setInputHelperText("");
    setName(e.target.value);
  }

  function EditModal({ item }) {
    return (
      <>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={12} sm={12} md={12} xl={12}>
            <Input
              disabled={true}
              value={jobs[itemID].name}
              label={"Job Name"}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} xl={12}>
            <Select
              data={currencies}
              value={jobs[itemID].Priority}
              onChange={(e) => setPriority(e.target.value)}
              label={"Job Priority"}
            />
          </Grid>
        </Grid>
      </>
    );
  }
  function DeleteModal({ item }) {
    return (
      <>
        <h1>Are you sure you want to delete this item?</h1>
      </>
    );
  }

  function handleEdit(id) {
    setItemId(id);
    setActions(0);
    setOpen(true);
  }

  function handleAdd() {
   
    if (name.length > 3 && name.length < 250) {
      setId(id + 1);
      setJobs([...jobs, { id: id, name: name, Priority: Priority , type:type }]);

      setName("");
      setInputError(false);
      setInputHelperText("");
    } else {
      setInputError(true);
      setInputHelperText("Name is too short");
    }    

  }

  return (
    <Container maxWidth="xl">
      <Title title="Create New Job" />
      <Grid container spacing={{ xs: 2, md: 3 }}>
        <Grid item xs={12} sm={12} md={6} xl={6}>
          <Input
            value={name}
            onChange={(e) => handleInput(e)}
            label={"Job Name"}
            required={false}
            error={InputError}
            helperText={InputHelperText}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4} xl={4}>
          <Select
            data={currencies}
            value={Priority}
            onChange={(e) => setPriority(e.target.value) && setType(e.target.type)}
            label={"Job Priority"}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={2} xl={2}>
          <Button actions={() => handleAdd()} label={"Create"} Icon={Plus} />
        </Grid>
      </Grid>
      <Modal
        handleClose={() => setOpen(!open)}
        modalAction={(e) => modalActions()}
        Children={actions === 0 ? EditModal : DeleteModal}
        open={open}
        title={"Edit Job"}
      />
      <Tables
        actionDelete={HandleDelete}
        actionEdit={handleEdit}
        columnData={columnData}
        rowsData={jobs}
      />
    </Container>
  );
}
