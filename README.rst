=======
Starcel
=======

Starcel is a *static page generator* that helps you to transforms HTML/CSS/JS
using ParcelJS_. It is *not* a full-blown static site generator or CMS like
Gatsby_ or Hugo_.

**You use Starcel when** you really only want to build a very simple, static
website, most often a one-pager.

You don't need CMS or anything that requires a 'backend'. You don't need
blogging functionality.

You need SCSS, auto-reloading during development, compression and minification
of the generated sources.

You don't want to re-invent the wheel every time.

Workflow:
=========

- ``src/`` folder is where all your project files are located.

  ``build/`` folder is where the compiled and compressed files are generated.
  The content of this folder is later deployed to a webserver. This is done in
  the ``npm run build`` process.

- SCSS files are automatically compiled to CSS.

- HTML files run through posthtml_ where they are gently optimized. See the
  ``posthtml.config.js`` file whats going on.

- All files are minified/optimized.

- Static files have a hash in their filename to overcome browser caching issues.

- You will manually upload the files in ``build/`` to a webserver. Or you add
  some fancy rsync command to do it for you on the fly.

Example Project Site / Generated Site::

  $ ls -lR src/
  -rw-r--r--  1 martin  staff   825 Apr  5 20:09 index.html
  -rw-r--r--  1 martin  staff  2514 Jan 10  2015 piet.jpg
  -rw-r--r--  1 martin  staff   143 Apr  5 19:46 site.js
  -rw-r--r--  1 martin  staff    87 Apr  5 19:46 site.scss

  $ npm run build

  $ ls -lR build/
  -rw-r--r--  1 martin  staff   365 Apr  5 20:29 index.html
  -rw-r--r--  1 martin  staff  2514 Apr  5 20:29 piet.c00ffa55.jpg
  -rw-r--r--  1 martin  staff    44 Apr  5 20:29 site.225dc4b8.css
  -rw-r--r--  1 martin  staff   193 Apr  5 20:29 site.dfbb479f.js

Installation & Usage
====================

#) Checkout this Github project and rename the foldername to your project name::

    $ git clone git@github.com:bartTC/starcel.git my-project-name
    $ cd my-project-name

#) Install the helper files::

    $ npm install

#) Edit the files in the ``src/``. Delete what you don't need. This is only
   an example.

#) Run the ``build`` command and upload the generated files to your server::

    $ npm run build

#) Upload the generated files in ``build/`` to your webserver.

Commands
========

* ``$ npm run build`` —  Compiles all files into the ``build/`` folder. All
  files are   optimized and minimized. These are the files you will *manually*
  upload to the server.

* ``$ npm run devserver`` — Opens a webserver on ``localhost:1234``
  serving the transformed files, with auto-reload of all files on changes,
  and additional goodies such as source-maps.

* ``$ npm run buildserver`` — Opens a webserver on ``localhost:1234`` serving
  the content of the ``build/`` directory so you can see whats later been
  deployed to the server. This has no auto-reload enabled.


.. _ParcelJS: https://parceljs.org/
.. _Gatsby: https://www.gatsbyjs.org/
.. _Hugo: https://gohugo.io/
.. _posthtml: https://github.com/posthtml/posthtml
