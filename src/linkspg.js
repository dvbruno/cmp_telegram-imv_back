// Extraindo os links dos imoveis da página

const puppeteer = require("puppeteer");

const urlalvo = "https://www.olx.com.br/imoveis/venda/estado-rj/norte-do-estado-do-rio/norte-do-estado/campos-dos-goytacazes?pe=30000&ps=10000&ret=1020&ret=1040&sf=1";

// Função assincrona autoexecutavél
async function linkimoveis(lkpesquisa){ 
    const dados = []; // Array para guardar as informações
    const browser = await puppeteer.launch({
        defaultViewport: null, //Para aparecer a página inteira
    });

    const page = await browser.newPage(); //Abre o navegador
    await page.goto(lkpesquisa, {timeout: 0}); // Vai para página desejada

    const options = await page.$$eval("#ad-list> li >a", (opts) =>
        opts.map((option) => option.attributes[1].nodeValue)
    );

    await browser.close();

    await options.map((lnk) => {
        const olnk = lnk
        dados.push(olnk);

    })

    await console.log(dados);
}

linkimoveis(urlalvo);
