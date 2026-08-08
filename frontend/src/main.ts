const elementoRes = document.getElementById('res') as HTMLElement;
const btnHome = document.getElementById('btn-home') as HTMLButtonElement;
const btnTest = document.getElementById('btn-test') as HTMLButtonElement;

const baseUrl = import.meta.env.VITE_API_URL;

// Função para buscar a rota principal ("/")
async function fetchHome() {
  try {
    elementoRes.innerHTML = "<p>Carregando...</p>";
    const response = await fetch(`${baseUrl}/`, {
      headers: { 'Accept': 'application/json' }
    });

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();
    elementoRes.innerHTML = `<h1>Resposta /: ${data.message}</h1>`;
  } catch (error) {
    console.error('Fetch error:', error);
    elementoRes.innerHTML = `<p style="color: red;">Erro ao carregar rota /</p>`;
  }
}

// Função para buscar a rota /test
async function fetchTest() {
  try {
    elementoRes.innerHTML = "<p>Carregando...</p>";
    const response = await fetch(`${baseUrl}/test`, {
      headers: { 'Accept': 'application/json' }
    });

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();
    elementoRes.innerHTML = `<h1>Resposta /test: ${data.message}</h1>`;
  } catch (error) {
    console.error('Fetch error:', error);
    elementoRes.innerHTML = `<p style="color: red;">Erro ao carregar rota /test</p>`;
  }
}

// Vincula os eventos de clique aos botões
btnHome.addEventListener('click', fetchHome);
btnTest.addEventListener('click', fetchTest);