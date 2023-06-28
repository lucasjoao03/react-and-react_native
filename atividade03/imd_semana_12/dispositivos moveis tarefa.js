import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

function MinhaLista() {
  const [lista, setLista] = useState([
    { id: Math.random().toString(), conteudo: 'Tarefa 1', marcado: false },
    { id: Math.random().toString(), conteudo: 'Tarefa 2', marcado: false },
    { id: Math.random().toString(), conteudo: 'Tarefa 3', marcado: false }
  ]);
  const [novoItem, setNovoItem] = useState('');
  const [length, setLength] = useState(lista.length + 1);

  const adicionarItem = () => {
    if (novoItem.trim() !== '') {
      const novoElemento = { id: Math.random().toString(), conteudo: novoItem, marcado: false };
      setLista([...lista, novoElemento]);
      setNovoItem('');
      setLength(length + 1);
    }
  };

  const remover = (id) => {
    const novaLista = lista.filter((item) => item.id !== id);
    setLista(novaLista);
    setLength(length - 1);
  };

  useEffect(() => {
    document.title = `Lista de tarefas (${length})`;
  }, [length]);

  return (
    <div>
      <h1>Tarefas</h1>
      <ul>
        {lista.map((item) => (
          <li key={item.id}>
            <span style={{ textDecoration: item.marcado ? 'line-through' : 'none' }}>
              {item.conteudo}
            </span>
            <input
              type="checkbox"
              checked={item.marcado}
              onChange={() => remover(item.id)}
            />
          </li>
        ))}
      </ul>
      <div>
        O que precisa ser feito?{' '}
        <input
          type="text"
          value={novoItem}
          onChange={(e) => setNovoItem(e.target.value)}
        />
        <button onClick={adicionarItem}>Adicionar #{length}</button>
      </div>
    </div>
  );
}

ReactDOM.render(<MinhaLista />, document.getElementById('root'));