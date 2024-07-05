## Satlantis mobile
Frontend implementation of `Satlantis` mobile application. 
It should be primarily responsible for the following areas:

- Screens for basic auth & post creation
- Redux toolkit latest version
- State persistence with redux-persist
- React-navigation with simple drawer and stacks
- Nostr tools integration and publishing events to relays
- Typescript, linting and unit testing
- Build for iOS & Android

## Install instructions
- Make sure you have the react native development environment configured; Should have the latest versions of nvm, node, npm, yarn, cocoapods, MacOS and xcode.

1. Clone the repository.
2. In the root folder run `yarn`.
3. Create your `.env` file with `cp .env.example .env`.
4. In the `.env` file make sure you set the correct `RELAY_URL` for development.
5. Now you can build the native code and run the app in simulator or device.
- iOS - Go to `ios` folder and run `pod install`, optionally can add flag `--repo -update`. Then open the workspace file with xcode, build and run the app.
- Android - Open the android folder with Android Studio, build and run the app.
6. Make sure the IDE opened a term running metro bundler, if not please run `yarn start` in a new terminal window.
7. Refresh the app, you should see the metro bundler connected and hot reload working.

## Android notes
- Make sure to add your jdk path to `local.properties` file:
```
org.gradle.java.home=/Library/Java/JavaVirtualMachines/jdk-17.0.10.jdk/Contents/Home
```

- If are testing build for Android in Windows environment and have issues
to build the app in Android studio and are around the node installation make sure you open Android studio from command line using the following command, note you have to replace with your own path in the 2nd parameter.
```
start "" "C:\Program Files\Android\Android Studio\bin\studio64.exe" "C:\Users\HP\Downloads\satlantis-mobile\android"
```

## Test plan 

1. First screen should be auth screen, presenting two inputs, one for sign up with name and other for sign in with secret key.
2. Sign up with your name, should be redirected to the first screen of the app, currently with a post input to submit content to Satlantis relay.
3. Note you see the input for creating a post, enter any text and press `POST`.
4. Check post button is disabled while fetching and the alert of successful publication is displayed. 
- If we have an exception publishing the post, the error will be catched in the application code and thrown to upper layer, currently just showing an alert with the error detail.
5. Check creating a few more posts without issues.
6. Note at the top left corner the drawer toggle button, press to open the drawer.
7. Check the public key button, which can be pressed to copy the public key to clipboard.
8. Force reload the app without signing out, app should have persisted the auth user, without showing the auth screen again on refresh.
10. Sign out of the app.
