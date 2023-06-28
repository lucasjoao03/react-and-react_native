exports.seed = function(knex) {
  // Busca todas as categorias existentes no banco de dados
  return knex('categories')
    .select('name')
    .then(function(existingCategories) {
      const categoriesToAdd = [
        { name: 'Alimentos' },
        { name: 'Brinquedos' },
        { name: 'Animais' },
        { name: 'Nova Categoria' } // Nova categoria a ser adicionada
      ];

      // Filtra as novas categorias para evitar duplicatas
      const newCategories = categoriesToAdd.filter(category => {
        return !existingCategories.some(existingCategory => {
          return existingCategory.name === category.name;
        });
      });

      // Insere as novas categorias
      return knex('categories').insert(newCategories);
    });
};