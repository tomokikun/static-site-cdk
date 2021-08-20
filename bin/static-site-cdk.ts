#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { StaticSiteCdkStack } from '../lib/static-site-cdk-stack';

const app = new cdk.App();
new StaticSiteCdkStack(app, 'SampleStaticSiteCdkStack', {
    bucketName: "static-site-bucket-c6e52ec4-8b2f-4a6f-b846-245f3c53230d"
});
