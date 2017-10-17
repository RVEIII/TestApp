# TestApp
This is a sample app for a specific Nativescript bug: https://github.com/NativeScript/NativeScript/issues/4670

Steps to build:
- Open ./Framework/ExtensionFramework/ExtensionFramework.xcodeproj
- Build the framework for simulator.  Not completely sure if this issue exists on device or not.
- Copy the ExtensionFramework.framework file that is built and paste it in ./plugins/ExtensionTable/platforms/ios/
- Run the following command "tns plugin add ./plugins/ExtensionTable/"
- Run "tns build ios"
- Run "tns run ios --emulator"

Steps in application:
- On "My App" screen, press the "Tap" button
- Test page opens

Expected results:
- Row 0 shows a label with a blue background and text reading "Initial label".  Row 1 shows a switch view.

Actual results:
- Row 0 is empty.  Row 1 shows a switch view.
