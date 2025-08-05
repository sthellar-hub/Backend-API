import express from 'express';
import * as repoCarro from './repositories/carrosRepository.js';
import { listarTurma, adicionarTurma } from "./repositories/turmaRepository.js";
import { listarDesenho, adicionarDesenho } from './repositories/desenhoRepository.js';
import { listarPizzas , adicionarPizzas } from './repositories/pizzasRepository.js';
import { listarEstados, adicionarEstados } from './repositories/estadosRepository.js';
import { listarFuncionarios, adicionarFuncionarios } from './repositories/funcionarioRepository.js';
import { listarPaciente, adicionarPaciente } from './repositories/hospitalRepository.js';
import { listarMercado, adicionarMercado } from './repositories/mercadoRepository.js';
import { listarRoupa, adicionarRoupa } from './repositories/roupaRepository.js';
import { listarViagem, adicionarViagem } from './repositories/viagemRepository.js';
const api = express();
api.use(express.json());


//http://localhost:5000/carros
api.get('/carros', async (req, resp) => {
    let registros = await listarCarros();
    resp.send(registros)
})
api.post('/carros', async (req, resp) => {
    let Nova = req.body;
    let id = await adicionarCarros(Nova);
    resp.send({newId: id})
})
api.get('/carros/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let registros = await repoCarro.consultarCarros(id);
    resp.send(registros);
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