=======
Starcel
=======

Starcel is a *website helper template* that helps you to transforms
HTML/CSS/JS using ParcelJS_. It is intended to be *very very* simple and
straightforward to use.

It is *not* a static site generator or CMS like Gatsby_ or Hugo_.

**You use Starcel when** you really only want to build a very simple, static
website, where a CMS or anything that requires programming or a *backend* is not
necessary. You don't need 'blogging' functionality. Yet you still want *some*
features, e.g. the use of  SCSS or CSS/JS Minification.

Idea/Workflow:
==============

- Upon the build process, all files in the ``src/`` directory are copied to the
  ``build/`` directory.
- SCSS files are automatically transformed to CSS.
- All files are minified/optimized.
- Static files have a hash in their filename to overcome browser caching issues.

Example Site/Generated Site::

  $ ls -lR src/
  -rw-r--r--  1 martin  staff   825 Apr  5 20:09 index.html
  -rw-r--r--  1 martin  staff   143 Apr  5 19:46 site.js
  -rw-r--r--  1 martin  staff    87 Apr  5 19:46 site.scss
  -rw-r--r--  1 martin  staff  2514 Jan 10  2015 piet.jpg

  $ ls -lR build/
  -rw-r--r--  1 martin  staff   365 Apr  5 20:29 index.html
  -rw-r--r--  1 martin  staff  2514 Apr  5 20:29 piet.c00ffa55.jpg
  -rw-r--r--  1 martin  staff    44 Apr  5 20:29 site.225dc4b8.css
  -rw-r--r--  1 martin  staff   193 Apr  5 20:29 site.dfbb479f.js

Installation & Usage
====================

#) Checkout this Github project and rename the foldername to your project.
   Starcel is not a not a CMS, not a npm project. Just a bunch of helper files
   that you can customize to your needs.

#) Install the necessary node files: ``$ npm install``

#) Edit the files in the ``src/``. Delete what you don't need. This is only
   an example.

#) Run the ``build`` command and upload the generated files to your server.

Commands
========

* ``$ npm run build`` —  Compiles all files into the ``build/`` folder. All
  files are   optimized and minimized. These are the files you will *manually*
  upload to the server.

* ``$ npm run devserver`` — Opens a webserver on ``localhost:1234``
  serving the transformed files, with autoreload and all sugar such as
  source-maps.

* ``$ npm run buildserver`` — Opens a webserver on ``localhost:1234`` serving
  the content of the ``build/`` directory so you can see whats later been
  deployed to the server. This has no auto-reload or anything added.


.. _ParcelJS: https://parceljs.org/
.. _Gatsby: https://www.gatsbyjs.org/
.. _Hugo: https://gohugo.io/
