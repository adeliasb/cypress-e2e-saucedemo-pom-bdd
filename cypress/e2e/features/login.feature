# language: pt
@login

Funcionalidade: Login
  Como usuário do Sauce Demo
  Eu quero me autenticar
  Para acessar a lista de produtos

  Cenario: Login com credenciais válidas
    Dado que eu estou na página de login
    Quando eu faço login com credenciais válidas
    Então eu vejo a lista de produtos
