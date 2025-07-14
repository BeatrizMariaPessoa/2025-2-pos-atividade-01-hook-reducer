
export const initialState = {
  tarefas: [],
};


export const reducer = (state, action) => {
    switch (action.type) {
        case "adicionar_tarefa":
            const tarefas = JSON.parse(localStorage.getItem("tarefas") || "[]");
            const novoId = tarefas.length + 1;

            const novaTarefa ={
                id: novoId,
                nome: action.payload.nome,
                descricao: action.payload.descricao,
                concluida: false,
            }

            const novasTarefas = [...tarefas, novaTarefa];
            localStorage.setItem("tarefas", JSON.stringify(novasTarefas));
            return {
                ...state,
                tarefas: novasTarefas,
            };
        case "listar_tarefas":
            const tarefasTotais = localStorage.getItem("tarefas");
            return {
                ...state,
                tarefas: JSON.parse(tarefasTotais || "[]"),
            };
        default:
            return state;
    }
};
