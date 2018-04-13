This application allow its users to keep track and organize useful links such as articles you want to read later or 
1. fork and clone the repo

2. bundle install

3. insert your own user key and secret key for omniauth:
config/initializers/omniauth.rb
provider :google, ENV['KEY'], ENV['SECRET']

4. run the migrations: 
rake db:migrate

5. seed the database
rake db:seed

6. run your local server
rails s



ruby: ruby 2.3.1
running the test suite (if any): rspec
