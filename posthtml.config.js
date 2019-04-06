module.exports = {
  plugins: {

    // Automatically add `alt=""` to all images which don't have an alt
    // attribute yet.
    'posthtml-alt-always': {},

    // Automatically add `width="<actual size>" height="<actual size>"` to all
    // images which have `width="auto" height="auto"` set as an attribute.
    'posthtml-img-autosize': {
      'root': './src',
    },

    // Similar to SSI this allows you to include re-usable HTML snippets.
    // Syntax is: <include src="./header.html"></include>
    'posthtml-include': {
      'root': './src',
    },

  },
};
