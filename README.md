[![Maintainability](https://api.codeclimate.com/v1/badges/d0e13853fa82d32e650a/maintainability)](https://codeclimate.com/repos/5dcbb7cd09f28e014c00f396/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/d0e13853fa82d32e650a/test_coverage)](https://codeclimate.com/repos/5dcbb7cd09f28e014c00f396/test_coverage)

# Muffi

1. [Muffi](#muffi)
   1. [What is Muffi?](#what-is-muffi)
   2. [Key features](#key-features)
   3. [Getting Started](#getting-started)
      1. [Start a new project](#start-a-new-project)
      2. [Configure the project](#configure-the-project)
      3. [Configure Code Climate](#configure-code-climate)
      4. [Configure CD](#configure-cd)
      5. [Capybara drivers](#capybara-drivers)
   4. [Contributing](#contributing)
   5. [License](#license)
   6. [About Abtion](#about-abtion)

## What is Muffi?

Muffi is a project template maintained by [Abtion](https://abtion.com/) and used to kick start
Ruby on Rails applications.

## Key features

* Heroku ready - Review apps, staging and production
* Uses [devise](https://github.com/plataformatec/devise)
* Uses [Heroku CI](https://heroku.com)
* Uses [rspec](https://github.com/rspec/rspec-rails)
* Uses [simplecov](https://github.com/colszowka/simplecov)
* Uses [rubocop](https://github.com/bbatsov/rubocop)

## Getting Started

### Start a new project

To start a new project with Muffi, simply create a new repository on GitHub
using this repository as a template.

Alternatively, clone this repository and change the git remote to point to
your own repository.

### Configure the project

1. Edit `application.rb` and change the module name and configuration settings.
2. Edit the database names in `database.yml`
3. Use "search and replace" to replace project specific strings across all files:
   - project-name-param => project-name
   - ProjectNamePascal => ProjectName
   - project_name_snake => project_name
   - Project Name Human => Project Name

   Note: The application name is wrapped around comments used to disable a rubocop check.
   When the application has been renamed, the comments should be removed.
   (See config/application.rb#L25-27)
4. `mv README.example.md README.md`

### Configure Code Climate

1. Login to CodeClimate and add your project
2. Go to the `Repo Settings` -> `Test coverage`
3. Enable `Enforce Diff Coverage` with a threshold of 100%
4. Copy the `TEST REPORTER ID`
5. Visit `https://github.com/abtion/<Project name>/settings/secrets`
6. Add a new secret: `CC_TEST_REPORTER_ID` with the copied value from codeclimate

### Configure CD

1. Log in to the [Heroku dashboard](https://dashboard.heroku.com)
2. Create a Pipeline, and two new applications
    - Staging: `<PROJECT-NAME>-staging`
    - Production: `<PROJECT-NAME>-production`
3. Turn on "Review Apps" from the Pipeline's page
4. Set `MAIL_FROM` in your Heroku config vars (review, staging and production).
5. Set `DOMAIN_NAME` in your Heroku config vars (staging and production), links in email will point to the provided domain name.

### Setup mailing

1. Go to the production app in the Heroku dashboard.
2. Add Sendgrid addon.
3. Click the added Sendgrid resource, go through the confirmation steps.
4. Set up DKIM (under sender authentication -> domain authentication).
5. Go to staging and repeat the above steps.
6. If you want the review apps to send emails: Copy the staging app's Sendgrid credentials and add them to the review apps config vars. Do not add the Sendgrid addon to review apps in `app.json` (Sendgrid will ban our account).

### Capybara drivers

This project registers two Capybara drivers.

Set the environment variable `CAPYBARA_DRIVER` to `headless_chrome` (default) to run specs without
opening Chrome, or use `chrome` to open the browser automatically.

## Contributing

Muffi is maintained by [_Abtioneers_](#about-abtion), but open for anyone to suggest improvements and bugfixes.

One abtioneer is currently responsible for the project at Abtion, with support from other employees.

Please see [CONTRIBUTING.md](https://github.com/abtion/muffi/blob/main/CONTRIBUTING.md).

## License

[MIT](https://opensource.org/licenses/MIT)

## About Abtion

[![Abtion](abtion.png "Abtion")](https://abtion.com/)

[Abtion](https://abtion.com/) is a technology company building software and
services that make life better, easier and more fun. Zeros and ones are the
backbone of our work, and together with a diverse mix of designers, developers
and strategists, we create websites, mobile- and web applications with a purpose.
