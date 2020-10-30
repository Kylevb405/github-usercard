import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

const cardDiv = document.querySelector('.cards')

const kyleGit = 'https://api.github.com/users/Kylevb405'

axios.get(kyleGit)
.then((res) => {

  const userData = res.data

  console.log(userData);

  const kyleCard = githubCardComponent(userData)

  cardDiv.appendChild(kyleCard)  

}).catch(err => console.log(err));



















axios.get(`${kyleGit}/followers`)
  .then((res) => {

    const followerObjects = res.data

    followerObjects.forEach(object => {

      console.log(object);

       const followerCard = object.url

       axios.get(`${followerCard}`)

       .then((res) => {
         
         const followerData = res.data
   
         console.log(followerData);
   
         const followerCard = githubCardComponent(followerData)
         
         cardDiv.appendChild(followerCard)
       })
       .catch(err => console.log(err));
    })
  })
  .catch(err => console.log(err));
  
/*
STEP 2: Inspect and study the data coming back, this is YOUR
github info! You will need to understand the structure of this
data in order to use it to build your component function

Skip to STEP 3.
*/
/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
    */
   
   /*
   STEP 5: Now that you have your own card getting added to the DOM, either
   follow this link in your browser https://api.github.com/users/<Your github name>/followers,
   manually find some other users' github handles, or use the list found at the
   bottom of the page. Get at least 5 different Github usernames and add them as
   Individual strings to the friendsArray below.
   
   Using that array, iterate over it, requesting data for each user, creating a new card for each
   user, and adding that card to the DOM.
   */
  /*
    List of LS Instructors Github username's:
      tetondan
      dustinmyers
      justsml
      luishrd
      bigknell
  */
// const followersArray = [];
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card"> DONE
      <img src={image url of user} /> DONE
      <div class="card-info"> DONE
        <h3 class="name">{users name}</h3> DONE
        <p class="username">{users user name}</p> DONE
        <p>Location: {users location}</p> DONE
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a> DONE
        </p>
        <p>Followers: {users followers count}</p>  
        <p>Following: {users following count}</p> 
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function githubCardComponent(objData) {

  const gitCard = document.createElement('div')
    gitCard.classList.add('card')

    const userIMG = document.createElement('img')
      userIMG.setAttribute('src', objData.avatar_url)
    
    const gitCardInfo = document.createElement('div')
      gitCardInfo.classList.add('card-info')
    
    const nameHeader = document.createElement('h3')
      nameHeader.classList.add('name')
      nameHeader.textContent = `${objData.name}`
    
    const  usernamePTag = document.createElement('p')
      usernamePTag.classList.add('username')
      usernamePTag.textContent = `${objData.login}`
    
    const locationPTag = document.createElement('p')
      locationPTag.textContent = `Location: ${objData.location}`

    const profilePtag = document.createElement('p')
      profilePtag.textContent = `Profile: `
    
    const profileAtag = document.createElement('a')
      profileAtag.setAttribute('href', objData.html_url)
      profileAtag.textContent = `${objData.html_url}`
    
    const followersPtag = document.createElement('p')
      followersPtag.textContent = `Followers: ${objData.followers}`
    
    const followingPTag = document.createElement('p')
      followingPTag.textContent = `Following: ${objData.following}`
    
    const bioPTag = document.createElement('p')
      bioPTag.textContent = `Bio: ${objData.bio}`
    
  gitCard.appendChild(userIMG)
  gitCard.appendChild(gitCardInfo)
    gitCardInfo.appendChild(nameHeader)
    gitCardInfo.appendChild(usernamePTag)
    gitCardInfo.appendChild(locationPTag)
    gitCardInfo.appendChild(profilePtag)
      profilePtag.appendChild(profileAtag)
    gitCardInfo.appendChild(followersPtag)
    gitCardInfo.appendChild(followingPTag)
    gitCardInfo.appendChild(bioPTag)
    
  return gitCard
}