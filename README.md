# packageinfo
> Get basic info from package.json

[![npm version](https://badge.fury.io/js/packageinfo.svg)](https://badge.fury.io/js/packageinfo) [![](https://data.jsdelivr.com/v1/package/npm/packageinfo/badge)](https://www.jsdelivr.com/package/npm/packageinfo) [![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)

## Installation

`yarn add packageinfo --dev`

## Usage

### nodejs
```javascript
const packageinfo = require('packageinfo');
const data = packageinfo.data();
console.log(data);
```

### gulp
```javascript
const packageinfo = require('packageinfo');

gulp.task
(
    'test',
    () =>
    {
        const data    = packageinfo.data();    // Package name, version, next (version)
        const name    = packageinfo.name();    // Package name
        const version = packageinfo.version(); // Package version
        const next    = packageinfo.next();    // Package next (version)
    }
);
```