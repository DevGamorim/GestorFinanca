import { baseUrl } from "../environments/environment";
import axios from 'axios';

const usuarioUrl = `${baseUrl}/usuario`

/**
 * Recebe um login e senha e retorna se o usuário pode ou não logar.
 * @param {*} credenciais {login: string, senha: string}
 * @returns boolean
 */
export const autenticar = async (credenciais) => {
  return axios.post(`${usuarioUrl}/autenticar`, credenciais);
}

export const criarConta = async (dados) => {
  return axios.post(usuarioUrl, dados);
}