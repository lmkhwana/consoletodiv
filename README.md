# @lmkhwana/consoletodiv

[![install size](https://packagephobia.com/badge?p=@lmkhwana/consoletodiv)](https://packagephobia.com/result?p=@lmkhwana/consoletodiv)

Displays console messages in a div.

## Install

```
$ npm install @lmkhwana/consoletodiv
```

## Usage

In this example we are gonne be using Angular 9

```html
<!-- This file is app.component.html -->
<div class="container-fluid">
  <router-outlet></router-outlet>
  
  <!-- Add this code block -->
  <pre id="logger" style="text-transform:capitalize;
                          background-color: #f5f5f5;
                          margin-bottom: 0;"></pre>
</div>

```

```js
// This file is app.component.ts 

import consoletodiv  from '@lmkhwana/consoletodiv';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor() {
   
  }

  ngOnInit() {
    consoletodiv('logger'); // Logger is the id of the 'pre' on the app.component.html
    console.log('testing');
  }
}

```

When you run it, the console messages should appear at the bottom of your page.

![snapshot of console messages](https://github.com/[username]/[reponame]/blob/[branch]/image.jpg?raw=true)
