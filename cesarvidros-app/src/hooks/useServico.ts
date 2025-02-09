import { useState, useEffect } from "react";

interface Servico {
    id_servico: number;
    servico_nome: string;
    imagem_url: string;
    descricao: string;
    categoria_nome: string;
    sub_categoria_nome: string;
}

export const useServico = () => {
    const [servicos, setServicos] = useState<Servico[]>([]);

    useEffect(() => {
        const fetchServicos = async () => {
            try {
                const response = await fetch('https://cesarvidros.onrender.com/api/servicos/get-all', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })

                const response_json = await response.json()

                if (response_json.message === 'sucesso') {
                    setServicos(response_json.data)
                } else {
                    console.log(response_json.message, response_json.data)
                }
            } catch (error) {
                console.error(error);
            } finally {
                console.log('Servicos carregados')
            }
        }

        if (servicos.length === 0) {
            fetchServicos();
          }
    }, [])

    return servicos;
}