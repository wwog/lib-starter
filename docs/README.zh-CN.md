# lib-name

[English](../README.md) | **中文**

## template Usage

如果你使用github,在.github文件夹配置你的工作流。你可以选择**Github-script**用JavaScript编写工作流。

如果你不使用github,可以安装husky和lint-staged来配置你的工作流。

1.替换所有的 "lib-name" 你的 "libName"

```bash
#install pnpm
corepack enable
#corepack 使用 SemVer,latest不可用。
#使用其它的版本,替换package.json中的packageManager字段。
corepack prepare pnpm@lasete --activate
```

2.全局安装degit复制此仓库

```bash
pnpm add -g degit

degit wwog/lib-starter
```

3.根据编辑器，安装prettier和eslint插件


## Install

## Usage

## Options

## License

MIT License.
