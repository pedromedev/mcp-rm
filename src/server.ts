import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { buildTextResponse } from "./utils/mcp.js";
import {
  buscarCursos,
  criarCurso,
} from "./controllers/cursoController.js";
import {
  buscarHabilitacoes,
  criarHabilitacao,
} from "./controllers/habilitacaoController.js";
import {
  buscarDisciplinas,
  criarDisciplina,
} from "./controllers/disciplinaController.js";
import {
  buscarGrades,
  criarGrade,
} from "./controllers/gradeController.js";
import {
  cursoGetArgs,
  cursoPostArgs,
} from "./models/curso.js";
import {
  habilitacaoGetArgs,
  habilitacaoPostArgs,
} from "./models/habilitacao.js";
import {
  disciplinaGetArgs,
  disciplinaPostArgs,
} from "./models/disciplina.js";
import {
  gradeGetArgs,
  gradePostArgs,
} from "./models/grade.js";

const server = new McpServer({ name: "mcp-educacional", version: "1.0.0" });

server.tool(
  "buscar_cursos",
  "Busca cursos no TOTVS RM (EduCursoData).",
  cursoGetArgs,
  async (input) => {
    const resultado = await buscarCursos(input);
    return buildTextResponse(resultado);
  }
);

server.tool(
  "criar_curso",
  "Cria um curso no TOTVS RM (EduCursoData).",
  cursoPostArgs,
  async (input) => {
    const resultado = await criarCurso(input);
    return buildTextResponse(resultado);
  }
);

server.tool(
  "buscar_habilitacoes",
  "Lista habilitações no TOTVS RM (EduHabilitacaoData).",
  habilitacaoGetArgs,
  async (input) => {
    const resultado = await buscarHabilitacoes(input);
    return buildTextResponse(resultado);
  }
);

server.tool(
  "criar_habilitacao",
  "Cria uma habilitação no TOTVS RM (EduHabilitacaoData).",
  habilitacaoPostArgs,
  async (input) => {
    const resultado = await criarHabilitacao(input);
    return buildTextResponse(resultado);
  }
);

server.tool(
  "buscar_disciplinas",
  "Lista disciplinas no TOTVS RM (EduDisciplinaData).",
  disciplinaGetArgs,
  async (input) => {
    const resultado = await buscarDisciplinas(input);
    return buildTextResponse(resultado);
  }
);

server.tool(
  "criar_disciplina",
  "Cria uma disciplina no TOTVS RM (EduDisciplinaData).",
  disciplinaPostArgs,
  async (input) => {
    const resultado = await criarDisciplina(input);
    return buildTextResponse(resultado);
  }
);

server.tool(
  "buscar_grades",
  "Lista grades no TOTVS RM (EduGradeData).",
  gradeGetArgs,
  async (input) => {
    const resultado = await buscarGrades(input);
    return buildTextResponse(resultado);
  }
);

server.tool(
  "criar_grade",
  "Cria uma grade no TOTVS RM (EduGradeData).",
  gradePostArgs,
  async (input) => {
    const resultado = await criarGrade(input);
    return buildTextResponse(resultado);
  }
);

await server.connect(new StdioServerTransport());

