import { connection } from "./connection.js";


export async function listarCarros() {
  const comando = `
    SELECT *
      FROM carros
  `

  const [registros] = await connection.query(comando)
  return registros;
}


export async function inserirCarros(novoCr) {
  const comando = `
    INSERT INTO carros (ds_marca, ds_modelo, nr_ano, vl_preco, img_carro, dt_inclusao)
               values (?, ?, ?, ?, ?, ?);
  `

  const [info] = await connection.query(comando, [
    novoCr.ds_marca,
    novoCr.ds_modelo,
    novoCr.nr_ano,
    novoCr.vl_preco,
    novoCr.img_carro,
    novoCr.dt_inclusao
  ])
  return info.insertId;
}

export async function consultarCarros() {
  const comando = `
    SELECT *
       FROM carros
     WHERE id = ? 
  `
  const [registros] = await connection.query(comando, [id])
  return registros[0]; 
}

export async function filtrarPorNome(ds_modelo) {
  const comando = `
    SELECT *
      FROM carros
     WHERE ds_modelo like ? 
  `

  const [registros] = await connection.query(comando, ['%'+ ds_modelo +'%'])
  return registros;
}

export async function alterarCarros(id, novosDados) {
  const comando = `
    UPDATE curso
       SET nome = ?,
           carga_horaria = ?,
           area = ?
     WHERE id = ?
  `

  const [info] = await connection.query(comando, [
    novosDados.ds_modelo,
    novosDados.ds_marca,
    novosDados.vl_preco,
    id
  ])
}


export async function removerCarros(id) {
  const comando = `
    DELETE FROM carros
          WHERE id = ?
  `

  const [info] = await connection.query(comando, [id]);
}
