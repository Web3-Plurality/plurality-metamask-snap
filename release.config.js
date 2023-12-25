module.exports = {
  branches: ['main'],
  plugins: [
    '@semantic-release/npm',
    '@semantic-release/git',
  ],

  git: {
    assets: ['package.json', 'snap.manifest.json'],
    message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
  }
};

