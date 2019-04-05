/**
 * Sample Javascript File. Remove everything you don't need.
 *
 * You can import packages directly from the node_modules directory here.
 * These files get combined and compressed into the final `site.js` file.
 */
import alsort from '../node_modules/alphanum-sort';
console.log('Sorted characters: ', alsort('k,e,t,c,h,u,p'.split(',')));

document.addEventListener('DOMContentLoaded', (event) => {
  document.body.classList.add('js-loaded');
});
