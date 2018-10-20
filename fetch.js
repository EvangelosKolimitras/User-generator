const url = 'https://randomuser.me/api/';

const container = document.querySelector('#content');
const button = document.querySelector('#btn');

/* Constants responsible for retrieving DOM elements from the Image Section */
const imgContent = document.querySelector('#imgContainer');
const img = imgContent.querySelector('#image');
const image_title = imgContent.querySelector('#image-title');

/* Variables responsible for retrieving DOM elements from the Infos Section*/
const infos = document.querySelector('#infos');
const name = infos.querySelector('#full-name');
const sex = infos.querySelector('#sex');
const age = infos.querySelector('#age');
const city = infos.querySelector('#city');
const post = infos.querySelector('#post');
const state = infos.querySelector('#state');
const country = infos.querySelector('#country');
const email = infos.querySelector('#email');



button.addEventListener(
    'click',
    () => {
        fetch(url)
        .then(handleErrors)
        .then( r => r.json() )
        .then(
            (res) => {
                const data = res.results[0];
                console.log(data);
                return data;
            }
        )

        /* DOM MANIPULATION */

        .then(
            (data) => {
                img.src = data.picture.large
                image_title.innerHTML = data.name.first
                name.innerHTML = `${ data.name.title } ${ data.name.first } ${ data.name.last }`
                sex.innerHTML = ` ${ data.gender }` 
                if(data.gender === 'male') {
                    console.log('boy')
                    container.style.background = "#20232A"
                }else {
                    console.log('girl')
                    container.style.background = "#009688";
                }
                age.innerHTML = ` ${ data.dob.age }`
                city.innerHTML = ` ${ data.location.city }`
                post.innerHTML = ` ${ data.location.postcode }`
                state.innerHTML = ` ${ data.location.state }`
                country.innerHTML = ` ${ data.nat }`
                email.innerHTML = ` ${ data.email }`
            }
        )
        
        .catch( (error) => { console.log(error) } )
        
        
        function handleErrors(response)  {
            if(!response.ok) {
                throw Error(response.status);
            };
            return response;
        }
    }
);
