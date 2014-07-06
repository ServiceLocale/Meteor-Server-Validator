Package.describe({
  summary: "Server side validation using validator (npm)"
});

Npm.depends({ "validator": "3.16.0" });

Package.on_use(function(api) {
  if (api.export) api.export('Validator', 'server');	
  api.add_files('lib.js', 'server');
});