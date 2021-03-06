const yargs = require('yargs');
const yargv = yargs
  .strict()
  .usage('Usage: test262-harness [options] <test-file-glob>')
  .demand('hostType')
  .describe('hostType', 'eshost host type (ch, d8, jsshell, chrome, firefox, etc.)')
  .describe('hostPath', 'path to eshost host binary')
  .describe('hostArgs', 'command-line arguments to pass to eshost host')
  .describe('test262Dir', 'test262 root directory')
  .describe('includesDir', 'directory where helper files are found')
  .describe('threads', 'number of threads to use')
  .nargs('threads', 1)
  .default('threads', 1)
  .alias('threads', 't')
  .describe('reporter', 'select a reporter to use (simple or json)')
  .nargs('reporter', 1)
  .alias('reporter', 'r')
  .default('reporter', 'simple')
  .help('help')
  .alias('help', 'h')
  .example('test262-harness path/to/test.js')

exports.argv = yargv.argv;
