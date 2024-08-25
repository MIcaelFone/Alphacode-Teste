 <p align="center">
    <a href="https://laravel.com" target="_blank">
        <img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo">
    </a>
</p>

<h1 align="center">Sistema de Gerenciamento de Contatos</h1>
<p align="center">
    <img src="https://img.shields.io/badge/Status-Concluído-brightgreen" alt="Status: Concluído">
</p>

## 📋 Sobre o Projeto

Este é um sistema completo de gerenciamento de contatos. Com esta aplicação, o usuário pode:

- 📌 Cadastrar novos contatos.
- ✏️ Alterar contatos existentes.
- 🗑️ Excluir contatos conforme necessário.

O sistema inclui uma página dedicada para o cadastro de novos contatos e outra para a gestão, permitindo a edição e exclusão dos contatos cadastrados.

## 🛠️ Requisitos

Antes de executar o projeto, certifique-se de que seu computador possui os seguintes softwares instalados e configurados:

- [Composer](https://getcomposer.org) ![Composer Icon](https://img.shields.io/badge/Composer-885630?style=for-the-badge&logo=composer&logoColor=white)
- [PHP](https://www.php.net) versão 7.2.5 ou superior ![PHP Icon](https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white)
- [XAMPP](https://www.apachefriends.org) ![XAMPP Icon](https://img.shields.io/badge/XAMPP-FB7A24?style=for-the-badge&logo=apache&logoColor=white)

## 📚 Bibliotecas Utilizadas

O projeto utiliza as seguintes bibliotecas e frameworks:

- [Bootstrap](https://getbootstrap.com) ![Bootstrap Icon](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white): Framework CSS para estilização e layout responsivo.
- [Laravel](https://laravel.com) ![Laravel Icon](https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white): Framework PHP para o desenvolvimento web.
  
## 🏗️ Passo a Passo para Instalar e Executar o Projeto

### 1. 🛠️ Clonar o Repositório

Abra um terminal e execute o seguinte comando para clonar o repositório:

```bash
git clone https://github.com/MIcaelFone/Alphacode-Teste.git
```

### 2. 📂 Acessar o Diretório do Projeto

Abra um terminal e execute o seguinte comando para clonar o repositório:

```bash
git clone https://github.com/MIcaelFone/Alphacode-Teste.git
```
### 3. 🖥️ Abrir o Projeto em um Editor de Código
   
Se você usa o Visual Studio Code, por exemplo, pode abrir o projeto com o comando

```bash
 code .
```
## ⚙️ Configuração do Banco de Dados

### 1. 🔧 Configurar o Arquivo .env
Localize e abra o arquivo .env na raiz do projeto. Configure as seguintes variáveis para definir a conexão com o banco de dados:

```bash
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=contatosDB
DB_USERNAME=root
DB_PASSWORD=sua_senha_aqui
```

### 2. 🖥️ Iniciar Servidores no XAMPP
Certifique-se de iniciar os servidores MySQL e Apache no XAMPP.

### 3. 🏗️ Criar o Banco de Dados
Acesse o phpMyAdmin no navegador e crie o banco de dados com o nome especificado na variável DB_DATABASE.

## 🚀 Iniciar o Projeto

### 1. 🔄 Rodar as Migrações
Utilize o comando de migração do Laravel para criar as tabelas no banco de dados:

```bash
php artisan migrate
```
## 2. 🚀 Iniciar o Servidor de Aplicação
Execute o servidor de aplicação com o comando:
```bash
php artisan serve
```
## 3. 🌐 Acessar o Projeto
Abra o navegador e acesse o link gerado, que normalmente será: http://localhost:8000  
