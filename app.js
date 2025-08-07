import express from 'express';
import * as repoCarros from './repositories/carrosRepository.js';
import * as repoTurma from "./repositories/turmaRepository.js";
import * as repoDesenho from './repositories/desenhoRepository.js';
import * as repoPizzas from './repositories/pizzasRepository.js';
import * as repoEstados from './repositories/estadosRepository.js';
import * as repoFuncionario from './repositories/funcionarioRepository.js';
import * as repoHospital from './repositories/hospitalRepository.js';
import * as repoMercado from './repositories/mercadoRepository.js';
import * as repoRoupa from './repositories/roupaRepository.js';
import * as repoViagem from './repositories/viagemRepository.js';
const api = express();
api.use(express.json());


//http://localhost:5000/carros
api.get('/carros', async (req, resp) => {
    let registros = await repoCarros.listarCarros();
    resp.send(registros)
})
api.post('/carros', async (req, resp) => {
    let Nova = req.body;
    let id = await repoCarros.inserirCarros(Nova);
    resp.send({newId: id})
})
api.get('/carros/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let registros = await repoCarros.consultarCarros(id);
    resp.send(registros);
  })
api.get('/carros/filtro', async (req, resp) => {
    let nome = req.query.nome;
    let registros = await repoCarros.filtrarPorNome(nome);
    resp.send(registros);
})
api.post('/curso', async (req, resp) => {
    let novoCurso = req.body;
  
    let id = await repo.inserirCurso(novoCurso);
    resp.send({ novoId: id });
  })
  
  
api.put('/carros/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let novosDados = req.body;
  
    await repoCarros.alterarCarros(id, novosDados);
    resp.send();
})
  
  
api.delete('/carros/:id', async (req, resp) => {
    let id = Number(req.params.id);
  
    await repoCarros.removerCarros(id);
    resp.send();
})
    


//http://localhost:5000/turma
api.get('/turma', async (req, resp) => {
    let registros = await listarTurma();
    resp.send(registros)
})
api.post('/turma', async (req, resp) => {
    let Nova = req.body;
    let id = await adicionarTurma(Nova);
    resp.send({newId: id})
})


//http://localhost:5000/desenho
api.get('/desenho', async (req, resp) => {
    let registros = await listarDesenho();
    resp.send(registros)
})
api.post('/desenho', async (req, resp) => {
    let Nova = req.body;
    let id = await adicionarDesenho(Nova);
    resp.send({newId: id})
})

//http://localhost:5000/pizzas
api.get('/pizzas', async (req, resp) => {
    let registros = await listarPizzas();
    resp.send(registros)
})
api.post('/pizzas', async (req, resp) => {
    let Nova = req.body;
    let id = await adicionarPizzas(Nova);
    resp.send({newId: id})
})

//http://localhost:5000/estados
api.get('/estados', async (req, resp) => {
    let registros = await listarEstados();
    resp.send(registros)
})
api.post('/estados', async (req, resp) => {
    let Nova = req.body;
    let id = await adicionarEstados(Nova);
    resp.send({newId: id})
})

//http://localhost:5000/funcionarios
api.get('/funcionarios', async (req, resp) => {
    let registros = await listarFuncionarios();
    resp.send(registros)
})
api.post('/funcionarios', async (req, resp) => {
    let Nova = req.body;
    let id = await adicionarFuncionarios(Nova);
    resp.send({newId: id})
})

//http://localhost:5000/hospital
api.get('/hospital', async (req, resp) => {
    let registros = await listarPaciente();
    resp.send(registros)
})
api.post('/hospital', async (req, resp) => {
    let Nova = req.body;
    let id = await adicionarPaciente(Nova);
    resp.send({newId:id})
})

//http://localhost:5000/mercado
api.get('/mercado', async (req, resp) => {
    let registros = await listarMercado();
    resp.send(registros)
})
api.post('/mercado', async (req, resp) => {
    let Nova = req.body;
    let id = await adicionarMercado(Nova);
    resp.send({newId: id})
})

//http://localhost:5000/roupa
api.get('/roupa', async (req, resp) => {
    let registros = await listarRoupa();
    resp.send(registros)
})
api.post('/roupa', async (req, resp) => {
    let Nova = req.body;
    let id = await adicionarRoupa(Nova);
    resp.send({newId:id})
})

//http://localhost:5000/viagem
api.get('/viagem', async (req, resp) => {
    let registros = await listarViagem();
    resp.send(registros)
})
api.post('/viagem', async (req, resp) => {
    let Nova = req.body;
    let id = await adicionarViagem(Nova);
    resp.send({newId:id})
})


api.listen(5000, () => console.log("API rodando..."))