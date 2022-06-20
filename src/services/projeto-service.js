import { baseUrl } from "../environments/environment";
import axios from 'axios';

const projetoUrl = `${baseUrl}/projeto`

/**
 * Busca todos os projetos de um determinado usuario
 * @param {*} idUsuario id do usuário
 * @returns lista de projetos
 */
export const buscarProjetosPorUsuarioId = async (idUsuario) => {
  return axios.get(`${projetoUrl}/por-usuario/${idUsuario}`);
}