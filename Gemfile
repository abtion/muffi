# frozen_string_literal: true

source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "2.6.6"

gem "awesome_print"
gem "bootsnap", ">= 1.4.2", require: false
gem "cancancan"
gem "devise"
gem "fast_jsonapi"
gem "jquery-rails"
gem "pg", ">= 0.18", "< 2.0"
gem "pry"
gem "puma", "~> 3.12"
gem "rails", "6.0.3.2"
gem "rollbar"
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]
gem "webpacker", "~> 4.0"

group :development, :test do
  gem "abtion-scripts"
  gem "brakeman"
  gem "bundler-audit"
  gem "byebug", platforms: [:mri, :mingw, :x64_mingw]
  gem "dotenv-rails"
  gem "rspec-rails", "~> 4.0"
  gem "rubocop"
  gem "rubocop-performance"
  gem "rubocop-rails"
  gem "selenium-webdriver"
  gem "shoulda-matchers"
  gem "webdrivers", "~> 4.0"
end

group :development do
  gem "listen", ">= 3.0.5", "< 3.2"
  gem "pivotal_git_scripts"
  gem "web-console", ">= 3.3.0"
end

group :test do
  gem "capybara"
  gem "factory_bot_rails"
  gem "faker"
  gem "simplecov"
end
