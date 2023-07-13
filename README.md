# lib-name

**English** | [中文](./docs/README.zh-CN.md)

## template Usage

If you use github, configure your workflow in the .github folder.github-script.you can choose **Github-script** write workflows in JavaScript

If you don't use github, you can install husky and lint-staged to configure your workflow.

1.Replace all "lib-name" with your libName

```bash
git config core.autocrlf false
#install pnpm
corepack enable
#version must be SemVer,you can run NPM info to check the latest SemVer
#replace package.json pnpm version
corepack prepare pnpm@lasete --activate
```

2.install degit copy the repository

```bash
pnpm add -g degit

degit wwog/lib-template
```

3.according to the editor,install prettier and eslint plugin


## Install

## Usage

## Options

## License

MIT License.
