var Action = function() {};

Action.prototype = {
    
run: function(parameters) {
    parameters.completionFunction({"URL": document.URL, "title": document.title });
},
    
finalize: function(parameters) {
    // Make sure the parameters name match the one defined in
    //  [NSExtensionJavaScriptFinalizeArgumentKey: ["customJavaScript": script.text]]
    // else parameters value will be undefined.
    var customJavascript = parameters["customJavaScript"];
    eval(customJavascript)
}
    
};

var ExtensionPreprocessingJS = new Action