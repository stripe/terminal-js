'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var V1_URL = 'https://js.stripe.com/terminal/v1';

var injectScript = function injectScript() {
  var script = document.createElement('script');
  script.src = V1_URL;
  var headOrBody = document.head || document.body;

  if (!headOrBody) {
    throw new Error('Expected document.body not to be null. Terminal requires a <body> element.');
  }

  headOrBody.appendChild(script);
  return script;
}; // TODO(jdivock): re-enable when we have a proper mechanism to track metrics
// const registerWrapper = (stripe: any): void => {
//   if (!stripe || !stripe._registerWrapper) {
//     return;
//   }
//
//   stripe._registerWrapper({name: 'terminal-js', version: "0.5.0"});
// };


var stripePromise = null;
var loadScript = function loadScript() {
  // Ensure that we only attempt to load Stripe.js at most once
  if (stripePromise !== null) {
    return stripePromise;
  }

  stripePromise = new Promise(function (resolve, reject) {
    if (typeof window === 'undefined') {
      // Resolve to null when imported server side. This makes the module
      // safe to import in an isomorphic code base.
      resolve(null);
      return;
    }

    if (window.StripeTerminal) {
      resolve(window.StripeTerminal);
      return;
    }

    var script = document.querySelector("script[src=\"".concat(V1_URL, "\"], script[src=\"").concat(V1_URL, "/\"]")) || injectScript();
    script.addEventListener('load', function () {
      if (window.StripeTerminal) {
        resolve(window.StripeTerminal);
      } else {
        reject(new Error('StripeTerminal not available'));
      }
    });
    script.addEventListener('error', function () {
      reject(new Error('Failed to load StripeTerminal'));
    });
  });
  return stripePromise;
};

var loadStripeTerminal = function loadStripeTerminal() {
  return loadScript();
};

exports.loadStripeTerminal = loadStripeTerminal;
