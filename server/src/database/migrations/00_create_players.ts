import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('players', table => {
    table.increments('id').primary();
    table.integer('position').notNullable();
    table.string('name').notNullable();
    table.integer('oldRating').notNullable();
    table.integer('newRating').notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('players');
}