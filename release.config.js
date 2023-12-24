module.exports = {
  branches: ['main'],
  plugins: [
    '@semantic-release/npm',
    '@semantic-release/git',
  ],

  git: {
    assets: ['package.json', 'README.md'],
    message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
  }
};
