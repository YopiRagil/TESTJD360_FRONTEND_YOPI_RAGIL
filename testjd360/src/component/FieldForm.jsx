import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  formField: {
    margin: theme.spacing(3),
    width: "500px",
    background: "#f5ffff",
    "&:hover label.Mui-focused": {
      color: "#22bfa2",
    },
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: "#22bfa2",
      },
    },
  },
  button: {
    width: "500px",
    margin: theme.spacing(5, 0),
    backgroundColor: "#12af92",
    borderColor: "#12af92",
    color: "white",
    borderRadius: theme.spacing(1),
    "&:hover": {
      color: "#12af92",
      borderColor: "#12af92",
    },
  },
  card: {
    width: "80%",
    margin: theme.spacing(5),
    borderRadius: theme.spacing(2),
  },
  titleText: {
    fontWeight: "bolder",
    color: "#22bfa2",
    marginTop: theme.spacing(5),
  },
  background: {
    backgroundColor: "#22bfa2",
  },
  gambarRoti1: {
    width: "80%",
    margin: theme.spacing(10, 0, 0, 0),
  },
  gambarRoti2: {
    width: "100%",
  },
}));

export default function FieldForm() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <Grid container direction="column" justify="center" alignItems="center">
        <Card className={classes.card}>
          <Typography variant="h3" className={classes.titleText}>
            RotiQue
          </Typography>
          <CardContent>
            <Grid container>
              <Grid item md={7}>
                <form className={classes.root} noValidate autoComplete="off">
                  <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                  >
                    <FormControl
                      className={classes.formField}
                      variant="outlined"
                      size="default"
                    >
                      <Select
                        native
                        size="default"
                        variant="outlined"
                        inputProps={{
                          name: "sumber pesanan",
                          id: "outline-sumber-pesanan-native-simple",
                        }}
                      >
                        <option aria-label="None" value="">
                          Pesanan Dari
                        </option>
                        <option value={"wa"}>Whatsapp</option>
                        <option value={"call"}>Telephone</option>
                        <option value={"Email"}>Email</option>
                      </Select>
                    </FormControl>
                    <TextField
                      className={classes.formField}
                      id="name"
                      variant="outlined"
                      size="default"
                      label="Name"
                    />
                    <TextField
                      className={classes.formField}
                      id="phoneNumber"
                      size="default"
                      variant="outlined"
                      label="Nomor Telephon"
                    />
                    <TextField
                      className={classes.formField}
                      id="email"
                      size="default"
                      variant="outlined"
                      label="Email"
                    />
                    <TextField
                      className={classes.formField}
                      id="qtyRoty"
                      size="default"
                      variant="outlined"
                      label="Jumlah Roti"
                    />
                    <TextField
                      className={classes.formField}
                      id="describtion"
                      variant="outlined"
                      size="default"
                      row={3}
                      label="Keterangan Tambahan"
                    />
                    <Button
                      className={classes.button}
                      size="large"
                      variant="outlined"
                    >
                      Pesan
                    </Button>
                  </Grid>
                </form>
              </Grid>
              <Grid item md={5}>
                <img
                  alt="rotiku1"
                  src={require("../media/roti1.jpg")}
                  className={classes.gambarRoti1}
                />
                <img
                  alt="rotiku2"
                  src={require("../media/roti2.jpg")}
                  className={classes.gambarRoti2}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}
