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

  },
};
