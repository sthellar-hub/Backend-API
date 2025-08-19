import { connection } from "./connection.js";

export async function filtrarCarro(nome) {
  const comando = `
    SELECT *
      FROM carros
     WHERE nome like ? 
  `

  const [registros] = await connection.query(comando, ['%'+nome+'%'])
  return registros;
}

export async function consultarCarros(id) {
  const comando = `
    SELECT *
    FROM carros
    WHERE id = ? 
  `
  const [registros] = await connection.query(comando, [id])
  return registros[0];
}

export async function listarCarros() {
  const comando = `
    SELECT *
      FROM carros
  `

  const [registros] = await connection.query(comando)
  return registros;
}


export async function adicionarCarros(novoCr) {
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
    novoCr.dt_inclusao])
  return info.insertId;
}

export async function alterarCarro(id, novosDadosCarro) {
  const comando = `
    UPDATE carros
       SET ds_marca = ?,
           ds_modelo = ?,
           nr_ano = ?,
           vl_preco = ?,
           img_carro = ?
     WHERE id = ?;
  `

  await connection.query(comando, [
    novosDadosCarro.ds_marca, 
    novosDadosCarro.ds_modelo, 
    novosDadosCarro.nr_ano, 
    novosDadosCarro.vl_preco, 
    novosDadosCarro.img_carro, 
    id]);
}

export async function removerCarro(id) {
  const comando = `
    DELETE FROM carros
          WHERE id = ?;
  `

  await connection.query(comando, [id]);
}
