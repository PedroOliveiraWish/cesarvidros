import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";

import '../../styles/CardCategoria/CardCategoria.css'

interface Props {
    id_categoria: number;
    nome: string;
    imagem_url: string;
    descricao: string;
}

export const CardCategoria: React.FC<Props> = (categorias) => {
    return (
        <Card
        key={categorias.id_categoria}
            title={categorias.nome}
            cover={<img  src={categorias.imagem_url} alt="Imagem da categoria" />}
            extra={<Link  to={'/projetos'}>Ver mais</Link>}
            className="categoria-card"
        >
            <Card.Meta description={categorias.descricao} />
        </Card>
    )
}