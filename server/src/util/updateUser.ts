import db from '../database/connection';
import newRating from '../util/newRating';

export default async function updateUser(id: string, table: string, newRat: number, position: number) {
    const newCurrentRating = newRat
    await db(`${table}`).update({ currentRating: newCurrentRating, position: position }).where('id', id).then(() => {
        console.log(" Posição e rating atual atualizados.")
    })

    const novoRating = await newRating(id, table)
    await db(`${table}`).update({ newRating: novoRating }).where('id', id).then(() => {
        console.log(novoRating + " Inserido")
    })

    return novoRating
}