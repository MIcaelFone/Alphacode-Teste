<link href="{{ asset('css/header.css') }}" rel="stylesheet">
<nav class="navbar navbar-expand-lg " style="background-color:blue; ">
  <div class="container-fluid">
    <a class="navbar-brand" href="{{url('/')}}"><img src="{{ asset('imagens/logo_alphacode.png') }}" class="imagem"><img></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="{{url('/')}}">Cadastro</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="{{url('/gerenciamento')}}">Gerenciamento</a>
        </li>
      </ul>
    </div>
  </div>
</nav>