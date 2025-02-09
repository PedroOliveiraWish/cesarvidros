import { useEffect, useState } from "react";

interface Categoria {
    id_categoria: number;
    nome: string;
    imagem_url: string;
    descricao: string;
}

export const useCategoria = () => {
    const [categorias, setCategorias] = useState<Categoria[]>([]);

    useEffect(() => {
        const fetchCategorias = async () => {
            try {
                const response = await fetch('https://cesarvidros.onrender.com/api/categorias/get-all', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })

                const response_json = await response.json()

                if (response_json.message === 'sucesso') {
                    setCategorias(response_json.data)
                } else {
                    console.log(response_json.message, response_json.data)
                }
            } catch (error) {
                console.error(error);
            }
        }

        fetchCategorias()
    })

    return categorias
}