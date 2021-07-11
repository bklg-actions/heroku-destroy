# heroku-destroy

GitHub Action that destroys an existing Heroku application.

## Usage

Use the action in your workflow with your API key:

```yaml
name: workflow-name
on:
  pull_request:
    types: [opened, synchronize]
jobs:
  job_name:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: bklg-actions/heroku-destroyh@v1
        with:
          application_name: your-application-name
```

See [action.yml](/bklg-actions/heroku-destroy/blob/master/action.yml) for a full list of inputs and outputs.

## Contributing

Issue reports and pull requests are welcome on GitHub at https://github.com/bklg-actions/heroku-destroy.

## License

This work is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
