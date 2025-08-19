import { connection } from "./connection.js";

export async function filtrarFuncionario(nome) {
  const comando = `
    SELECT *
    FROM funcionarios
    WHERE nm_funcionario LIKE ?
  `
  const [registros] = await connection.query(comando, ['%' + nome + '%']);
  return registros;
}

export async function consultarFuncionario(id) {
  const comando = `
    SELECT *
    FROM funcionarios
    WHERE id = ?
  `
  const [registros] = await connection.query(comando, [id]);
  return registros[0];
}

export async function listarFuncionarios() {
  const comando = `
    SELECT *
      FROM funcionarios
  `

  const [registros] = await connection.query(comando)
  return registros;
}


export async function adicionarFuncionarios(novoFc) {
  const comando = `
    INSERT INTO funcionarios (nm_funcionario, horas_diarias, salario, cpf, aposentado)
               values (?, ?, ?, ?, ?);
  `

  const [info] = await connection.query(comando, [
    novoFc.nm_funcionario, 
    novoFc.horas_diarias, 
    novoFc.salario, 
    novoFc.cpf, 
    novoFc.aposentado])
  return info.insertId;

}

export async function alterarFuncionario(id, novosDadosFuncionario) {
  const comando = `
    UPDATE funcionarios
    nm_funcionario = ?, 
    horas_diarias = ?,
    salario = ?, 
    cpf = ?, 
    aposentado = ?
     WHERE id = ?;
  `

  await connection.query(comando, [
    novosDadosFuncionario.nm_funcionario,
    novosDadosFuncionario.horas_diarias,
    novosDadosFuncionario.salario,
    novosDadosFuncionario.cpf,
    novosDadosFuncionario.aposentado,
    id]);
}

export async function removerFuncionario(id) {
  const comando = `
    DELETE FROM funcionarios
          WHERE id = ?
  `

  const [info] = await connection.query(comando, [id]);
}
