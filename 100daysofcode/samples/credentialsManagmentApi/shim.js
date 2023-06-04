
(function() {
    // Return early if CM API is not available or the new features are already
    // present.
    if (!navigator.credentials || navigator.credentials.preventSilentAccess)
      return;
  
    // Polyfill for navigator.credentials.preventSilentAccess.
    navigator.credentials.preventSilentAccess =
        navigator.credentials.requireUserMediation;
  
    // Polyfill for navigator.credentials.get supporting a mediation enum.
    var oldGet = navigator.credentials.get.bind(navigator.credentials);
    navigator.credentials.get = function(options) {
      // If mediation is specified, check whether it contains a valid value and
      // raise a TypeError otherwise.
      var validOptions = ['silent', 'optional', 'required'];
      if (options['mediation'] &&
          validOptions.indexOf(options['mediation']) === -1) {
        throw new TypeError(
            "The provided value '" + options['mediation'] +
            "' is not a valid enum value.");
      }
  
      // mediation: 'required' can not be supported in older browsers, so fall
      // back to 'optional' and issue a warning.
      if (options['mediation'] === 'required') {
        console.warn(
            "mediation: 'required' can not be supported in older browsers, " +
            "using mediation: 'optional' instead.");
      }
  
      options['unmediated'] = options['mediation'] === 'silent';
      return oldGet(options);
    }
  
    // Polyfill for navigator.credentials.create.
    navigator.credentials.create = function(options) {
      var error_msg = "NotSupportedError: Only 'password' and 'federated'" +
          'credential types are currently supported.';
  
      // Check whether exactly one option is specified, reject the Promise
      // otherwise.
      return new Promise(function(resolve, reject) {
        if (Object.keys(options).length !== 1) {
          reject(error_msg);
          return;
        }
  
        // Dispatch to the appropriate constructors for 'password' and
        // 'federated'.
        if ('password' in options) {
          try {
            resolve(new PasswordCredential(options['password']));
          } catch (e) {
            reject(e);
          }
          return;
        }
  
        if ('federated' in options) {
          try {
            resolve(new FederatedCredential(options['federated']));
          } catch (e) {
            reject(e);
          }
          return;
        }
  
        // Reject anything else.
        reject(error_msg);
      });
    };
  }());