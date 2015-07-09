define("dummy/app",["exports","ember","ember/resolver","ember/load-initializers","dummy/config/environment"],function(e,t,a,n,r){"use strict";var l;t["default"].MODEL_FACTORY_INJECTIONS=!0,l=t["default"].Application.extend({modulePrefix:r["default"].modulePrefix,podModulePrefix:r["default"].podModulePrefix,Resolver:a["default"]}),n["default"](l,r["default"].modulePrefix),e["default"]=l}),define("dummy/components/input-tokenfield",["exports","ember-cli-bootstrap-tokenfield/components/input-tokenfield"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/controllers/application",["exports","ember","bloodhound"],function(e,t,a){"use strict";e["default"]=t["default"].Controller.extend({autocomplete:{source:["red","blue","green","yellow","violet","brown","purple","black","white"],delay:100},autocompletePromise:t["default"].computed(function(){var e={source:["banana","apple","watermelon","pear","grape","peach","mango"],delay:100};return new t["default"].RSVP.Promise(function(a){t["default"].run.later(function(){a(e)},3e3)})}),tokensPromise:t["default"].computed(function(){var e=[{value:1,label:"one"},{value:2,label:"two"},{value:3,label:"three"}];return new t["default"].RSVP.Promise(function(a){t["default"].run.later(function(){a(e)},3e3)})}),typeahead:function(){var e=new a["default"]({local:[{value:"red"},{value:"blue"},{value:"green"},{value:"yellow"},{value:"violet"},{value:"brown"},{value:"purple"},{value:"black"},{value:"white"}],datumTokenizer:function(e){return a["default"].tokenizers.whitespace(e.value)},queryTokenizer:a["default"].tokenizers.whitespace});return e.initialize(),[null,{source:e.ttAdapter()}]}()})}),define("dummy/controllers/array",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("dummy/controllers/object",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("dummy/initializers/app-version",["exports","dummy/config/environment","ember"],function(e,t,a){"use strict";var n=a["default"].String.classify,r=!1;e["default"]={name:"App Version",initialize:function(e,l){if(!r){var d=n(l.toString());a["default"].libraries.register(d,t["default"].APP.version),r=!0}}}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,a){"use strict";function n(e,n){var r=t["default"].String.classify(a["default"].modulePrefix);a["default"].exportApplicationGlobal&&!window[r]&&(window[r]=n)}e.initialize=n,e["default"]={name:"export-application-global",initialize:n}}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,a){"use strict";var n=t["default"].Router.extend({location:a["default"].locationType});n.map(function(){}),e["default"]=n}),define("dummy/templates/-autocomplete-promise",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.2",loc:{source:null,start:{line:1,column:0},end:{line:35,column:0}},moduleName:"dummy/templates/-autocomplete-promise.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("div");e.setAttribute(a,"class","panel panel-info");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","panel-heading");var r=e.createTextNode("\n    Autocomplete with a promise\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","panel-body");var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("p"),l=e.createTextNode("Promises can be used to update the autocomplete object used by jQuery UI.");e.appendChild(r,l),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("br");e.appendChild(n,r);var r=e.createTextNode("\n\n    Controller\n    ");e.appendChild(n,r);var r=e.createElement("pre"),l=e.createTextNode("// contribed example, this data is likely to come from ember-data\nautocompletePromise: Ember.computed({\n  var autocomplete = {\n    source: ['banana','apple','watermelon','pear','grape','peach','mango'],\n    delay: 100\n  };\n\n  return new Ember.RSVP.Promise(function(resolve) {\n    Ember.run.later(function() {\n      resolve( autocomplete );\n    }, 3000); // simulate a 3 seconds delay \n  });\n})");e.appendChild(r,l),e.appendChild(n,r);var r=e.createTextNode("\n    Template\n");e.appendChild(n,r);var r=e.createElement("pre"),l=e.createTextNode('{{input-tokenfield value="banana,apple,watermelon" \n                   placeholder="Type something and hit enter"\n                   autocomplete=autocompletePromise\n                   showAutocompleteOnFocus=true}}');e.appendChild(r,l),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=new Array(1);return n[0]=e.createMorphAt(e.childAt(t,[0,3]),3,3),n},statements:[["inline","input-tokenfield",[],["value","banana,apple,watermelon","placeholder","Type something and hit enter","autocomplete",["subexpr","@mut",[["get","autocompletePromise"]],[]],"showAutocompleteOnFocus",!0]]],locals:[],templates:[]}}())}),define("dummy/templates/-autocomplete",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.2",loc:{source:null,start:{line:1,column:0},end:{line:27,column:0}},moduleName:"dummy/templates/-autocomplete.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("div");e.setAttribute(a,"class","panel panel-info");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","panel-heading");var r=e.createTextNode("\n    Using jQuery UI Autocomplete\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","panel-body");var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("p"),l=e.createTextNode("Create elegant taggable fields with copy/paste and keyboard support.");e.appendChild(r,l),e.appendChild(n,r);var r=e.createTextNode("\n\n    ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("br");e.appendChild(n,r);var r=e.createTextNode("\n\n    Controller\n    ");e.appendChild(n,r);var r=e.createElement("pre"),l=e.createTextNode("autocomplete: {\n  source: ['red','blue','green','yellow','violet','brown','purple','black','white'],\n  delay: 100\n}");e.appendChild(r,l),e.appendChild(n,r);var r=e.createTextNode("\n    Template\n");e.appendChild(n,r);var r=e.createElement("pre"),l=e.createTextNode('{{input-tokenfield value="red,green,blue" \n                   placeholder="Type something and hit enter"\n                   autocomplete=autocomplete\n                   showAutocompleteOnFocus=true}}');e.appendChild(r,l),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=new Array(1);return n[0]=e.createMorphAt(e.childAt(t,[0,3]),3,3),n},statements:[["inline","input-tokenfield",[],["value","red,green,blue","placeholder","Type something and hit enter","autocomplete",["subexpr","@mut",[["get","autocomplete"]],[]],"showAutocompleteOnFocus",!0]]],locals:[],templates:[]}}())}),define("dummy/templates/-tokens-promise",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.2",loc:{source:null,start:{line:1,column:0},end:{line:35,column:0}},moduleName:"dummy/templates/-tokens-promise.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("div");e.setAttribute(a,"class","panel panel-info");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","panel-heading");var r=e.createTextNode("\n    Set tokens with a promise\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","panel-body");var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("p"),l=e.createTextNode("Promises can be used to set the current tokens.");e.appendChild(r,l),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("br");e.appendChild(n,r);var r=e.createTextNode("\n\n    Controller\n    ");e.appendChild(n,r);var r=e.createElement("pre"),l=e.createTextNode("// contribed example, this data is likely to come from ember-data\ntokensPromise: Ember.computed(function() {\n  var tokens = [\n    {value: 1, label: 'one'},\n    {value: 2, label: 'two'},\n    {value: 3, label: 'three'}\n  ];\n\n  return new Ember.RSVP.Promise(function(resolve) {\n    Ember.run.later(function() {\n      resolve( tokens );\n    }, 3000); // simulate a 3 seconds delay \n  });\n})");e.appendChild(r,l),e.appendChild(n,r);var r=e.createTextNode("\n\n    Template\n");e.appendChild(n,r);var r=e.createElement("pre"),l=e.createTextNode('{{input-tokenfield tokens=tokensPromise \n                   autocomplete=autocomplete\n                   placeholder="Type something and hit enter"}}');e.appendChild(r,l),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=new Array(1);return n[0]=e.createMorphAt(e.childAt(t,[0,3]),3,3),n},statements:[["inline","input-tokenfield",[],["tokens",["subexpr","@mut",[["get","tokensPromise"]],[]],"autocomplete",["subexpr","@mut",[["get","autocomplete"]],[]],"placeholder","Type something and hit enter"]]],locals:[],templates:[]}}())}),define("dummy/templates/-typeahead",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.2",loc:{source:null,start:{line:1,column:0},end:{line:33,column:0}},moduleName:"dummy/templates/-typeahead.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("div");e.setAttribute(a,"class","panel panel-info");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","panel-heading");var r=e.createTextNode("\n    Using Twitter Typeahead\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","panel-body");var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("br");e.appendChild(n,r);var r=e.createTextNode("\n\n    Controller\n");e.appendChild(n,r);var r=e.createElement("pre"),l=e.createTextNode("typeahead: (function() {\n  var engine = new Bloodhound({\n    local: [{value: 'red'}, {value: 'blue'}, {value: 'green'} , \n            {value: 'yellow'}, {value: 'violet'}, {value: 'brown'}, \n            {value: 'purple'}, {value: 'black'}, {value: 'white'}],\n    datumTokenizer: function(d) {\n      return Bloodhound.tokenizers.whitespace(d.value);\n    },\n    queryTokenizer: Bloodhound.tokenizers.whitespace\n  });\n  engine.initialize();\n\n  return [null, { source: engine.ttAdapter() }];\n})()");e.appendChild(r,l),e.appendChild(n,r);var r=e.createTextNode("\n      Template\n");e.appendChild(n,r);var r=e.createElement("pre"),l=e.createTextNode('{{input-tokenfield value="red,green,blue"\n                   placeholder="Type something and hit enter"\n                   typeahead=typeahead}}');e.appendChild(r,l),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=new Array(1);return n[0]=e.createMorphAt(e.childAt(t,[0,3]),1,1),n},statements:[["inline","input-tokenfield",[],["value","red,green,blue","placeholder","Type something and hit enter","typeahead",["subexpr","@mut",[["get","typeahead"]],[]]]]],locals:[],templates:[]}}())}),define("dummy/templates/application",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.2",loc:{source:null,start:{line:1,column:0},end:{line:36,column:0}},moduleName:"dummy/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("a");e.setAttribute(a,"href","https://github.com/aethermx/ember-cli-bootstrap-tokenfield");var n=e.createElement("img");e.setAttribute(n,"style","position: absolute; top: 0; right: 0; border: 0;"),e.setAttribute(n,"src","https://camo.githubusercontent.com/652c5b9acfaddf3a9c326fa6bde407b87f7be0f4/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6f72616e67655f6666373630302e706e67"),e.setAttribute(n,"alt","Fork me on GitHub"),e.setAttribute(n,"data-canonical-src","https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png"),e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","container");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","row");var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","col-xs-12");var l=e.createTextNode("\n\n      ");e.appendChild(r,l);var l=e.createElement("div");e.setAttribute(l,"class","page-header");var d=e.createTextNode("\n        ");e.appendChild(l,d);var d=e.createElement("h1");e.setAttribute(d,"id","tokenfield");var o=e.createTextNode("Tokenfield");e.appendChild(d,o),e.appendChild(l,d);var d=e.createTextNode("\n      ");e.appendChild(l,d),e.appendChild(r,l);var l=e.createTextNode("\n\n      ");e.appendChild(r,l);var l=e.createElement("h2"),d=e.createTextNode("Install addon");e.appendChild(l,d),e.appendChild(r,l);var l=e.createTextNode("\n\n      ");e.appendChild(r,l);var l=e.createElement("pre"),d=e.createTextNode("\nember install ember-cli-bootstrap-tokenfield\n\n# if ember-cli <= 0.2.2\nember install:addon ember-cli-bootstrap-tokenfield\n      ");e.appendChild(l,d),e.appendChild(r,l);var l=e.createTextNode("\n\n      ");e.appendChild(r,l);var l=e.createElement("h2");e.setAttribute(l,"id","examples");var d=e.createTextNode("Examples");e.appendChild(l,d),e.appendChild(r,l);var l=e.createTextNode("\n\n      ");e.appendChild(r,l);var l=e.createComment("");e.appendChild(r,l);var l=e.createTextNode("\n\n      ");e.appendChild(r,l);var l=e.createComment("");e.appendChild(r,l);var l=e.createTextNode("\n\n      ");e.appendChild(r,l);var l=e.createComment("");e.appendChild(r,l);var l=e.createTextNode("\n\n      ");e.appendChild(r,l);var l=e.createComment("");e.appendChild(r,l);var l=e.createTextNode("\n\n    ");e.appendChild(r,l),e.appendChild(n,r);var r=e.createComment(" col ");e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createComment(" row ");e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createComment(" container ");e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=e.childAt(t,[3,1,1]),r=new Array(5);return r[0]=e.createMorphAt(n,9,9),r[1]=e.createMorphAt(n,11,11),r[2]=e.createMorphAt(n,13,13),r[3]=e.createMorphAt(n,15,15),r[4]=e.createMorphAt(t,6,6,a),r},statements:[["inline","partial",["autocomplete"],[]],["inline","partial",["autocomplete-promise"],[]],["inline","partial",["tokens-promise"],[]],["inline","partial",["typeahead"],[]],["content","outlet"]],locals:[],templates:[]}}())}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var a=t+"/config/environment",n=e["default"].$('meta[name="'+a+'"]').attr("content"),r=JSON.parse(unescape(n));return{"default":r}}catch(l){throw new Error('Could not read config from meta tag with name "'+a+'".')}}),runningTests?require("dummy/tests/test-helper"):require("dummy/app")["default"].create({name:"ember-cli-bootstrap-tokenfield",version:"0.0.5.9ab4f5a7"});