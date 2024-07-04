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
- Make sure you have the react native development environment configured

1. Clone the repository
2. In the root folder run `yarn && cd ios && pod install`
3. Create your `.env` file with `cp .env.example .env`
4. Make sure you set the correct `RELAY_URL` for development
5. Open the simulator and xcode, make sure you point to the correct simulator, checking the iOS version and build the app
6. Run the app with `yarn start`

## Android notes
- Make sure to add your jdk path to `local.properties` file:
```
org.gradle.java.home=/Library/Java/JavaVirtualMachines/jdk-17.0.10.jdk/Contents/Home

```