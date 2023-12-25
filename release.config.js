module.exports = {
  branches: ['main'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/npm',
    [
      '@semantic-release/exec',
      {
        'prepareCmd': 'sed -i "s/\\\"version\\\": \\\"[^\\\"]*\\\"/\\\"version\\\": \\\"${nextRelease.version}\\\"/" snap.manifest.json'
      }
    ],
    '@semantic-release/git',
    '@semantic-release/github'
  ],
  git: {
    assets: ['package.json', 'snap.manifest.json'],
    message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
  }
};
