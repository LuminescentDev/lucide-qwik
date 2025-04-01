import { releaseChangelog, releasePublish, releaseVersion } from 'nx/release';
import yargs from 'yargs';

const options = await yargs(process.argv.slice(2))
  .version(false)
  .option('version', {
    description:
      'Explicit version specifier to use, if overriding conventional commits',
    type: 'string',
  })
  .option('dryRun', {
    alias: 'd',
    description:
      'Whether to perform a dry-run of the release process, defaults to true',
    type: 'boolean',
    default: true,
  })
  .option('verbose', {
    description: 'Whether or not to enable verbose logging, defaults to false',
    type: 'boolean',
    default: false,
  })
  .parseAsync();

const { workspaceVersion, projectsVersionData } = await releaseVersion({
  specifier: options.version,
  // stage package.json updates to be committed later by the changelog command
  stageChanges: true,
  dryRun: options.dryRun,
  verbose: options.verbose,
});

// This will create a release on GitHub
await releaseChangelog({
  versionData: projectsVersionData,
  version: workspaceVersion,
  dryRun: options.dryRun,
  verbose: options.verbose,
});

// An explicit null value here means that no changes were detected across any package
// eslint-disable-next-line eqeqeq
if (workspaceVersion === null) {
  console.log(
    '⏭️ No changes detected across any package, skipping publish step altogether',
  );
} else {
  const publishStatus = await releasePublish({
    dryRun: options.dryRun,
    verbose: options.verbose,
  });
  let statuscode = 0;
  Object.entries(publishStatus).forEach(([project, status]) => {
    console.log(`📦 ${project}: ${status.code == 0 ? 'Success' : 'Fail'}`);
    if (status.code == 1) {
      statuscode = 1;
    }
  });
  process.exit(statuscode);
}