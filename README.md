# static-site-cdk
静的サイトホスティングのためのインフラ(S3 + CloudFront)を構築するCDKのサンプルです。
`cdk deploy`を実行することで、インフラの構築から静的ファイルをS3 Bucketにdeployするところまで自動実行します。

独自ドメインを使いたい場合、Route53で別途DNSの設定を行う必要があります。

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template
