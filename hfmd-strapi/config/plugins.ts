export default ({ env }) => ({
    upload: {
        config: {
            provider: 'aws-s3',
            providerOptions: {
                accessKeyId: env('AWS_ACCESS_KEY_ID'),
                secretAccessKey: env('AWS_ACCESS_SECRET'),
                region: env('AWS_REGION'),
                params: {
                    Bucket: env('AWS_BUCKET'),
                },
            },
            actionOptions: {
                upload: {},
                uploadStream: {},
                delete: {},
            },
        },
    },
    // 'import-export-entries': {
    //     enabled: true,        
    //     /**
    //      * Public hostname of the server.
    //      *
    //      * If you use the local provider to persist medias,
    //      * `serverPublicHostname` should be set to properly export media urls.
    //      */
    //     serverPublicHostname: `https://${env('AWS_BUCKET')}.s3.${env('AWS_REGION')}.amazonaws.com`, // default: "".
    // },
});
  