# npx-card

![npm version](https://img.shields.io/npm/v/subhalingamd)

**This is my NPX card. You can know more/connect with me directly from Command Line Interface.**

Open Terminal (or any CLI) and just hit...
```bash
npx subhalingamd
```
and observe what happens next... it's as simple as that!


#### Screenshot
![screenshot](https://raw.githubusercontent.com/subhalingamd/npx-card/main/demo.png)

<hr/>

### For Developers

You can make something similar to this by yourself! Just follow the following steps:

#### npm init

Start a new `node` project and name it whatever you want. You could choose to name it after the executable you want to expose. It’s not necessary but conventions are nice, and it makes your binary more `npx` friendly.

```bash
mkdir subhalingamd
cd subhalingamd
npm init
```

Now open the new file in your favorite editor.

```javascript
#!/usr/bin/env node

console.log('hello world!')
```
Be creative and add logic to create your own card in `index.js` file.
or you can simply copy my `index.js` file and make necessary changes as required :P

#### ship it

That’s an entirely functional first release! You just need to modify your `package.json` to let `npm` know to link your executable and you are off:

```json
{
  // ...
  "bin": "./index.js",
  // ....
}
```
*By default, `npm` will expose your binary using the same name as your package.*

Share your new CLI with the world!

```bash
npm version patch
npm publish
```

Now anyone can leverage your new CLI using `npx`, without needing to install it locally:

```bash
npx $YOUR_PACKAGE_NAME
```

Now you have a globally executable script, that can leverage all of `npm`, to perform awesome utilities (or silly ideas like this). If you find you are writing a ‘big’ CLI with lots of parameters or sub-commands, you will want more options around how to define your CLI and should consider trying [yargs](https://www.npmjs.com/package/yargs) instead of [minimist](https://www.npmjs.com/package/minimist).


## Inspired From
This project was inspired from [anmol098/npx_card](https://github.com/anmol098/npx_card)


### Give this project a star ⭐ if you found it interesting