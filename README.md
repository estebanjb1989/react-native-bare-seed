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

1. Clone the repository
2. In the root folder run `yarn`
3. Go to `ios` folder and run `pod install`, optionally can add flag `--repo -update`
3. Create your `.env` file with `cp .env.example .env`
4. In the `.env` file make sure you set the correct `RELAY_URL` for development
5. Open the simulator and Xcode/Android Studio, build and run the app
6. In a new terminal window run `yarn start`

## Android notes
- Make sure to add your jdk path to `local.properties` file:
```
org.gradle.java.home=/Library/Java/JavaVirtualMachines/jdk-17.0.10.jdk/Contents/Home
```