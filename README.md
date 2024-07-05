## Satlantis mobile
Frontend implementation of `Satlantis` mobile application. 
It should be primarily responsible for the following areas:

- Screens for basic auth & post creation
- State management with Redux toolkit
- Local persistence for auth user
- React Navigation basic implementation
- Build kind 1 event payload and send to Satlantis relay
- Use Typescript, eslint and jest

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