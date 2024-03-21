import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string("name").index(),
      table.string("email").index().unique(),
      table.string("username").index().nullable().unique(),
      table.string("password"),
      table.date("email_verified_at"),
      table.string("phone_number").index().nullable(),
      table.integer("status").defaultTo(0).comment("0=>inactive,1=>active"),
      table.string("profile_image").nullable(),
      table.string("city").nullable(),
      table.string("state").nullable(),
      table.string("country").nullable(),
      table.string("country_code",20).nullable(),
      table.date("last_login").defaultTo(null);
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
