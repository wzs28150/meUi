![Alt text](uploadfile/logo.png)
> This is a work in the project, the use of SPA. As a beginner, I summarize it to facilitate future use.

#### file structure  
`dist/` -- Core file
* `.sass-cache/` -- sass cache
* `css/` -- css
* `images/` -- images
* `sass/` -- sass file
* `scripts/` -- js file
  + `meUI.js` -- Core JS file
  + `meUI.action.js` -- Controller file  

`tpl/` -- template file  
`tpl/` -- uploadfile

#### methods

```sh
$(function() {
    "use strict";
    meui.initModule({
        ishash: true,                # Whether to open the hash
        url: 'http://api.xxx.com/',  # api url  
        api: 'api.php/',             # api Entry file
        tpl: 'tpl',                  # Template fragment folder
        container: $('#main')        # container jquery obj
    });

});
```

#### js Modular
* Module format
```sh
meui.xxx = (function() {
    "use strict";
    var initModule;
    initModule = function($setting) {

    };
    return {
        initModule: initModule # Unified export
    };
}());
```
