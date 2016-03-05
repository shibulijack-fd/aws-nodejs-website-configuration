/*
 * @author: Shibu Lijack
 * @repo: https://github.com/shibulijack-fd/aws-nodejs-website-configuration
 * @version: 0.1.0
 * @Licensed under the MIT license.
 */

var AWS = require('aws-sdk');
var s3 = new AWS.S3();
var bucketName = 'BUCKET_NAME';
var params = {
  Bucket: bucketName, 
  WebsiteConfiguration: { 
    ErrorDocument: {
      Key: '404.html' 
    },
    IndexDocument: {
      Suffix: 'index.html' 
    },
    RoutingRules: [
    {
      Redirect: { 
        ReplaceKeyPrefixWith: 'NEW_URL',
      },
      Condition: {
        KeyPrefixEquals: 'OLD_URL'
      }
    },
    /* more items */
    ]
  },
  ContentMD5: 'STRING_VALUE'
};

s3.putBucketWebsite(params, function(err, data) {
  if (err) {
    console.log(err, err.stack); // an error occurred
  } 
  else {
    console.log(data);           // successful response
  }
});
