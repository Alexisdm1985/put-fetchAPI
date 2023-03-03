// JavaScript code to submit the form
const form = document.getElementById('update-form');

function submitHandler(){

  form.addEventListener('submit', (event) => {
    event.preventDefault();
  
    const formData = new FormData(form);
    const url = 'http://localhost:3000/api/users'
    const dataObject = {}

    // set the dataObject with formdata values
    for (const [key, value] of formData.entries()){
      dataObject[key] = value;
    };
    
    return (put_fetchUsers(url, dataObject));
  
  });
  
}


async function put_fetchUsers (url, data){
  try {
    const options = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    } 

    const response = await fetch(url, options);
    const result = await response.json();

    console.log(result);
    
  } catch (error) {
    console.log('error en ejecucion', error);
    
  }
};

submitHandler();