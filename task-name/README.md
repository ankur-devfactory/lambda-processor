# Lambda Typescript & CloudFormation Boilerplate

## Commands

1. Compile: `npm run webpack`
2. Package: `sam package --s3-bucket <bucket-name>`
3. Deploy: `sam deploy`

The deployment step uses the configuration in `samconfig.toml`.  You can override this by specifying `--guided`.

The whole process can be executed in one line:

```
npm run webpack && sam package --s3-bucket <bucket-name> && sam deploy
```

## Usage

TODO
