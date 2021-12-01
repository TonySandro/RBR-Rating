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
  const [media, setMedia] = useState('')

  // Para adicionar o piloto na tabela que está sendo visualizada
  const [tableSelect, setTableSelect] = useState('')

  const [player, setPlayer] = useState([
    { id: 0, position: 0, name: '', currentRating: 0, newRating: 0 }
  ])

  const [stage, setStage] = useState([{ name: '', rootpage: 0, status: 'Ativo', background: '#000' }])
  const [newStage, setNewStage] = useState('')

  useEffect(() => {
    viewTable('player')
  }, [])

  function viewTable(table: string) {
    setTableSelect(table)

    api.get(`view/${table}`).then(res => {
      // console.log(res.data)
      setPlayer(res.data)
    })

    api.get('viewTables').then(res => {
      // console.log(res.data)
      setStage(res.data)
    })
  }

  function addStage(nome: string) {
    setStage(stage.concat({ name: nome, rootpage: 0, background: '#d81414', status: 'Inativo' }))
    setTableSelect(nome)
  }

  function handleCreate(e: FormEvent) {
    e.preventDefault();

    api.post(`/new_player/${tableSelect}`, {
      position,
      name,
      media
    }).then(res => {
      window.location.reload()
      return res
    }).catch((err) => {
      console.log(err)
      alert('Erro na insersão!');
    })
  }

  const classes = useStyles();
  let countRank = 1

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
            value={media}
            onChange={(e) => { setMedia(e.target.value) }}
          />
          <input
            className="number"
            type="number"
            placeholder="Média"
            value={position}
            onChange={(e) => { setPosition(e.target.value) }}
          />

          <button type="submit">Adicionar</button>
        </form>
      </div>

      <div className="stages">
        {stage.map(item => (
          <button type="button" style={{ background: `${item.background}` }} onClick={() => viewTable(item.name)}>{item.name}</button>
        ))}

        <input
          type="text"
          placeholder="Nova tabela"
          onChange={(e) => {
            setNewStage(e.target.value)
          }}
        />
        <button type="button" onClick={() => addStage(newStage)} >ADD</button>
      </div>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Posição</StyledTableCell>
              <StyledTableCell>Nome</StyledTableCell>
              <StyledTableCell align="right">Rating Anterior</StyledTableCell>
              <StyledTableCell align="right">Rating Atual</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {player.map((item) => (
              <StyledTableRow key={item.id}>
                <StyledTableCell component="th" scope="row">
                  {countRank++}
                </StyledTableCell>
                <StyledTableCell>{item.name}</StyledTableCell>
                <StyledTableCell align="right">{item.currentRating === null ? '0' : item.currentRating}</StyledTableCell>
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