# Angular GitHub Buttons
GitHub buttons without the iframe, rewritten in Angular.  

Choose from two styles:  
- ntkme: https://buttons.github.io/  
- mdo: https://ghbtns.com/  

### Demo
https://typectrl.github.io/ngx-github-buttons/  

### Install
```sh
npm i @ctrl/ngx-github-buttons
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
Compilicated. This project is MIT licensed, but each set of buttons have their own license which must be respected.  
The mdo buttons are Licensed [Apache 2](https://github.com/mdo/github-buttons/blob/master/LICENSE.md)  
The ntkme buttons are Licensed [BSD 2-clause](https://github.com/ntkme/github-buttons/blob/master/LICENSE.md)  
