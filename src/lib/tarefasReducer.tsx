
export const initialState = {
  tarefas: [],
};


export const reducer = (state, action) => {
    switch (action.type) {
        case "adicionar_tarefa":
            const tarefas = JSON.parse(localStorage.getItem("tarefas") || "[]");
            const novoId = tarefas.length > 0 
                ? Math.max(...tarefas.map(t => t.id)) + 1
                : 1;

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
        case "editar_tarefa":
            const tarefasEditadas = JSON.parse(localStorage.getItem("tarefas") || "[]");
            const tarefaEditada = tarefasEditadas.find(t => t.id === action.payload.id);
            if (tarefaEditada) {
                tarefaEditada.nome = action.payload.nome;
                tarefaEditada.descricao = action.payload.descricao;
                localStorage.setItem("tarefas", JSON.stringify(tarefasEditadas));
            }
            return {
                ...state,
                tarefas: [...tarefasEditadas],
            };
        default:
            return state;
    }
};
