<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

</p>


## Sobre o projeto 

 O projeto é um sistema completo de gerenciamento de contatos. Nesta aplicação, o usuário pode cadastrar diversos contatos, além de ter a capacidade de alterá-los e deletá-los conforme necessário. O sistema inclui uma página para cadastrar novos contatos e outra página para gerenciar os contatos existentes, permitindo a edição e exclusão dos mesmos.

## Antes de executar o projeto, é necessário garantir que o seu computador tenha os seguintes softwares instalados e configurados:
<ul>
    <li> [Composer](https://getcomposer.org.)</li>
    <li> [PHP](https://getcomposer.org.) Versão 7.2.5 ou superior </li>
    <li> [Xammp](https://www.apachefriends.org) </li>
</ul>


## Passo a Passo para Instalar e Abrir o Projeto
 <ol>
      <li>
        Primeiro, abra um terminal ou prompt de comandos e execute o seguinte comando:
        <code>git clone https://github.com/MIcaelFone/Alphacode-Teste.git</code>
        Lembrando que, para rodar o projeto PHP, ele deve estar na pasta <code>htdocs</code> do XAMPP.
      </li>
      <li>
         Após ter baixado o projeto, execute o comando <code> cd Alphacode-Teste</code> na  pasta htdocs.
      </li>  
      <li>
          Agora ao entrar na pasta Alphacode-Teste execute o comando <code> code .</code> para abrir um editor com o projeto.
      </li>
 </ol>
 
## Passo a passo para configurar o banco de dados do projeto.
 <ol>
   <img src="https://github.com/user-attachments/assets/06a7cff5-4b8c-4e1f-94bc-430c30f24a41">
   <li> Quando entrar no projeto pelo editor ,configure o arquivo .env para criar o banco de dados em sua máquina.</li>
    <li><strong>DB_CONNECTION</strong>: Define o tipo de banco de dados que você está usando. Para MySQL, use <code>mysql</code>. Se estiver usando outro banco de dados, ajuste conforme necessário.</li>
  <li><strong>DB_HOST</strong>: Define o endereço do servidor onde o banco de dados está hospedado. Normalmente, para um banco de dados local, use <code>127.0.0.1</code> ou <code>localhost</code>.</li>
  <li><strong>DB_PORT</strong>: Define a porta pela qual a conexão com o banco de dados será feita. Para MySQL, a porta padrão é <code>3306</code>.</li>
  <li><strong>DB_DATABASE</strong>: Define o nome do banco de dados que você deseja criar e utilizar. Substitua <code>contatosDB</code> pelo nome desejado para seu banco de dados.</li>
  <li><strong>DB_USERNAME</strong>: Define o nome de usuário para se conectar ao banco de dados. O padrão para MySQL é <code>root</code>, mas você pode usar um usuário específico se preferir.</li>
  <li><strong>DB_PASSWORD</strong>: Define a senha para o usuário do banco de dados. Se o banco de dados requer uma senha, insira-a aqui. Deixe em branco se não houver senha configurada.</li> 
  <li><strong>Iniciar Servidores</strong>: Certifique-se de iniciar os servidores MySQL e Apache no XAMPP.</li>
  <li><strong>Criar Banco de Dados</strong>: Após iniciar os servidores, acesse o phpMyAdmin no navegador e crie o banco de dados com o nome especificado na variável <code>DB_DATABASE</code>.</li>   
 </ol> 

## Passo a passo para iniciar o projeto
<ol>
     <li><strong>Rodar Migrações</strong>: Utilize o comando de migração do seu framework (por exemplo, <code>php artisan migrate</code> para Laravel) para criar as tabelas e estruturas definidas em suas migrações dentro do banco de dados criado.</li>
    <li><strong>Iniciar o Servidor de Aplicação</strong>: Execute o servidor de aplicação do seu projeto para iniciar o ambiente de desenvolvimento. Por exemplo, para Laravel, use <code>php artisan serve</code>.</li>
  <li><strong>Pegar o Link</strong>: Após iniciar o servidor de aplicação, pegue o link gerado para acessar seu projeto. Normalmente, será algo como <code>http://localhost:8000</code> para Laravel.</li>
</ol>


