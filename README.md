# gitbook-plugin-escape-content

GitBook Plugin for escaping content.

## Installation

book.json

```json
{
  "plugins": ["escape-content"],
}
```

and

```
gitbook install
```

## Example

```json
{
  "pluginsConfig": {
    "escape-content": {
      "include": ["raw/"]
    }
  }
}
```

### docs/hello.md

```
Hello, world!
```

### docs/sample-1.md

```
{% extends "hello.md" %}
```

Result

```
Hello, world!
```

### raw/sample-2.md

```
{% extends "../docs/hello.md" %}
```

Result

```
{% extends "../docs/hello.md" %}
```

### SUMMARY.md

```
# Summary

* [Sample 1](raw/sample-1.md)
* [Sample 2](docs/sample-2.md)
```
