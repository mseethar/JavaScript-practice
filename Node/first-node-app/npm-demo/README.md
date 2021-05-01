# Installing a specific version of npm
    $ npm i -g npm@5.5.1  // -g global

# Creating a package
    $ npm init
    $ npm init --yes

# Installing a pacakge
    $ npm i <package_name>
    $ npm i underscore // No need to specify --save in latest versions of npm
    $ npm i mongoose
    $ npm i <package_name>@<version>  // Installs a specific version of the package.

# Installing all the dependencies from package.json
    $ npm i

__Do not add the node_modules directory into code repository (git)__

# Dependencies versioning
Semantic versioning

^1.2.3 - Major version (1) is locked. Can be expressed as 1.x

~1.2.3 - Major and minor versions are locked. Can be expressed as 1.2.x

1.2.3 - Version is matched exactly

# List dependency versions (dependency hierarchy)
    $ npm list
    $ npm list --depth=0  // Displays only direct dependencies

# View package info
    $ npm view mongoose
    $ npm view mongoose dependencies
    $ npm view mongoose version

# List all the versions of a package
    $ npm view <package> versions

# Listing outdated versions and updating them
    $ npm outdated
    $ npm update  // Updates only minor and patch versions

# Updating major versions with npm
    $ npm i -g npm-check-updates  // -g is global.
    $ npm-check-updates  // or ncu
    $ ncu -u  // Upgrades the major versions in package.json. It does not install the dependency yet.
    $ npm i  // This installs the upgraded version above.

# Installing development dependencies
    $ npm i jshint --save-dev

# Uninstalling a package
    $ npm un mongoose  // npm uninstall mongoose

# Global packages
Tools / CLIs

    $ npm i -g <package_name>[@version]

# Publishing a package
    $ npm publish

# Upgrading a version
    $ npm version <major|minor|patch>  // Upgrades the major, minor or the patch version then...
    $ npm publish