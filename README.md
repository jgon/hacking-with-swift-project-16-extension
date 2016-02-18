# Hacking with Swift - Project 16 - Safari Extension

Safari extensions, UITextView, NSNotificationCenter.

## Topics covered

- The extension's plist file describes the data that we accept and how it will be processed.
- Extensions must shipped as part of an app, i.e. they cannot be shipped on their own. The app in this case does nothing.
- Custom extension initialization code (```NSExtensionItem```, ```NSItemProvider```).
- Setting up the ```extensionContext``` to interact with the parent app, in this case Safari.
- Configuring the extention's plist file to specify what data we are interested in (```NSExtensionActivationSupportsWebPageWithMaxCount```) and a JavaScript to call (```Action.js```).
- Using a ```UITextView``` with proper keyboard handling, i.e. adapting the ```UITextView``` when the keyboard is visible or hides.
- An example of a function ```adjustForKeyboard``` to adjust the text view' content inset and scroll indicator insets to the keyboard visible or hidden.


## Additional stuff

- Fixing the text view at the top by setting the parent view ```automaticallyAdjustsScrollViewInsets = false```.

![](/Images/view automaticallyAdjustsScrollViewInsets true.png)

![](/Images/view automaticallyAdjustsScrollViewInsets false.png)
