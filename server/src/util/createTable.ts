import db from '../database/connection';

export default async function createTable(tab: string) {
    const trx = await db.transaction();

    try {
        await trx.schema.createTable(`${tab}`, table => {
            table.increments('id').primary();
            table.integer('position').notNullable();
            table.string('name').notNullable();
            table.integer('currentRating');
            table.integer('newRating');
        });


        return await trx.commit()
    } catch (err) {
        return ({
            error: 'Unexpected error while creating new table'
        })
    }
}