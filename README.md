# getpackageinfo
> Get basic info from package.json

[![npm version](https://badge.fury.io/js/getpackageinfo.svg)](https://badge.fury.io/js/getpackageinfo) [![](https://data.jsdelivr.com/v1/package/npm/getpackageinfo/badge)](https://www.jsdelivr.com/package/npm/getpackageinfo) [![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)

## Installation

`yarn add getpackageinfo --dev`

## Usage

### nodejs
```javascript
const getpackageinfo = require('getpackageinfo');
const data = getpackageinfo.data();
console.log(data);
```

### gulp
```javascript
const getpackageinfo = require('getpackageinfo');

gulp.task
(
    'test',
    () =>
    {
        const data    = getpackageinfo.data();    // Package name, version, next (version)
        const name    = getpackageinfo.name();    // Package name
        const version = getpackageinfo.version(); // Package version
        const next    = getpackageinfo.next();    // Package next (version)
    }
);
```