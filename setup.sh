#!/bin/bash

# Verifica se o pnpm está instalado
if ! command -v pnpm &> /dev/null
then
    echo "pnpm não encontrado, por favor instale o pnpm antes de continuar."
    exit 1
fi

# Executa a instalação das dependências
echo "Instalando dependências com pnpm..."
pnpm install

# Confirmar que o setup foi bem-sucedido
echo "Setup concluído com sucesso!"
