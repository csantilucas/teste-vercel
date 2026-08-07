import dotenv from 'dotenv';
dotenv.config();

const elemento = document.getElementById('app') as HTMLElement;


const ulr = process.env.API_URL!


async function fetchData() {
  try {
   
    const response = await fetch(ulr);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    

    elemento.innerHTML = `<h1>Response status: ${response.status}</h1>`;
    const data = await response.json();
    console.log('Success:', data);

  } catch (error) {
    
    console.error('Fetch error:', error);
  }
}

fetchData();