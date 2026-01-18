# Hello, world!
Hello, my name is PicelBoi. I'm 16 years okd and I work on multiple projects and such.

## Known programming languages 
(Ranked in terms of how well I know then)
1. Python (4-6 years of experience, started somewhere in 2020-2021 I think)
2. JavaScript (1 year of experience (early 2025))
3. C# (A few weeks of experience (started this year! 2026)

## Known frameworks
- Astro.js

## Known Projects:
- MistWX-i2Me (An data encoder for the IntelliStar 2 series made by the Weather Channel.)
- POD2GLB (A fork that fixes a few bugs and adds a but load of features compared to the original script. Converts POD files to glTF binary files, specifically meant for the now discontinued mobile social media app Miitomo.)
- Tomodachi Life Personality Quiz Repatched (A patched version of a personality quiz used to promote Tomodachi Life.)

To learn more, check out my website, https://picelboi.xyz.

## Hackatime
<!--START_SECTION:waka-->
<!--END_SECTION:waka-->

## Releases
{{range recentReleases 5}}
- **Name**: {{.Name}}  
  **Git Tag**: {{.LastRelease.TagName}}  
  **URL**: {{.LastRelease.URL}}  
  **Published**: {{humanize .LastRelease.PublishedAt}}  
{{end}}

## Pull Requests
{{range recentPullRequests 5}}
- **Title**: {{.Title}}  
  **URL**: {{.URL}}  
  **State**: {{.State}}  
  **CreatedAt**: {{humanize .CreatedAt}}  
  **Repository name**: {{.Repo.Name}}  
  **Repository description**: {{.Repo.Description}}  
  **Repository URL**: {{.Repo.URL}}  
{{end}}

## Contributions
{{range recentContributions 5}}  
- **Name**: {{.Repo.Name}}  
  **Description**: {{.Repo.Description}}  
  **URL**: {{.Repo.URL}})  
  **Occurred**: {{humanize .OccurredAt}}  
{{end}}

## Most stars
{{range popularRepos "PicelBoi" 5}}  
- **Name**: {{.Name}}  
  **NameWithOwner**: {{.NameWithOwner}}  
  **Description**: {{.Description}}  
  **URL**: {{.URL}})  
  **Stars*: {{.Stargazers}}  
{{end}}