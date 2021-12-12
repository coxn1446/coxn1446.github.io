const apiKey = "2dpk0dp6oR10ZphQNJjqXk8cw-YZl8ts6gGW99gyH7OoT1P968alwLeZjltTAmqpe1ocoepsh31mDvwq1acrjd-QyROJUKXC5gYgcbCR5I5R5ns1ZCJxie82plK2YXYx"
const clientID = "xiOf0BOT1IU3z9jjh3utAA"
const url = "https://api.yelp.com/v3/businesses/search"


//Picks up values from URL
const search = new URLSearchParams(window.location.search);

//Assigns values from URL to variables
const termResult = search.get('term');
const locationResult = search.get("location");

const getRestaurants = async () => {
    const urlToFetch =`${url}?term=${termResult}&location=${locationResult}`
    try {
        const response = await fetch(urlToFetch,{
            method: "GET",
            mode: "no-cors",
            headers: {
                'Authorization': 'Bearer T_OidgsCkkTWjdSkG4v70SbYvO6TawJZbt3glEmTULJUx3v4fKtCAQhbPUeHQgIOMiI6xSP5HF_BVqthGo7xJxI7zHvzXf9XD7IBB9wYD7CBj8QXfJhLg3h_F3i2YXYx'
            }
        });
      if (response.ok) {
        const jsonResponse = await response.json();
        return jsonResponse;
      }
    } catch (error) {
      console.log(error);
    }
  };