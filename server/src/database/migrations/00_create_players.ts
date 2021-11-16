import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('players', table => {
    table.increments('id').primary();
    table.integer('position').notNullable();
    table.string('name').notNullable();
    table.integer('currentRating');
    table.integer('newRating');
  });
}

export async function upRally(knex: Knex) {
  return knex.schema.createTable('Rally', table => {
    table.increments('id').primary();
    table.integer('position').notNullable();
    table.string('name').notNullable();
    table.integer('currentRating');
    table.integer('newRating');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('players');
}