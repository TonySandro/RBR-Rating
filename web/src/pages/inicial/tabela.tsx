import React, { FormEvent, useEffect, useState } from 'react';

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

  const [position, setPosition] = useState('')
  const [name, setName] = useState('')
  const [currentRating, setcurrentRating] = useState('')

  const [player, setPlayer] = useState([
    { id: 0, position: 0, name: '', currentRating: 0, newRating: 0 }
  ])

  const [stage, setStage] = useState([{ name: '', rootpage: 0 }])

  useEffect(() => {
    viewTable('player')
  }, [])

  function viewTable(table: string) {
    api.get(`view/${table}`).then(res => {
      setPlayer(res.data)
    })

    api.get('viewTables').then(res => {
      setStage(res.data)
    })
  }

  function handleCreate(e: FormEvent) {
    e.preventDefault();

    api.post('/new_player', {
      position,
      name,
      currentRating
    }).then(() => {
      window.location.reload()
    }).catch((err) => {
      console.log(err)
      alert('Erro na insersão!');
    })
  }

  const classes = useStyles();

  return (
    <div>
      <div className="form-pilot">
        <form onSubmit={handleCreate}>
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => { setName(e.target.value) }}
          />
          <input
            className="number"
            type="number"
            placeholder="Posição"
            value={position}
            onChange={(e) => { setPosition(e.target.value) }}
          />
          <input
            className="number"
            type="number"
            placeholder="Rating atual"
            value={currentRating}
            onChange={(e) => { setcurrentRating(e.target.value) }}
          />

          <button type="submit" >Adicionar</button>
        </form>
      </div>

      <div className="stages">
        {stage.map(item => (
          <button type="button" onClick={() => viewTable(item.name)}>{item.name}</button>
        ))}
        <form>
          <input
            type="text"
            placeholder="Nova tabela"
          />
          <button type="submit">ADD</button>
        </form>
      </div>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Posição</StyledTableCell>
              <StyledTableCell>Nome</StyledTableCell>
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
                <StyledTableCell>{item.name}</StyledTableCell>
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