import { pool } from "../database";
import { SubCategoria } from "../types/SubCategoria";

const getSubCategoria = async (): Promise<SubCategoria[]> => {
    try {
        const query = `
select categoria.id_categoria, categoria.nome as categoria_nome, json_agg(json_build_object('id_sub', sub_categoria.id_sub_categoria, 'nome', sub_categoria.nome)) as sub_categorias from categoria left join sub_categoria on categoria.id_categoria = sub_categoria.categoria_id group by categoria.id_categoria;
        `
        const subcategoria = await pool.query(query);
        const sub = subcategoria.rows.map((item) => item.sub_categorias);
         
        const flattenedSub = sub.flat();
        
        const objectItem = flattenedSub.map((i) => i);
        
        const filteredNullObjects = objectItem.filter((i: {id_sub: number, nome: string}) => i.id_sub !== null); 
        return filteredNullObjects;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export default getSubCategoria;