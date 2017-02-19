# Getting started

Add the following to `~/Config/grid.editors.config.js`

```
{
    "name": "Quote",
    "alias": "quote",
    "icon": "icon-quote",
    "view": "~/App_Plugins/Grid/PropertyEditors/blockquote.html",
    "render": "~/Views/Partials/Grid/Editors/Blockquote.cshtml"
},
{
    "name": "Factbox",
    "alias": "factbox",
    "icon": "icon-article",
    "view": "~/App_Plugins/Grid/PropertyEditors/factbox.html",
    "render": "~/Views/Partials/Grid/Editors/Factbox.cshtml"
},
{
    "name": "Display heading",
    "alias": "display-heading",
    "icon": "icon-chart-curve",
    "view": "~/App_Plugins/Grid/PropertyEditors/display-heading.html",
    "render": "~/Views/Partials/Grid/Editors/DisplayHeading.cshtml"
}
```
