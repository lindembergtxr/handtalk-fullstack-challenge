#!/usr/bin/env bash
echo "Iniciando setup do projeto..."

# Criar arquivos .env se não existirem
echo "Verificando arquivos .env..."

if [ ! -f "./.env" ]; then
  echo "Criando ./.env"
  cat <<EOF > ./.env
FRONTEND_PORT=3000
BACKEND_PORT=3001
DATABASE_PORT=3002
DATABASE_USER=myuser
DATABASE_PASS=mypassword
DATABASE_NAME=handtalk
DATABASE_HOST=localhost
EOF
fi

if [ ! -f "./frontend/.env" ]; then
  echo "Criando ./frontend/.env"
  cat <<EOF > ./frontend/.env
VITE_APP_PORT=3000
VITE_BACKEND_PORT=3001
EOF
fi

# Instalar dependências
echo "Instalando dependências..."

cd backend && npm install
cd ../frontend && npm install
cd ..

# Subir Docker (se existir)
if [ -f "docker-compose.yml" ]; then
  echo "Rodando docker-compose up -d..."
  docker-compose up -d
fi

# Rodar backend e frontend
echo "Iniciando servidores..."

(cd backend && npm run dev) &
(cd frontend && npm run dev) &

echo "Projeto iniciado!"
echo "Frontend: http://localhost:5173"
echo "Backend: http://localhost:3001"