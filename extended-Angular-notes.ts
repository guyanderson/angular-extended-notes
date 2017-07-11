

$ npm install -g @angular/cli@1.0.0 // once?

//=============start project==============

$ ng new project-name //start new project

$ bower init

/bower_components // add to .git ignore

$ bower install bootstrap --save // install bootstrap

"apps": [
    {
      ...
      ],
      ...
      "styles": [
        "styles.css",
        "../bower_components/bootstrap/dist/css/bootstrap.css" //add this line to- angular-cli.json (dont forget comma after "styles.css", )

//============tips======================

$ ng g pipe pipe-name //create new pipe

$ ng g class model-name.model //create new model

ng g service object-name.service // create a service

$ ng g class class-name.model // create new class

$ ng g component component-name // create new component

$ ng lint // look for bugs

<a routerLink="path-from-a-route-in-appRoutes">Link Text</a> // generic routerLink, The path included must match the path property from the route entry in the router's appRoutes array
