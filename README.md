# Javascript In The Browser - Common Web APIs

The modern browsers offer a host of Web APIs for the developers to use, but some are more commonly used than others. The location and history Web APIs are at the heart of a very popular web application strategy: Single Page Applications (SPAs), which we will cover in the near future. Therefore, they must be understood and mastered.

- Another very useful Web API is the localStorage API, which allows us to store information in the user's browser.

- In this Guide you'll learn about these topics and use them to create a simple SPA.

## Topics

- What is a Web API?
- location & history
- localStorage
- Explore Web APIs

## Local Storage exercise

I created a website where you can enter your name, which after input is stored in local storage, you can have a lock yourself and also it will be added to the text on the website and then if you click "forget" it will be deleted from the local storage. You can additionaly hide the gif of neon cat if you are annoyed.

The first screenshot shows if I enter my name, that it is in local storage and the second shows it when I press button "forget".

![2021-12-12 (4)](https://user-images.githubusercontent.com/80709364/145727489-bc4f909a-774c-4999-842a-f18a85140633.png)

![2021-12-12 (5)](https://user-images.githubusercontent.com/80709364/145727524-2c80283b-70b1-4fd5-a09f-ef5de8cdb3cd.png)

- [Live site](https://liadensam.github.io/js-browser-web-api/)
- [GitHub Repository](https://github.com/liadensam/js-browser-web-api)

## SPA exercise

I created a server with express.
You always have to remember when you create a server to run in by: node + "name of the js file so in my case server.js" so it would be: `node server.js`

I created a menu with three pages. It is more about the functionality then the styling and naming conventions ;)

You connect these pages through the routes, but you have to write a lot of code so it does not reload and follows the correct path.

- [GitHub Repository](https://github.com/liadensam/js-browser-spa)
- You can try this repository by cloning and then running `node server.js` and then going to `http://localhost:5501/` But you have to make sure you do not have anything else on that port or just change the port number in the "server.js" file.

![2021-12-12 (6)_LI](https://user-images.githubusercontent.com/80709364/145730383-3000dca6-6419-4b59-ab25-4a9448d2a683.jpg)

![2021-12-12 (7)_LI](https://user-images.githubusercontent.com/80709364/145730409-74d93755-5520-4044-8c02-0957f2975cd6.jpg)

- video how the page looks:

https://user-images.githubusercontent.com/80709364/145730699-8d7289d5-3f3d-47f3-813b-38b198e0b123.mp4
