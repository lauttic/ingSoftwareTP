# 🧩 Proyecto: APITareas

## 📘 Descripción

**APITareas** es una aplicación simple desarrollada en **Node.js + Express** que expone una **API REST** para gestionar tareas y una **interfaz web** para interactuar con ellas.  
El proyecto se contenerizó con **Docker** y se publicó en **Docker Hub**, demostrando el ciclo completo de desarrollo, despliegue y versionado con **Git**.

---

## GITHUB

LINK REPOSITORIO: https://github.com/lauttic/ingSoftwareTP

Cree el repositorio en mi cuenta, y parado en la carpeta del proyecto ejecute los siguientes comandos: 
git remote add origin https://github.com/lauttic/ingSoftwareTP.git  --> para conectar el codigo con el repositorio

git branch -M main
git push -u origin main   ---> crear la rama main y subirla al repositorio de GitHub.

git add . ----> para agregar los archivos y carpetas al staging area.
git commit -m "primer commit" ----> para confirmar el primer commit
git push --set-upstream origin main   ----> para subir a la rama main el commit


## Clonar el repositorio

git clone https://github.com/usuario/APITareas.git

## DOCKER

Una vez instalado docker y abierto el Docker Desktop, para en el proyecto ejecutamos los comandos:

docker build -t apitareas . ----> Construye una imagen llamada apitareas a partir del Dockerfile del proyecto.

docker run -d -p 3000:3000 --name contenedor-apitareas apitareas ----> Ejecuta un contenedor en segundo plano (-d) mapeando el puerto 3000 del host al 3000 del contenedor.

## DOCKER HUB

Iniciar sesión en Docker Hub parado en la carpeta del proyecto con el comando:
docker login

Verificar las imágenes locales:
docker images

Etiquetar la imagen para Docker Hub:
docker tag apitareas lauttic/apitareas:latest

Subir la imagen al repositorio remoto:
docker push lauttic/apitareas:latest

Se podrá ver la imágen en la URL: 
👉 https://hub.docker.com/repositories/lauttic

## VISTA

Una vez que el contenedor esté corriendo, podés acceder a la aplicación desde tu navegador en:

👉 http://localhost:3000/



