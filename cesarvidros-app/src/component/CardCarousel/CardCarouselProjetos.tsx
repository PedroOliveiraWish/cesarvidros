import React from "react";
import { Carousel, Row, Col } from "antd";
import { CategoriaCard } from "../CategoriaCard/CategoriaCard";
import { useCategoria } from "../../hooks/useCategoria";

export const CarouselCardCategoria: React.FC = () => {
  const categorias = useCategoria();

  // Função para dividir o array em grupos
  const chunkArray = (arr: any[], chunkSize: number) => {
    const result: any[] = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  };

  // Defina quantos cartões por slide
  const cardsPerSlide = 1; // Você pode ajustar isso conforme necessário
  const groupedCategorias = chunkArray(categorias, cardsPerSlide);

  return (
    <Carousel autoplay={true} autoplaySpeed={2000}>
      {groupedCategorias.map((group, index) => (
        <div key={index}>
          <Row gutter={[16, 16]} justify="center">
            {group.map((categoria: any) => (
              <Col xs={24} sm={24} md={12} key={categoria.id_categoria}>
                <CategoriaCard
                  id_categoria={categoria.id_categoria}
                  imagem_url={categoria.imagem_url}
                  descricao={categoria.descricao}
                  nome={categoria.nome}
                />
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Carousel>
  );
};