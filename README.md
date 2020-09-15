![ngx-github-buttons](https://raw.githubusercontent.com/typectrl/ngx-github-buttons/master/src/assets/share.png)

# ngx-github-buttons [![npm](https://img.shields.io/npm/v/@ctrl/ngx-github-buttons.svg)](https://www.npmjs.com/package/@ctrl/ngx-github-buttons) [![CircleCI](https://circleci.com/gh/TypeCtrl/ngx-github-buttons.svg?style=svg)](https://circleci.com/gh/TypeCtrl/ngx-github-buttons) 

> GitHub buttons without the iframe, for Angular

### Demo
https://ngx-github-buttons.vercel.app 

__Choose from two styles__:  
- ntkme: https://buttons.github.io/  
- mdo: https://ghbtns.com/  

### Install
```console
npm install @ctrl/ngx-github-buttons
```

### Use
Import the component
```ts
import { NtkmeButtonModule } from '@ctrl/ngx-github-buttons';
// or
import { MdoButtonModule } from '@ctrl/ngx-github-buttons';
``` 
Use the component
```html
<ntkme-github-button
  user="angular"
  repo="angular"
  >
</ntkme-github-button>
```  
or  
```html
<mdo-github-button
  user="angular"
  repo="angular"
  >
</mdo-github-button>
```  

### API
| Input        | Type    | default | Description                                                        |
| ------------ | ------- | ------- | ------------------------------------------------------------------ |
| user         | string  |         | user or org                                                        |
| repo         | string  |         | repository name                                                    |
| type         | string  | `star`  | `star`, `follow`, `watch`, `fork`. ntkme only: `issue`, `download` |
| count        | boolean | `false` | show count of stars, issues, followers etc.                        |
| size         | string  | `'none'`| `'large'` for a bigger size button                                 |
| standardIcon | boolean | `false` | ntkme only: use the github logo instead of other icons             |


### License
This project is MIT licensed, but each set of buttons have their own license.  
The mdo buttons are Licensed [Apache 2](https://github.com/mdo/github-buttons/blob/master/LICENSE.md)  
The ntkme buttons are Licensed [BSD 2-clause](https://github.com/ntkme/github-buttons/blob/master/LICENSE.md)  

---

> GitHub [@scttcper](https://github.com/scttcper) &nbsp;&middot;&nbsp;
> Twitter [@scttcper](https://twitter.com/scttcper)
