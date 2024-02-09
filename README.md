# Betfair Non-interactive login with Node.js and TypeScript.

1. Set up [self signed certificate](https://docs.developer.betfair.com/display/1smk3cen4v3lu3yomq5qye0ni/Non-Interactive+%28bot%29+login) on cert directory

2. Get [direnv](https://direnv.net/) to load environment variables

3. Create .envrc file in project directory and add these variables:
BF_PASSWORD - Betfair password
BF_USERNAME - Betfair username
BF_APP_KEY - [Betfair application key](https://support.developer.betfair.com/hc/en-us/articles/360004130392-How-do-I-retrieve-view-my-existing-Application-Keys)
BF_KEY_PATH - path to public key created 
BF_CERT_PATH - path to certification
