# Coder Fitness App

## Directory for React Native Code Fitness App

> This app is a simple react native application that shows a list of coders and activities.

## Initialize Project

> Initial Steps: Execute each command in order one-by-one, at the project root.

```bash
cd ../intro-to-react-native
npx create-expo-app coder-fit-app
cd coder-fit-app
expo start
```

> The intro to react native labs can be found within this repo at: [Professional-React-Native-Labs-v1.0.pdf](../docs/Professional-React-Native-Labs-v1.0.pdf)

## Restart Project

> NOTE: You should not have to run npm install as it should have automatically been executed after expo created the project. If it was not, manually run:

```bash
cd coder-fit-app
npm install
```

> Start Server Step: If you have all dependencies

```ts
expo start
```

> Final: Result output should show:

1. To will need to replace `192.168.1.10` with your local system IP.
2. Open `System Preferences` > Network
3. Update the IP in [App.js](./App.js).
   > Note: Otherwise, only the iOS Simulator will work. The Android simulator or physical devices will not work.

```ts
uri: 'http://192.168.1.10:4000',
```

```ts
Metro waiting on exp://192.168.1.#:19000
› Scan the QR code above with Expo Go (Android) or the Camera app (iOS)

› Press a │ open Android
› Press i │ open iOS simulator
› Press w │ open web

› Press r │ reload app
› Press m │ toggle menu

› Press ? │ show all commands

Logs for your project will appear below. Press Ctrl+C to exit.
Started Metro Bundler
› Opening on iOS...
› Opening exp://192.168.1.10:19000 on iPhone SE (3rd generation)
› Press ? │ show all commands
iOS Bundling complete 1212ms

iOS Running app on iPhone SE (3rd generation)
› Opening on Android...
› Opening exp://192.168.1.10:19000 on Pixel_6_Pro_API_33
› Press ? │ show all commands
› Reloading apps
Android Bundling complete 33ms
Android Running app on Pixel 6 Pro
Android Running app on sdk_gphone64_arm64
iOS Bundling complete 37ms
iOS Running app on Daniel
```
