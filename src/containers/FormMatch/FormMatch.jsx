import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { LABELTYPES } from '../../constants/label';
import { FormMatchContainer, ImageContainer } from './index.style';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Grid from '@mui/material/Grid';
import moment from 'moment';
import { AVATAR_DEFAULT } from '../../constants';
import apis from '../../apis';
import { useEffect, useState } from 'react';

const theme = createTheme();
export default function FormMatch() {
  const [dataPlayer, setDataPlayer] = useState([]);
  const fetchDataPlayers = async () => {
    const dataPlayers = await apis.players.getAllPlayer();
    setDataPlayer(dataPlayers.result);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const dataSubmit = {
      groupStage: group,
      date: moment(datetime).format('DD/MM/YYYY'),
      homeId: homeplayer,
      awayId: awayplayer,
      homeScore: homescore,
      awayScore: awayscore,
      //idmatch: dataMatchsJson.length + 1,
    };
    await apis.matches.saveMatch(dataSubmit);
    alert('submit success');
  };
  const [group, setGroup] = React.useState('');
  const [homeplayer, setHomePlayer] = React.useState('');
  const [awayplayer, setAwayPlayer] = React.useState('');
  const [datetime, setDateTime] = React.useState('');
  const [homescore, setHomeScore] = React.useState('');
  const [awayscore, setAwayScore] = React.useState('');
  const [idmatch, setIDMatch] = React.useState('');

  useEffect(() => {
    fetchDataPlayers();
  }, []);

  const handleChangeGroup = (event) => {
    setGroup(event.target.value);
  };

  const handleChangeHomePlayer = (event) => {
    setHomePlayer(event.target.value);
  };

  const handleChangeAwayPlayer = (event) => {
    setAwayPlayer(event.target.value);
  };

  const handleChangeAwayScore = (event) => {
    setAwayScore(event.target.value);
  };

  const handleChangeHomeScore = (event) => {
    setHomeScore(event.target.value);
  };

  const handleChangeIDMatch = (event) => {
    setIDMatch(event.target.value);
  };

  return (
    <FormMatchContainer>
      <div className="container">
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box className="styleFilterBox">
              <Avatar className="avatar">
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Form Match
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <FormControl fullWidth margin="normal">
                  <InputLabel id={LABELTYPES.GROUPSTAGE}>Group</InputLabel>
                  <Select
                    labelId={LABELTYPES.GROUPSTAGE}
                    id={LABELTYPES.GROUPSTAGE}
                    value={group}
                    label={LABELTYPES.GROUPSTAGE}
                    onChange={handleChangeGroup}
                  >
                    <MenuItem value={'Solo_round_1'}>Solo_round_1</MenuItem>
                  </Select>
                </FormControl>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    value={datetime}
                    onChange={(newValue) => setDateTime(newValue)}
                  />
                </LocalizationProvider>

                <FormControl fullWidth margin="normal">
                  <InputLabel id={LABELTYPES.HOMEPLAYER}>HomePlayer</InputLabel>
                  <Select
                    labelId={LABELTYPES.HOMEPLAYER}
                    id={LABELTYPES.HOMEPLAYER}
                    value={homeplayer}
                    label={LABELTYPES.HOMEPLAYER}
                    onChange={handleChangeHomePlayer}
                  >
                    {dataPlayer.map(({ id, name, image }, index) => (
                      <MenuItem key={index} value={id}>
                        <ImageContainer>
                          <img
                            className="icon"
                            src={image || AVATAR_DEFAULT}
                            alt=""
                          ></img>
                        </ImageContainer>

                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl fullWidth margin="normal">
                  <InputLabel id={LABELTYPES.HOMEPLAYER}>AwayPlayer</InputLabel>
                  <Select
                    labelId={LABELTYPES.AWAYPLAYER}
                    id={LABELTYPES.AWAYPLAYER}
                    value={awayplayer}
                    label={LABELTYPES.AWAYPLAYER}
                    onChange={handleChangeAwayPlayer}
                  >
                    {dataPlayer.map(({ id, name, image }, index) => (
                      <MenuItem key={index} value={id}>
                        <ImageContainer>
                          <img
                            className="icon"
                            src={image || AVATAR_DEFAULT}
                            alt=""
                          />
                        </ImageContainer>
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      value={homescore}
                      onChange={handleChangeHomeScore}
                      id="firstName"
                      label="Home Score"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      value={awayscore}
                      onChange={handleChangeAwayScore}
                      id="lastName"
                      label="Away Score"
                      name="lastName"
                      autoComplete="family-name"
                    />
                  </Grid>
                </Grid>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  value={idmatch}
                  onChange={handleChangeIDMatch}
                  name="password"
                  label="ID Match"
                  id={LABELTYPES.ID}
                  autoComplete="sfslfldsfsdf"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </div>
    </FormMatchContainer>
  );
}
