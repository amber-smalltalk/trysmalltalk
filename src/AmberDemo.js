define("amber-demo/AmberDemo", ["amber/boot", "amber_core/Web"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('AmberDemo');
$core.packages["AmberDemo"].innerEval = function (expr) { return eval(expr); };
$core.packages["AmberDemo"].transport = {"type":"amd","amdNamespace":"amber-demo"};

$core.addClass('DemoHeader', $globals.Widget, ['demotext'], 'AmberDemo');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.DemoHeader.comment="DemoHeader is a branding Widget is intended to add the Amber version to an Amber example demo type pages.\x0a\x0aYou call the class methods #begin or #begin: with a text message to add a text message to the page.\x0a\x0aThe result of the #begin method is the text\x0a'An Amber Example, running on Amber v0.14.3' added to the page.\x0a\x0aThe result of the #begin:'The ProfStef Example' results in the text 'The ProfStef Example, running on Amber v0.14.3' added to the page.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "appendToBody",
protocol: 'adding',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._appendToJQuery_("body"._asJQuery());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"appendToBody",{},$globals.DemoHeader)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "appendToBody\x0a\x09self appendToJQuery: 'body' asJQuery",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["appendToJQuery:", "asJQuery"]
}),
$globals.DemoHeader);

$core.addMethod(
$core.method({
selector: "demotext",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@demotext"];
if(($receiver = $2) == null || $receiver.isNil){
self["@demotext"]="An Amber Example, ";
$1=self["@demotext"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"demotext",{},$globals.DemoHeader)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "demotext\x0a\x09^demotext ifNil: [demotext := 'An Amber Example, ']",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.DemoHeader);

$core.addMethod(
$core.method({
selector: "demotext:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@demotext"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "demotext: aString\x0a\x09demotext := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.DemoHeader);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$4,$2;
$1=$recv(html)._div();
$recv($1)._class_("amber-version");
$3=$1;
$4=$recv($recv(self._demotext()).__comma("running on Amber v")).__comma($recv($Smalltalk())._version());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._with_($4);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.DemoHeader)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09html div\x0a\x09\x09class: 'amber-version';\x0a\x09\x09with: self demotext , 'running on Amber v' , Smalltalk version",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", ",", "demotext", "version"]
}),
$globals.DemoHeader);


$core.addMethod(
$core.method({
selector: "begin",
protocol: 'startup',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._new())._appendToBody();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"begin",{},$globals.DemoHeader.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "begin\x0a\x09\x22A default demotext is appended it to the body element.\x22\x0a\x09self new appendToBody",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["appendToBody", "new"]
}),
$globals.DemoHeader.klass);

$core.addMethod(
$core.method({
selector: "begin:",
protocol: 'startup',
fn: function (aMessage){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=self._new();
$recv($1)._demotext_(aMessage);
$2=$recv($1)._appendToBody();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"begin:",{aMessage:aMessage},$globals.DemoHeader.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMessage"],
source: "begin: aMessage\x0a\x09\x22A custom message is appended to the body element.\x22\x0a\x09self new demotext: aMessage; appendToBody",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["demotext:", "new", "appendToBody"]
}),
$globals.DemoHeader.klass);

});
