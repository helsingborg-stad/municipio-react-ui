# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- add timeline component
- add button component: Support for HTMLAnchorElement as root
- add & setup stylelint configuration for BEM naming convention
- add CHANGELOG.md

## [0.3.0] - 2022-12-13

### Added

- Script for deploying storybook to GH pages.

### Changed

- storybook instance now import & builds the styleguide instead of CDN (should be replaced with CDN in the future).
- field component: value prop is not optional in order to allow non-controlled input.

## [0.2.0] - 2022-12-13

### Added

- setup storybook
- add card component
- add button component
- add collection component
- add field component
- add icon component
- add typography component

[unreleased]: https://github.com/helsingborg-stad/municipio-react-ui/compare/0.3.0...HEAD
[0.3.0]: https://github.com/helsingborg-stad/municipio-react-ui/compare/02.0...0.3.0
[0.2.0]: https://github.com/helsingborg-stad/municipio-react-ui/compare/a3663b4506a451fad2ca1d42907f1decc4a08a58...0.2.0
