import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Input from "../input";
import Select from "../select";
const currencies = [
  {
    value: "Priority (all)",
    label: "Priority (all)",
    type: 1,
  },
  {
    value: "Urgent",
    label: "Urgent",
    type: 2,
  },
  {
    value: "Regular",
    label: "Regular",
    type: 3,
  },
  {
    value: "Trival",
    label: "Trival",
    type: 4,
  },
];
export default function Filter({ filterName, value, FilterPriority }) {
  const [InputError, setInputError] = useState(false);
  const [Priority, setPriority] = useState("Priority (all)");
  const [name, setName] = useState("");

 

  function getFilterPriority(value) {
    setPriority(value)
    FilterPriority(value);
  }
  return (
    <Grid container spacing={{ xs: 2, md: 3 }}>
      <Grid item xs={12} sm={12} md={6} xl={6}>
        <Input
          value={value}
          onChange={(e) => filterName(e.target.value)}
          label={"Job Name"}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6} xl={6}>
        <Select
          data={currencies}
          onChange={(e) =>  getFilterPriority(e.target.value)}
          value={Priority}
          label={"Job Priority"}
        />
      </Grid>
    </Grid>
  );
}
