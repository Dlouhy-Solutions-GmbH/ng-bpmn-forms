import { releaseChangelog, releasePublish, releaseVersion } from 'nx/release';

(async () => {
  const { workspaceVersion, projectsVersionData } = await releaseVersion({});

  const changelog = await releaseChangelog({
    versionData: projectsVersionData,
    version: workspaceVersion,
  });

  const publishResult = await releasePublish({
    registry: 'https://registry.npmjs.org/',
    access: 'public',
  });
  process.exit(
    Object.values(publishResult).every((result) => result.code === 0) ? 0 : 1
  );
})();
