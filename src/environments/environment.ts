// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyD56FJzbUAoS_6JUMm71UZ35VsIvx4L_1w',
    authDomain: 'carss-98f51.firebaseapp.com',
    databaseURL: 'https://carss-98f51.firebaseio.com',
    projectId: 'carss-98f51',
    storageBucket: 'carss-98f51.appspot.com',
    messagingSenderId: '627758686180'
  },
  carssStore: {
    address: "https://api.phildev.me"
  },
  fxFlex: {
    xs: 96,
    sm: 80,
    md: 70,
    lg: 60,
    xl: 50
  }
};
