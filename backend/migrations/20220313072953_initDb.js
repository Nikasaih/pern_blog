export const up = async (knex) => {
  await knex.schema.createTable("users", (table) => {
    table.increments("id");
    table.text("email").notNullable().unique();
    table.text("passwordHash").notNullable();
    table.text("passwordSalt").notNullable();
    table.text("role").notNullable();
    table.boolean("hasConfirmEmail").notNullable();
    table.text("displayName").notNullable();
    table.datetime("suspendedAt");
    table.integer("suspensionAmount").notNullable();
    table.datetime("supensionDuration");
  });

  await knex.schema.createTable("posts", (table) => {
    table.increments("id");
    table.text("title");
    table.text("content");
    table.datetime("publicatedAt");
    table.boolean("isPublish");
    // relation
    table.integer("authorId").notNullable();
    table.foreign("authorId").references("id").inTable("users");
  });
  await knex.schema.createTable("comments", (table) => {
    table.increments("id");
    table.text("content").notNullable();
    table.datetime("writedAt").notNullable();
    // relation
    table.integer("authorId").notNullable();
    table.integer("postId").notNullable();
    table.foreign("authorId").references("id").inTable("users");
    table.foreign("postId").references("id").inTable("posts");
  });
};

export const down = async (knex) => {
  await knex.schema.dropTable("comments");
  await knex.schema.dropTable("posts");
  await knex.schema.dropTable("users");
};
