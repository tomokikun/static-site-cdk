# static-site-cdk
静的サイトホスティングのためのインフラを構築するCDKのサンプルです。
S3 + CloudFront (+ Route53) の鉄板構成を想定しています。

Route53を使う場合は、Route53 Hosted Zoneの設定が必要です。　

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template
