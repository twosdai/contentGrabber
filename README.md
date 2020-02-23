# contentGrabber
This repository is for the infrastructure and code to grab links from top webpages, then render them as a simple webpage. 

### Technologies Used

[AWS]('aws.amazon.com')  
[Node.js]('www.nodejs.org')

### Purpose

This repository serves as a place to deploy a personally managed webpage to aggregate links from hackernews and reddit.
### Getting Started

This guild assumes you have an aws account, if you do not please go to `aws.amazon.com` and create one and configure your system through `aws configure` to be able to deploy to aws. This guild also assumes you have Node 12.x installed and npm installed. Please vist `www.nodejs.com` if you do not. 

Also note that there will likely be some costs to running the resources through AWS. 

 - Run `npm i` 
 - Add your needed credentials to the config.js file in the root directory, Follow instructions here to get the application credentials: https://hackernoon.com/build-a-serverless-reddit-bot-in-3-steps-with-node-js-and-stdlib-sourcecode-e5296b78fc64
 - If you want to add more subreddits just extend the subreddits array with more subs, like 'hacking'
 - Update the Route 53 components in the `serverless.yml` file fill in the labels called `FILL`
 - Verify that you have the domain you need to run the webpage purchased through AWS
 - Verify that your site is created in S3, and the lambdas have deployed correctly, Serverless will deploy a cloudformation stack which should manage it all for you. 
 - Run `sudo serverless deploy` 



 ### Needed Improvements
    - Unit testing 
    - Further documentation 
    - Additional API integrations beyond hackernews, reddit 
    - CSS if needed. 
    - Multiple system testing currently devlopment has only been done on linux-mint 19
    - Build tagging for link titles 
    - Keep history for looking back
   