Web Accessibility Tester needs Pa11y installed on your system. https://pa11y.org/

Pa11y
=====

Pa11y is your automated accessibility testing pal. It runs accessibility tests on your pages via the command line or Node.js, so you can automate your testing process.

On the command line:

```sh
pa11y http://example.com/
```

In JavaScript:

```js
const pa11y = require('pa11y');

pa11y('http://example.com/').then((results) => {
    // Do something with the results
});
```

### Windows

On Windows 10, download a pre-built package from the [Node.js][node] website. Pa11y will be usable via the bundled Node.js application as well as the Windows command prompt.

Windows 7 and below users approach with caution – we've been able to get Pa11y running but only after installing Visual Studio and the Windows SDK (as well as Git, and Python). The [Windows installation instructions for node-gyp][windows-install] are a good place to start. If you have had a better experience than this then please do share!


Command-Line Interface
----------------------

Install Pa11y globally with [npm][npm]:

```
npm install -g pa11y
```

This installs the `pa11y` command-line tool:

```
Usage: pa11y [options] <url>

  Options:

    -V, --version                  output the version number
    -n, --environment              output details about the environment Pa11y will run in
    -s, --standard <name>          the accessibility standard to use: Section508, WCAG2A, WCAG2AA (default), WCAG2AAA – only used by htmlcs runner
    -r, --reporter <reporter>      the reporter to use: cli (default), csv, json
    -e, --runner <runner>          the test runners to use: htmlcs (default), axe
    -l, --level <level>            the level of issue to fail on (exit with code 2): error, warning, notice
    -T, --threshold <number>       permit this number of errors, warnings, or notices, otherwise fail with exit code 2
    -i, --ignore <ignore>          types and codes of issues to ignore, a repeatable value or separated by semi-colons
    --include-notices              Include notices in the report
    --include-warnings             Include warnings in the report
    -R, --root-element <selector>  a CSS selector used to limit which part of a page is tested
    -E, --hide-elements <hide>     a CSS selector to hide elements from testing, selectors can be comma separated
    -c, --config <path>            a JSON or JavaScript config file
    -t, --timeout <ms>             the timeout in milliseconds
    -w, --wait <ms>                the time to wait before running tests in milliseconds
    -d, --debug                    output debug messages
    -S, --screen-capture <path>    a path to save a screen capture of the page to
    -A, --add-rule <rule>          WCAG 2.0 rules to include, a repeatable value or separated by semi-colons – only used by htmlcs runner
    -h, --help                     output usage information
```
