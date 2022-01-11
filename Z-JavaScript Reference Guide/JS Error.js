/*
Error Object
The Error object provides error information when an error occurs.

Example
In this example we have written "alert" as "adddlert" to deliberately produce an error.

Return the error name and a description of the error:

try {
  adddlert("Welcome");
}
catch(err) {
  document.getElementById("demo").innerHTML =
  err.name + "<br>" + err.message;
}
For a tutorial about JavaScript Errors, read our JavaScript Error Tutorial.

Error Object Properties

Property	                                        Description

name	                                            Sets or returns an error name
message	                                            Sets or returns an error message (a string)
Error Names
Error Name	                                        Description	Try it
EvalError	                                        Deprecated - use SyntaxError instead	 
RangeError	                                        A number "out of range" has occurred	
ReferenceError	                                    An illegal reference has occurred	
SyntaxError	                                        A syntax error has occurred	
TypeError	                                        A type error has occurred	
URIError	                                        An error in encodeURI() has occurred	
Non-Standard                                        Properties and Methods

#####################################################
Note:
#####################################################
Do not use these properties and methods in public web sites. They will not work in all browsers.

Property	Description

arguments	                        Deprecated
caller	                            Deprecated
columnNumber	                    Firefox only
description	                        Microsoft only
displayName	                        Firefox only
fileName	                        Firefox only
lineNumber	                        Firefox only
number	                            Microsoft only
stack	                            Firefox only
Methods	                            Description
evalError()	                        Deprecated
internalError()	                    Firefox only
toSource()	                        Non Standard


*/