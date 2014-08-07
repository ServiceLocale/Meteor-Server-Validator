Package.describe({
  summary: "Server side validation using validator (npm)",
  version: "1.1.0",
  git: "https://github.com/ServiceLocale/Meteor-Server-Validator.git"
});

Npm.depends({ "validator": "3.16.0" });

Package.on_use(function(api) {
  api.versionsFrom("METEOR-CORE@0.9.0-atm");
  if (api.export) api.export('Validator', 'server');	
  api.add_files('lib.js', 'server');
});