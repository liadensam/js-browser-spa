//checking if indes.js is working
//console.log("index.js loaded")

//loading content for each view in here, that is why we have async here
const router = async () => {
  //routes equals new array of routes
  const routes = [
      //route path of the webpage
      //whenever the user goies to the route path, we run this function in order to make this work
      { path: "/frontend/", view: () => console.log ("viewing dashboard") },
      { path: "/frontend/posts", view: () => console.log ("viewing posts") },
      { path: "/frontend/settings", view: () => console.log ("viewing settings") }
  ];

  //test each route for potential match
  //looping through each map
  const potentialMatches = routes.map(route => {
    //returning new object for each route
    return {
      route: route,
      /*we are testing if our route path are matching if I go to for example /settings if I write into dev tools into console location.pathname if it gets the same result as "/frontend/settings"*/
      isMatch: location.pathname === route.path
    }
  })

  //find method will look trhough the array and find sth which matches the particular condition I am defining here
  let match = potentialMatches.find(potentialMatches => potentialMatches.isMatch)

  console.log(match)

}

//we need to call the router
//once all of the DOM loads, we run router function
document.addEventListener("DOMContentLoaded", () => {
  router();
})