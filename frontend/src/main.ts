const elemento = document.getElementById('app') as HTMLElement;
const elemento1 = document.getElementById('res') as HTMLElement;

// Use import.meta.env em vez de process.env
const url = import.meta.env.VITE_API_URL;

async function fetchData() {
  try {
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      console.log("Erro na requisição:", response.status, response.statusText);
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const text = await response.text();
    console.log('Resposta bruta da API:', text);

    const data = JSON.parse(text);
    elemento.innerHTML = `<h1>resposta da api: ${response.status}</h1>`;
    elemento1.innerHTML = `<h1>resposta da api: ${data.message}</h1>`;
    console.log('Success:', data);

  } catch (error) {
    console.error('Fetch error:', error);
  }
}

fetchData();