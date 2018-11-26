# Webpack Wackiness

Our client is creating an application to convert and format all of the things! It's going to end up as a massive, messy application if they don't break things into smaller pieces. Webpack is here to save the day!

Reminder! To make your updates show, you will need to rerun the build process and refresh the page every time you make changes.

```
npm run build
open dist/index.html
```

## Required Features

### Inches to Centimeters Conversion

The miles to kilometers converter has been created, but now we need to start converting other things. You need to complete the inches to centimeters conversion. Try to follow the pattern from the miles to kilometers converter.

## Stretch Goals

### Dates

The client wants to let users know what day it is in the following format:

```
(Day of the Week), (Month) (Day)('th' or 'nd'), (Year)
```

something like:

```
Thursday, March 2nd, 2071
```

This seems like a lot of work, so let's use a library! [Moment.js](https://momentjs.com/) is a super cool JavaScript library that makes working with dates and times a lot easier. Install it and bring it into `time-formatter.js`. Then `import` the result into `client.js` to fix the footer.

> The DOM manipulation code (adding the date to the DOM) is already done for you. Do not attempt to get the date from the DOM (like the conversions). The date will be today's date and will come from moment.

### Style it up!

This site is great! It's just not very pretty. The client has already created the styling they want in `styles.css`, but wants to bring it in with Webpack (not a `<link>` tag). Research [Webpack CSS File Loader](https://github.com/webpack-contrib/css-loader), to see how this is done.
