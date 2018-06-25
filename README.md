#introduction

This application allow its users to keep track and organize useful links such as articles you want to read later or solutions to a problem you found (like snippet of code) and want to be able to retrieve later. 
This application is like a powerful tool bar. You create your lists, save your links, define a priority for them. You can read your resources without even leaving the application thank to a big preview display (from the list and from the link page). You can check your links by priority or date. 

-------------------------------------------------------------------------------------------------------------

#How to install this application:

1. clone the repo

2. bundle install

3. insert your own user key and secret key for omniauth:
config/initializers/omniauth.rb
provider :google, ENV['KEY'], ENV['SECRET']

4. run the migrations: 
rake db:migrate


5. run your local server
rails s

-------------------------------------------------------------------------------------------------------------

#versions
ruby: ruby 2.3.1
running the test suite (if any): rspec and moccha

-------------------------------------------------------------------------------------------------------------

#contribute to this project:

This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant code of conduct.

-file an issue with a pull request
-make a pull request for any improvement
-considered area of improvement : possibility to send an email/text reminder for high priority links or for a specific link)

-------------------------------------------------------------------------------------------------------------

#license:
This project has been licensed under the MIT open source license:
MIT open source license, GNU public license, Creative Commons license


Copyright 2018 Lizzie Sorin

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
