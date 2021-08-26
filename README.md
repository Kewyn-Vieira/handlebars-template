# About the template
This is a modular website template where you can just merge the branches that have the technologies you will need for your project.

This template currently suports:

 - Template Engines
	 - HTML
	 - Handlebars
 - Add-ons
	 - Javascript
	 - CSS
	 - Typescript
	 - Sass - SCSS
 - Others
	 - Bootstrap (included with CSS and SCSS)

# How to start
This template requires you to have [Node](https://nodejs.org/en/).

To start you will need to clone the repository:
Open a terminal in your folder of choice and use:
</br>
	`$ git clone https://github.com/Kewyn-Vieira/website-template`
</br>

Choose the template type you will use and follow its instructions

## HTML
Open a terminal in the root folder and use:
</br>
	`$ git rebase origin/HTML`
</br>

This command will install HTML to your template. The HTML template comes with Javascript and CSS by default.
Before installing add-ons you should read [Add-ons](#add-ons)?

### Install Sass
Open a terminal in the root folder and use:
</br>
	`$ git merge origin/Sass`
</br>

### Install Typescript
Open a terminal in the root folder and use the following command:
</br>
	`$ git merge origin/Typescript -X rename-threshold=25`
</br>

## Handlebars
Open a terminal in the root folder and use:
</br>
	`$ git rebase origin/Handlebars`
</br>

This command will install Handlebars to your template. The Handlebars template comes with Javascript and CSS by default.
Before installing add-ons you should read [Add-ons](#add-ons)?
### Install Sass
Open a terminal in the root folder and use:
</br>
	`$ git merge origin/Sass`
</br>

### Install Typescript
Open a terminal in the root folder and use the following command:
</br>
	`$ git merge origin/Typescript -X rename-threshold=25`
</br>

<a id='add-ons'>

# Add-ons
The installation of the add-ons are obviously optional. Every template comes with CSS and Javascript by default. If you don't want any other add-ons, jump to [How to start developing](#start-developing).

If you wish to install add-ons you should first open a terminal in the root folder and install [`npm-merge-driver`](https://www.npmjs.com/package/npm-merge-driver) to prevent merge conflicts between `package-lock.json` files, to accomplish this simply use:
</br>
	`$ npx npm-merge-driver install`
</br>

<a id='start-developing'>
# How to start developing
After switching to the branch with the template type you wish to work with and merging with all the branches you will use, you can start your development server doing the following:

Install modules → Open a terminal in your root folder and use:
</br>
	`$ npm i`
</br>

Build files → Open a terminal in your root folder and use:
</br>
	`$ npm run build`
</br>

Start the server → After installing the modules, use:
</br>
	`$ npm run dev`
</br>

Open the page → **Ctrl + Click** over the link given by the terminal
