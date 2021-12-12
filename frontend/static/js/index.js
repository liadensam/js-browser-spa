import Home from "./views/Home.js";
import Posts from "./views/Posts.js";
import PostView from "./views/PostView.js";
import Contact from "./views/Contact.js";

//checking if index.js is working, our entry point, entry site
//console.log("index.js loaded")


const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");


const getParams = (match) => {
  const values = match.result.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

  // console.log(Array.from(match.route.path.matchAll(/:(\w +)/g)))

  return Object.fromEntries(keys.map((key, i) => {
      return [key, values[i]];
  }));
};


const navigateTo = url => {
  history.pushState(null, null, url);
  router();
};


//loading content for each view in here, that is why we have async here
const router = async () => {
  //to test the route
  //console.log(pathToRegex("/posts/:id"))

  // /posts/:id

  //routes equals new array of routes
  const routes = [
      //route path of the webpage
      //whenever the user goies to the route path, we run this view where all the functions for the content are included
      { path: "/", view: Home },
      { path: "/posts", view: Posts },
      { path: "/posts/:id", view: PostView },
      { path: "/contact", view: Contact }
  ];

  //test each route for potential match
  //looping through each map
  const potentialMatches = routes.map(route => {
    //returning new object for each route
    return {
      route: route,
      /*we are testing if our route path are matching if I go to for example /settings if I write into dev tools into console location.pathname if it gets the same result as "/settings"*/
      result: location.pathname.match(pathToRegex(route.path))
    }
  })

  //find method will look trhough the array and find sth which matches the particular condition I am defining here
  let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

  if (!match) {
    match = {
      route: routes[0],
      result: [location.pathname]
    };
  }

  const view = new match.route.view(getParams(match));

  /*getting html from html method in the view and adding it to the inner Html of #app element*/
  document.querySelector("#app").innerHTML = await view.getHtml();

  //console.log(match.route.view());

}


//Navigating through history - In order to show the history, when we click on the arrows go back so it displays it.
window.addEventListener("popstate", router);


//we need to call the router
//once all of the DOM loads, we run router function
document.addEventListener("DOMContentLoaded", () => {

  /*This is the part, when we navigate after clicking on a menu item to the specific url, but without refreshing the page. You can see I have data-link there so it refers to the attribute in index.html page.*/
  document.body.addEventListener("click", e => {
    if (e.target.matches("[data-link]")) {
        e.preventDefault();
        navigateTo(e.target.href);
    }
  })

  router();
})