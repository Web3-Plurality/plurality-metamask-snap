# Plurality Secrets Snap
This snap contains functionality for zero-knowledge and DID secrets creation. This snap is to be used in conjunction with plurality's dashboard and widget. 

## To run
```
npm install && npm run start
```

## To publish
- Update the version in `package.json` file
- Run `npm run build:clean` and verify in `snap.manifest.json` file if the changes (version etc.) were reflected from package.json
- Run `npm version` and verify if the version is updated correctly locally
- Run `npm publish` to publish it to public npm registry

## Release
- The package is released on NPM registry via a build pipeline on merge to main
