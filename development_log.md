08.02.2024
- Get data for listMarketCatalogue
- Understand API queries better

Lessons learnt: 
Before testing, make sure VPN points to UK 

07.02.2024
- Refactoring and simplification including removing the adapter class

- Get some data from Betfair api

Lessons learnt:
Do not attempt to test private properies of classes as they are testing implementation details, instead test public points. For example setup Betfair.withSession in the before hook of the test and test the public methods of betfair instance instead of testing withSession which just sests the session on betfair instance.

06.02.2024
- Made direnv use env variables at .envrc. Had to [hook it up to zsh to make it work](https://support.developer.betfair.com/hc/en-us/articles/360004130392-How-do-I-retrieve-view-my-existing-Application-Keys)

# Things to do

- Configure unit testing
- Configure prettier / lint
- Fix node version

