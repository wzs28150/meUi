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

`json/` -- JSON data file  
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

###### `meUi.js`

```sh
 * meui.exists      # To determine whether the existence of DOM
 * meui.aspectratio # To solve the DOM size
 * meui.inviewport  # To determine whether the dom in viewport
 * meui.animated    # To solve the animation
 * meui.shell       # shell
 * meui.hashset     # To solve the hash
 * meui.templates   # To solve templates fragment
 * meui.loadMore    # loadMore
 * meui.medel       # Model
 * Swiper           # Swiper
```

###### `meUI.action.js`
Example:
```sh
meui.Index_action = (function() {
    "use strict";
    var stateMap = {
      // setting
    },
        jqueryMap = {}, # jquery collections cache
        setJqueryMap,
        initModule;
    setJqueryMap = function() {

    };
    initModule = function($data, $setting) {
        meui.Nav.initModule(0); # nav selected state i: nav.on.index
    };
    return {
        initModule: initModule, # export
    };
}());
```
```sh
meui.Nav.initModule(i);   # nav selected state i: nav.on.index
```
