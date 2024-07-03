# Satlantis mobile app

## Goal

The goal of this repository is to serve as the front end implementation
of `Satlants` mobile application. It should be primarily responsible for the
following areas:

- UI/UX with functional components & hooks
- User auth & refresh
- State management with redux and redux-persist
- Redux actions for API calls
- Events for Nostr protocol

## Source Directory Structure

- `api`: API connection domain objects

## Functional composition

Functional composition and react hooks as the default approach for
authoring components. I prefer that the traditional class based composition
only be left for scenarios that have specific requirements that can't be
achieved via functional components. This will hopefully be few and far between.

## Formatting and linting

I use prettier as a standard formatter and eslint as a standard for linting. I
have created git hooks into the project so both are run automatically on commit.
I ask that you do not disable these hooks on commit.

I would also recommend that you install plugins/extensions to enable formatting
and linting within your editor of choice as you author your code. This makes
these changes and potential errors less abrupt at commit time.

## Included libraries

### Form/Schema validation: Formik and Yup

I use `formik` as a standard for form validation across all front end
applications. `yup` is used as a schema validator both in the context of formik
and in other areas where we need to validate data in general.

### Prop Types

Please use `prop-types` to define the prop data types for all components. This
helps catch errors when passing incorrect or unexpected prop type values.

## Testing

I standardize our tests around `jest` as a test executor and
`testing-library/react-native` as a test renderer. Please use these to author
your tests.

It would be helpful if you use `testID` as a standard attributes across your tests. We prefer to rely on stable selectors for our unit and integration tests as this yields more reliable tests and less need to refactor when the application needs to change it's structure or style.

We would also prefer it if you followed the page object pattern. This allows you
to separate your selectors from test cases. This is useful as it places
selectors in a central location, and makes it easy to update them, irrelevant of
how many components rely on it. It also promotes reusability of the said page
objects.

## Available commands
To set it up before running:
- npm install -g dotenv-cli
- Sudo gem install cocoapods --pre
- a. Run `cp .env.example .env && yarn prestart` inside the project dir
- b. Then run `yarn` to install dependencies
- c. cd into `/ios` and run `pod install`
- d. You're ready to now run: `yarn ios`
- `yarn test`: Run unit tests
- `yarn lint-fix`: Run linter

## Environment Variables

* `REACT_APP_API_URL`: URL for API

## IOS Specs

- To run in iOS you have to execute `pod install` inside your `/ios` folder

## Android Specs

- To run in Android make sure to add `local.properties` file inside your `/android` directory with the following line at the bottom:

`sdk.dir=/Users/{YOUR_USER_NAME_HERE}/Library/Android/sdk`
