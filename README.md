# Image-Processing-API
>## _Project one of my Udacity nanodegree_

## **1. Setup and configuration**
To use this API, first run the command below to install `node_modules`
```bash
npm i
```

Then check the `package.json` file for the **dependencies** and **devDependencies** used, and install them accordingly as follows.
```bash
npm i <module-name> //for dependencies
npm i --save-dev <module-name> //for devDependencies
```
The `tsconfig.json`, `eslint.json` files are already configured for you.

Once installed, copy the `.env.example` to a new file that you'll create named `.env`
```bash
cp .env.example .env
```

In the `.env` file, let the `port` be 3000, or a suitable number of your choosing, and the `rootDir` to be the absolute path to the project folder.

## **2. Testing**
Once you're done with that, run the predefined tests using the command below, to check if the API works.
```bash
npm run test
```
## **3. Running the application**
When all tests pass, run either of these commands to start the application.
```bash
npm run start
OR
node build/.
```

This will log a message to the terminal that the server has started.
```bash
Server started at http://localhost:3000
```

Open your browser to that address, and you'll be greeted with a welcome message.

Edit the URL, using the format below.

> http://localhost:3000?/fileName=name_of_image_in_assets&width=sample_width&height=sample_height

![Image Example](assets/images/url.jpg)

Using the exact same url above, you'll later on see an image similar to this one below.
![Sample pic](assets/images/half.jpg)

Try it out with different widths and heights and enjoy the process 😊.

## **Have fun!**
