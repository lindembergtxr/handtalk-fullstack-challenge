#!/usr/bin/env bash

echo "Encerrando servidores..."

# Docker
if [ -f "docker-compose.yml" ]; then
  echo "Parando containers Docker..."
  docker-compose down
fi

# Frontend e Backend
PORTS=("3000" "3001")

for PORT in "${PORTS[@]}"; do
  PID=$(lsof -t -i:$PORT)
  if [ -n "$PID" ]; then
    echo "Matando processo na porta $PORT (PID $PID)..."
    kill -9 $PID 2>/dev/null || true
  else
    echo "Nenhum processo encontrado na porta $PORT."
  fi
done

echo "Todos os serviços foram encerrados."