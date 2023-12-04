# `src` Directory

In the `src` directory, is often where we put all the codes of the project.

`src` stands for "source", which basically is your source code.

Usually for your project structure, you will want to put all your code as much
as possible within the `src` directory, as the root directory is often flooded
with configuration files such as formatter configs, linter configs, CI/CD
pipelines, build files, etc...

Over here in this project you can see that for your Backend Development (BED)
project, all the files are equally split into various directories. This helps
us to structure the code much nicer, and allow us to find our files easier.

## Files

Over in this `src` directory, you should really only have this one file: `app.js`

### `app.js`

In [app.js](app.js) is basically where you combine together all the files, think of this
as the pot for all the ingredients you cooked up from other directories. And
export it for the [server.js](../server.js) to cook. (Let it cook! 👀)

Some people might even skip this file and just chug things into the
[server.js](../server.js), and that's entirely OK.

## Directories

Over here is where we have the "major groups" of the folder structure. Meaning
that often what's here in the `src` directory is the "parent group" of the
different part of your backend server, such as your routers, middlewares,
controllers, etc...

### `routes`

In the [routes](routes) directory, is often where we store all the
declaration of the project's routes.

This is the directory where we structure the routes without containing any logic
so that we can properly follow the endpoint routes. I recommend that you also
keep track in some documentation of all your endpoints to help you keep track.

However, I also recommend a directory based routing folder structure, it will
possibly help you to navigate even better.

### `db`

In the [db](db) directory, we really only include all the database stuff,
and in the BED case, we will only include a [db.js](db/db.js) here to
initialise your database pool.

### `controllers`

In the [controllers](controllers) directory, is where you declare the
handler / controller for each routes.

Think of this directory as, for every endpoint you have in the project, you
need to have controller. Though you can group multiple controllers in each file.
However, I recommend splitting into 1 controller per file, to have yourself able
to navigate much easier.

However, it is up to you. I will show you examples of both.

### `models`

In the [models](models) directory, you will want to put all your _"database function"_.

Think of the [models](models) directory is a place where you import the data.

The _"database functions"_ should generally return you the data and the error.
This is so that you can then handler at your controller level.

### `middlewares`

In the [middlewares](middlewares) directory, it is as straight forward as the directory name
is. Put your middlewares here.

Every middleware you have, should be an individual file.

### `utils`

_This directory is optional._

In the [utils](utils) directory, it contains utilities functions that you might re-use
across the project. They can be some random functions that you might need
to re-write over and over.

More details is covered in the [directory's README](utils/README.md).
