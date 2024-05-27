To reproduce the issue: 

1. `npm run reproduce`
2. do any change that should be detected by the watcher: modify .js files, add a new file, etc.
3. no "events" are logged (console.logged from `watch-with-issue.js`)

Example working without the negated entries:

1. `npm run working`
2. do any change that should be detected by the watcher: modify .js files, add a new file, etc.
3. "events" are logged (console.logged from `watch-without-issue.js`)
