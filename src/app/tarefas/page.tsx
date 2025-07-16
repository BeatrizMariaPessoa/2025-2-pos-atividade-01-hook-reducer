"use client";
import Header from "@/components/header";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { reducer, initialState } from "@/lib/tarefasReducer";
import { useReducer } from "react";

interface Tarefa {
    id: number;
    nome: string;
    descricao: string;
    concluida: boolean;
}

function TarefasPage() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
      dispatch({ type: "listar_tarefas" });
    }, []);

    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 m-3">
          <h1 className="text-2xl font-bold mb-4">Tarefas</h1>
          <Button>
            <Link href="/tarefas/nova" className="flex items-center gap-2">
              <span>Adicionar Nova Tarefa +</span>
            </Link>
          </Button>
          {state.tarefas.length === 0 ? (
            <p>Nenhuma tarefa encontrada</p>
          ) : (
            <ul className="flex flex-col gap-2 mt-4">
            {state.tarefas.map((tarefa: Tarefa) => (
              <li key={tarefa.id} className="border-2 p-2 rounded-sm pb-2 border-gray-300 flex flex-row justify-between items-top">
                <div className="max-w-7xl">
                  <h2 className="text-lg font-semibold mb-4">{tarefa.nome}</h2>
                  <Badge variant={"destructive"} className="mb-2">
                    {tarefa.concluida ? "Concluída" : "Pendente"}
                  </Badge>
                  <p className="">
                    {tarefa.descricao}
                  </p>
                </div>
                <div className="space-x-3">
                  <Button variant="outline" className="mt-2">
                    <Link href="/tarefas/nova">Editar</Link>
                  </Button>
                  <Button variant="destructive" className="mt-2">
                    <Link href="/tarefas/nova">Apagar</Link>
                  </Button>
                </div>
              </li>

            ))}
          </ul>
          )}

          <ul className="flex flex-col gap-2 mt-4"></ul>
        </main>
        <footer className="bg-gray-100 py-4 px-6 text-center text-sm text-gray-600">
          <p>
            GNU GENERAL PUBLIC LICENSE Version 3, 29 June 2007
            <br />
            <a
              href="https://fsf.org/"
              className="hover:text-gray-800 underline"
            >
              Copyright (C) 2007 Free Software Foundation, Inc.
            </a>
          </p>
        </footer>
      </div>
    );
}

export default TarefasPage;