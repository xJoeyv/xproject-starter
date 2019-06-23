xProject Starter
=======================

A boilerplate for **Node.js** applications.

Recently I have been building a lot of applications on top of Node.js. But I cannot manage to keep the same structure and way of programmig. Also recreating the same basic setup cost me a lot of time so why not a simple `git clone` and delete things I don't need. That will save me time.

Here I created my project starter, I add basic folders and package that are often used with an small lib code folder for good solutions to easy the pain of certain things. Deleting should be easy when not needed!

### Important Notice
In the first version I'm missing out on the cli part. Also I would like to port this project over to Typescript and write the simple libararies. It's is not fully finished but you can use this already.

### Project Structure
| Name                 	| Description                                                                        	|
|----------------------	|------------------------------------------------------------------------------------	|
| .env.example         	| The enviroment file that should be named to `.env`                                 	|
| **views**            	| When building an website application you can put your views in here                	|
| **src**              	| The source of the application, this is the place where you code goes               	|
| **src**/bootstrap.js 	| This bootstrap the whole application and decides if you launch the app or cli tool 	|
| **src**/main.js      	| Your application entry point exported in a `boot` function                         	|
| **src**/cli.js       	| Your cli tool entry point exported in a `boot` function                            	|

### Getting Started
The easiest way to get started is to clone the repository:

```bash
# Get the latest snapshot
git clone https://github.com/xJoeyv/xproject-starter.git MY_PROJECT

# Change directory
cd MY_PROJECT

# Install NPM dependencies
npm install

# Then simply start your app
npm start
```

If it is running fine you should start chaging some things.

- Update `package.json` with ur own name, description etc
- Delete things you don't need
- Add some settings to `.env`