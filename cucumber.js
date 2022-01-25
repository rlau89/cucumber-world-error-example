const common = [
  '--require-module ts-node/register',
  '--require features/**/*.ts',
  '--format progress',
  '--format rerun:@rerun.txt',
  '--publish-quiet'
].join(' ')

module.exports = {
  default: `${common}`,
  only: `${common} --name "@only"`,
  rerun: `${common} @rerun.txt`
}
