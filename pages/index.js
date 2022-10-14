import Title from "../src/components/Title";
import Input from "../src/components/Input";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

export default function Home() {
  return (
    <Container maxWidth="xl">
      <Title title="Create New Job" />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >

        <Grid item xs={2} sm={4} md={6} xl={12}>
        <Input label={"Job Name"} />
        </Grid>
      </Grid>
    </Container>
  );
}
