# Lab 8 - Starter
Victor Kim and Trisha Tong
1. Within a Github action that runs whenever code is pushed:
      The reason to do the automated tests on every code push is that it can provide early warnings for any potential bugs, and can keep you up to date with any new        specs or requirements that might have been added to the project.
2. No. Unit testing is better to check function output correctness.: 
      This is because puppetier is made to perform actions acting as the user while unit tests simply check if the output of the function in some specific                  circumstance is as expected which might not always be possible with interactions.
3. Yes we can use unit testing for message feature. 
       Since if one message goes through then all messages will also go through the same way. We can expect that testing the feature once, unless we want to see some         corner case covered, should be sufficient.
4.No we cannot
      Since unit testing cannot perform actions live, we cannot test if typing more would prevent the user from making a longer message.
