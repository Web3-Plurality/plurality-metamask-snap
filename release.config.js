module.exports = {
  branches: ['main'],
  plugins: [
    '@semantic-release/npm',
    '@semantic-release/git',
    '@semantic-release/github'
  ],

  git: {
    assets: ['package.json', 'snap.manifest.json'],
    message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
  }
};

