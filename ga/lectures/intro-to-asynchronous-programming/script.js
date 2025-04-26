const button = document.querySelector('button')
const input = document.querySelector('input')
const div = document.querySelector('div')

const getDogBreeds = async () => {

    try {
        let breed = input.value;
        const response = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`);
        let picture = response.data.message;
        div.innerHTML = `<img src=${picture} />`; 
    } catch (error) {
      console.log(error);
      div.innerHTML="<h1>There has been an error!</h1>";
    }
}

button.addEventListener('click', getDogBreeds)