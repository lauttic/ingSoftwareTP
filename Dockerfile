# Imagen base
FROM node:18

# Crear directorio de trabajo
WORKDIR /usr/src/app

# Copiar dependencias
COPY package*.json ./
RUN npm install

# Copiar código fuente
COPY . .

# Exponer puerto
EXPOSE 3000

# Comando de inicio
CMD ["npm", "start"]