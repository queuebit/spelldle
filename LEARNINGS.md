### 20220214

- [~] setup GitHub Copilot setup to use for `getRandomWord`
  - I signed up for the [waitlist](https://github.com/features/copilot/signup)
- [x] prettier isn't working for typescript files
  - VSCode [settings](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode#default-formatter) were set for `[javascript]` and not [all languages.

---

### 20220211

- [x] figure out `vitest/ui`
      `yarn test:ui --open`
- [x] figure out why I am not getting typescript errors
  - <https://code.visualstudio.com/docs/languages/typescript>
- [x] investigate and resolve problems
  - NOTE: problems seem to have gone away with `npm install -g typescript`

### 20220210

```
~/learn/spelldle % yarn create vite my-vue-app --template react-ts
zsh: command not found: yarn
~/learn/spelldle % npm --version
6.12.1
~/learn/spelldle % node --version
v12.13.1
```

- [x] update node, npm - https://nodejs.org/en/ - `16.14.0 LTS`

```
This package has installed:
•	Node.js v16.14.0 to /usr/local/bin/node
•	npm v8.3.1 to /usr/local/bin/npm
Make sure that /usr/local/bin is in your $PATH.
```

- [x] switch to install using `nvm`

```
~/learn/spelldle % node --version
v12.13.1
~/learn/spelldle % nvm use 16
N/A: version "16 -> N/A" is not yet installed.

You need to run "nvm install 16" to install it before using it.
~/learn/spelldle % nvm install 16
Downloading and installing node v16.14.0...
Downloading https://nodejs.org/dist/v16.14.0/node-v16.14.0-darwin-x64.tar.xz...
################################################################################################# 100.0%
Computing checksum with shasum -a 256
Checksums matched!
Now using node v16.14.0 (npm v8.3.1)
```

- [x] should I use npm or yarn?
  - I'd like to use npm (default), but going to use yarn since that is what Harry did and I am trying to reduce the number of decisions / changes.
- [x] install yarn

```
~/learn/spelldle % npm install --global yarn

added 1 package, and audited 2 packages in 856ms

found 0 vulnerabilities
npm notice
npm notice New minor version of npm available! 8.3.1 -> 8.4.1
npm notice Changelog: https://github.com/npm/cli/releases/tag/v8.4.1
npm notice Run npm install -g npm@8.4.1 to update!
npm notice
```
