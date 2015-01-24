Smalltalk createPackage: 'AmberDemo'!
Widget subclass: #DemoHeader
	instanceVariableNames: 'demotext'
	package: 'AmberDemo'!
!DemoHeader commentStamp!
DemoHeader is a branding Widget is intended to add the Amber version to an Amber example demo type pages.

You call the class methods #begin or #begin: with a text message to add a text message to the page.

The result of the #begin method is the text
'An Amber Example, running on Amber v0.14.3' added to the page.

The result of the #begin:'The ProfStef Example' results in the text 'The ProfStef Example, running on Amber v0.14.3' added to the page.!

!DemoHeader methodsFor: 'accessing'!

demotext
	^demotext ifNil: [demotext := 'An Amber Example, ']
!

demotext: aString
	demotext := aString
! !

!DemoHeader methodsFor: 'adding'!

appendToBody
	self appendToJQuery: 'body' asJQuery
! !

!DemoHeader methodsFor: 'rendering'!

renderOn: html
	html div
		class: 'amber-version';
		with: self demotext , 'running on Amber v' , Smalltalk version
! !

!DemoHeader class methodsFor: 'startup'!

begin
	"A default demotext is appended it to the body element."
	self new appendToBody
!

begin: aMessage
	"A custom message is appended to the body element."
	self new demotext: aMessage; appendToBody
! !

