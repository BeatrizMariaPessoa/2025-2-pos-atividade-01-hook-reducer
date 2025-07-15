"use client";
import Header from "@/components/header";
import { useState, useReducer } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { reducer, initialState } from "@/lib/tarefasReducer";

function NovaTarefa() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [nome, setNome] = useState(""); // ← Estado para nome
  const [descricao, setDescricao] = useState(""); // ← Estado para descrição

  const handleSubmit = (e) => {
    e.preventDefault(); // ← Prevenir comportamento padrão

    if (!nome.trim()) {
      alert("Nome da tarefa é obrigatório!");
      return;
    }

    // ✅ Usar o dispatch do reducer
    dispatch({
      type: "adicionar_tarefa",
      payload: { nome, descricao },
    });

    // Limpar formulário
    setNome("");
    setDescricao("");

    alert("Tarefa salva com sucesso!");
    console.log("Tarefa salva:", state.tarefas);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 m-3">
        <h1 className="text-2xl font-bold mb-4">Nova Tarefa</h1>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Nome da Tarefa
          </label>
          <Input
            type="text"
            placeholder="Digite o nome da tarefa"
            className="w-80 mb-2"
            value={nome} // ← Valor controlado
            onChange={(e) => setNome(e.target.value)}
          />
          <label className="block mb-2 text-sm font-medium text-gray-500">
            Descrição da Tarefa
          </label>
          <Textarea
            placeholder="Digite a descrição da tarefa"
            className="mb-2 h-40 resize-none"
            rows={6}
            value={descricao} // ← Valor controlado
            onChange={(e) => setDescricao(e.target.value)}
          />
          <div className="flex justify-between items-center">
            <Button type="submit" className="w-32">
              Salvar
            </Button>
            <Button
              type="button"
              variant="destructive"
              className="w-32"
              asChild
            >
              <Link href="/tarefas">Cancelar</Link>
            </Button>
          </div>
        </form>
      </main>
      <footer className="bg-gray-100 py-4 px-6 text-center text-sm text-gray-600">
        <p>
          GNU GENERAL PUBLIC LICENSE Version 3, 29 June 2007
          <br />
          <a href="https://fsf.org/" className="hover:text-gray-800 underline">
            Copyright (C) 2007 Free Software Foundation, Inc.
          </a>
        </p>
      </footer>
    </div>
  );
}

export default NovaTarefa;
