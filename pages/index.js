import { useState, useEffect } from "react";

import Title from "src/components/Title";
import Input from "src/components/Input";
import Select from "src/components/Select";
import Button from "src/components/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Plus from "@mui/icons-material/Add";
import Tables from "src/components/Tables";
import Modal from "src/components/Modal";
import Filter from "src/components/Filter";
import axios from "axios";
import FmdBadIcon from '@mui/icons-material/FmdBad';
const columnData = ["Name", "Priority", "Actions"];
export default function Home() {
  const [jobs, setJobs] = useState([]);
  const [filterData, setFilterData] = useState([]);

  const [name, setName] = useState("");
  const [Priority, setPriority] = useState("Urgent");
  const [id, setId] = useState(0);
  const [open, setOpen] = useState(false);
  const [currencies, setCurrencies] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [itemID, setItemId] = useState(false);
  const [actions, setActions] = useState();
  const [InputError, setInputError] = useState(false);
  const [InputHelperText, setInputHelperText] = useState("");

  useEffect(() => {
    filterData.length > 0 &&
      localStorage.setItem("data", JSON.stringify(filterData));
    filterData.sort(function (a, b) {
      return a.type - b.type;
    });

    jobs.sort(function (a, b) {
      return a.type - b.type;
    });
  }, [filterData]);
  useEffect(() => {
    const data = localStorage.getItem("data");
    GetPriority();
    if (data) {
      setJobs(JSON.parse(data));

      setFilterData(JSON.parse(data));

      jobs.sort(function (a, b) {
        return a.type - b.type;
      });

      filterData.sort(function (a, b) {
        return a.type - b.type;
      });
    }
  }, []);
  function GetPriority() {
    try {
      axios.get("/api/priority").then((resp) => {
        setCurrencies(resp.data);
      });
    } catch (error) {
      console.log(error);
    }
  }

  function PriorityDeggre(value) {
    switch (value) {
      case "Urgent":
        return 1;
      case "Regular":
        return 2;
      case "Trival":
        return 3;
      default:
        return 0;
    }
  }

  function EditItem() {
    filterData[itemID].Priority = Priority;
    filterData[itemID].type = PriorityDeggre(Priority);
    setFilterData([...filterData]);
    localStorage.setItem("data", JSON.stringify(filterData));
    setOpen(false);
  }

  function HandleDelete(item) {
    setOpen(true);
    setActions(1);
    setItemId(item);
  }

  function modalActions() {
    if (actions === 1) {
      const newJobs = filterData.filter((item, index) => index !== itemID);
      setFilterData(newJobs);
      setJobs(newJobs);
      localStorage.setItem("data", JSON.stringify(newJobs));
      setOpen(false);
    } else {
      EditItem();
    }
  }

  function handleInput(e) {
    name.length > 3 ? setInputError(false) : setInputError(true);
    name.length > 3
      ? setInputHelperText("")
      : setInputHelperText("Name is too short");

    name.length > 250 ? setInputError(true) : setInputError(false);
    name.length > 250
      ? setInputHelperText("Name is too long")
      : setInputHelperText("");
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
      <div className="ortala">
      <FmdBadIcon fontSize="large" color="secondary"/>
        <h3>Are you sure you want to delete this item?</h3>
      </div>
    );
  }

  function handleEdit(id) {
    setItemId(id);
    setActions(0);
    setOpen(true);
  }

  function FilterJobNames(e) {
    setFilterName(e);

    setFilterData(jobs.filter((item) => item.name.includes(e)));
  }
  function FilterPriority(e) {
    e !== "Priority (all)"
      ? setFilterData(jobs.filter((item) => item.Priority.includes(e)))
      : setFilterData(jobs);
  }
  function handleAdd() {
    if (name.length > 3 && name.length < 250) {
      setId(id + 1);
      setJobs([
        ...jobs,
        {
          id: id,
          name: name,
          Priority: Priority,
          type: PriorityDeggre(Priority),
        },
      ]);
      setFilterData([
        ...jobs,
        {
          id: id,
          name: name,
          Priority: Priority,
          type: PriorityDeggre(Priority),
        },
      ]);

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
            onChange={(e) =>
              setPriority(e.target.value) && setType(e.target.type)
            }
            label={"Job Priority"}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={2} xl={2}>
          <Button actions={() => handleAdd()} label={"Create"} Icon={Plus} />
        </Grid>
      </Grid>
      <Title title="Job List" />

      <Filter
        value={filterName}
        filterName={FilterJobNames}
        FilterPriority={FilterPriority}
      />
      <Tables
        actionDelete={HandleDelete}
        actionEdit={handleEdit}
        columnData={columnData}
        rowsData={filterData}
      />
      <Modal
        handleClose={() => setOpen(!open)}
        modalAction={(e) => modalActions()}
        Children={actions === 0 ? EditModal : DeleteModal}
        open={open}
        title={"Edit Job"}
      />
    </Container>
  );
}
