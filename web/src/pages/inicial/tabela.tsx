import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import api from '../../services/api'
import './styles.css'

import { StyledTableCell, StyledTableRow } from './styleTable'

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function CustomizedTables() {
  const [player, setPlayer] = useState([
    { id: 0, position: 0, name: '', currentRating: 0, newRating: 0 }
  ])

  useEffect(() => {
    api.get('players').then(response => {
      setPlayer(response.data)
    })
  }, [])

  // useEffect(() => {
  //   api.get('players').then(response => {
  //     setPlayer(response.data)
  //   })
  // }, [])

  const classes = useStyles();

  return (
    <div>
      <form>
        <input type="number" name="position" placeholder="Posição" />
        <input type="text" name="name" placeholder="Nome" />
        <input type="number" name="currentRating" placeholder="Rating atual" />
        <button>add</button>
      </form>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Posição</StyledTableCell>
              <StyledTableCell align="right">Nome</StyledTableCell>
              <StyledTableCell align="right">Rating atual</StyledTableCell>
              <StyledTableCell align="right">Novo Rating</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {player.map((item) => (
              <StyledTableRow key={item.id}>
                <StyledTableCell component="th" scope="row">
                  {item.position}
                </StyledTableCell>
                <StyledTableCell align="right">{item.name}</StyledTableCell>
                <StyledTableCell align="right">{item.currentRating}</StyledTableCell>
                <StyledTableCell align="right">{item.newRating}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default CustomizedTables