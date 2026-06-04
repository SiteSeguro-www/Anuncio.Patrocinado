// Default Worker JS for Exoclick Push Notifications
if (typeof importScripts === 'function') {
  try {
    importScripts('https://js.wpnsrv.com/sw.js');
  } catch (e) {
    console.error('Failed to import Exoclick SW: ', e);
  }
}
