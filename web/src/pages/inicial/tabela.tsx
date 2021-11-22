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

  // Para adicionar o piloto na tabela que está sendo visualizada
  const [tableSelect, setTableSelect] = useState('')

  const [player, setPlayer] = useState([
    { id: 0, position: 0, name: '', currentRating: 0, newRating: 0 }
  ])

  const [stage, setStage] = useState([{ name: '', rootpage: 0, status: 'Ativo', background: '#000' }])
  const [newStage, setNewStage] = useState('')

  useEffect(() => {
    viewTable('player')
    // ranking()
  }, [])

  // function ranking() {
  //   let copia = [];
  //   for (let i = 0; i < player.length; i++) {
  //     let index = 0;
  //     let maior = 0;
  //     let nome = ''
  //     for (let j = 0; j < player.length; j++) {
  //       if (player[j].newRating >= maior || player[j].name !== nome) {
  //         maior = player[j].newRating;
  //         index = j;
  //         nome = player[j].name
  //       }
  //     }
  //     copia.push(player[index]);
  //   }
  // }

  function viewTable(table: string) {
    setTableSelect(table)

    api.get(`view/${table}`).then(res => {
      console.log(res.data)
      setPlayer(res.data)
    })

    api.get('viewTables').then(res => {
      console.log(res.data)
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
      name
    }).then(res => {
      window.location.reload()
      return res
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