# Banco de Dados
 Deixar resistrado atividades da materia de Banco de Dados da facudade UFRB
## Lista 3
 ### 1- Crie o modelo ER para o seguinte problema.
Análise de Requisitos. As informações que se deseja estocar são: 
∙ passageiros (nome, endereço, telefone) 
∙ vôos (número do vôo, hora de partida, hora de chegada, origem, destino) 
∙ dias em que operam os vôos (dias do ano) e quais aeronaves são designadas para o vôonestesdias. Que empregados estão designados para atender cada vôo, para cada dia emque operaovôo(aeromoças, comissários de bordo, etc.). 
∙ os pilotos alocados para os vôos, para cada dia em que operam os vôos (o mesmo númerodevôopode ter diferentes pilotos dependendo do dia). 
∙ informações sobre pilotos tais como número de brevet, horas voadas. 
∙ empregados da companhia em geral (informações tais como nome, cpf, endereço, salário, idade). ∙ informações sobre aviões (modelo, fabricante, número de lugares, comprimento). Atenção: umaviãofica caracterizado pelo modelo e fabricante; uma aeronave, por sua vez é caracterizada peloseunúmero de série. Uma aeronave é uma máquina particular. Um avião pode ser encaradocomoaclasse de todas as aeronaves de um dado modelo e dado fabricante. 
∙ para cada piloto deseja-se guardar informações sobre que tipo de aviões ele está habilitadoapilotar.∙ informações sobre peças de aviões em geral (tais como código e preço). 
∙ informações sobre que peças são utilizadas em que aviões e em que quantidade. ∙ informações sobre técnicos da companhia aérea e que aviões estão habilitados a manipular. 

<h4 align="center" color="red"> Solução </h4>
<img src="https://github.com/LucianoSabino/Banco-de-Dados/blob/main/Lista_3/Fotos/Q1.drawio.png?raw=true">


### 3- A Notown Records decidiu armazenar informações sobre músicos que tocam emseus álbuns (assimcomo outros dados da empresa) em um banco de dados. A empresa escolheu sabiamente contratar você como projetista de banco de dados.
a) Cada músico que grava na Notown tem um CPF, um nome, um endereço, e umnúmerodetelefone. Músicos (que não ganham muito normalmente) compartilhamo mesmoendereço, enenhum endereço tem mais do que um telefone. 
b) Cada instrumento utilizado nas músicas gravadas na Notown tem umnome (por exemplo,guitarra, sintetizador, flauta) e um tom musical (por exemplo C, B#, E#). 
c) Cada álbum gravado com o selo Notown tem um título, uma data de direitos autorais, umformato(por exemplo, CD ou MC) e um identificador de álbum. 
d) Cada música gravada na Notown tem um título e um autor. 
e) Cada músico toca diversos instrumentos e um determinado instrumento pode ser tocadoporvários músicos.

f) Cada música é interpretada por um ou mais músicos, e um músico pode interpretar maisdeumamúsica. 
g) Cada álbum tem exatamente um músico que trabalha como seu produtor. Naturalmente, ummúsico pode produzir diversos álbuns. 
Projete um esquema conceitual para a Notown e desenhe um diagrama ER para seu esquema. As informações precedentes descrevem a situação que o banco de dados da Notown devemodelar.Certifique-se de indicar todas as restrições de chave e de participação e quaisquer suposiçõesquevocêtiver de assumir por falta de informações fornecidas pelo cliente. Identifique eventualmente restriçõesquevocê não está apto a capturar no diagrama ER e explique sucintamente por que vocênãopoderiaexpressá-las no diagrama com os recursos vistos em aula.

<h4 align="center" color="red"> Solução </h4>
<img src="https://github.com/LucianoSabino/Banco-de-Dados/blob/main/Lista_3/Fotos/Q3.drawio.png?raw=true">

### 4- A cadeia de farmácias Prescrições-RX ofereceu a você um suprimento gratuito vitalício de medicamentos se você projetar seu banco de dados. Dados os custos crescentes relacionados aos cuidados com a saúde, você concordou. Eis as informações que você reuniu após a entrevista comseu cliente:
a) Os pacientes são identificados pelo CPF, e seus nomes, endereços e idades devem ser
registrados. 
b) Os médicos são identificados pelo CPF. Para cada médico, o nome, especialidade e anos de
experiência devem ser registrados. 
c) Cada empresa farmacêutica é identificada pelo nome e tem um número de telefone. 
d) Para cada remédio, o nome e a fórmula devem ser registrados. Cada medicamento é vendido
por determinada empresa farmacêutica, e o seu nome o identifica univocamente entre os
produtos dessa empresa. Se uma empresa farmacêutica é excluída, você não precisa mais
manter o controle de seus produtos. 
e) Cada farmácia tem um nome, endereço e um número de telefone.
f) Todo paciente tem um médico principal. Todo médico tem no mínimo um paciente. 
g) Cada farmácia da rede vende diversos medicamentos e tem um preço para cada um. Um
medicamento poderia ser vendido em diversas farmácias e o preço pode variar de uma farmácia
para outra. 
h) Os médicos prescrevem medicamentos para os pacientes. Um médico pode prescrever um ou
mais medicamentos a diversos pacientes e um paciente pode obter prescrições de diversos
médicos. Cada prescrição tem uma data e uma quantidade associada a ela. Você pode assumir
que, se um médico prescreve o mesmo medicamento para o mesmo paciente mais do que uma
vez, apenas a última prescrição precisa ser armazenada.
i) As empresas farmacêuticas têm contratos de longo prazo com as farmácias. Uma empresa
farmacêutica pode ter contratos com diversas farmácias, e uma farmácia pode ter contrato com
diversas empresas farmacêuticas. Para cada contrato, você deve armazenar uma data inicial, uma data final e o texto do contrato.
j) As farmácias indicam um supervisor para cada contrato. Sempre deve haver um supervisor para cada contrato. Pede-se o seguinte:

a. Desenhe um diagrama ER que captura as informações precedentes. Identifique quaisquer
restrições não capturadas pelo diagrama ER. 
b. Como seu projeto seria alterado se cada medicamento tivesse que ser vendido a um preço fixo
por todas as farmácias?
c. Como seu projeto seria alterado se os requisitos de projeto se alterassem como segue: se um
médico prescreve o mesmo medicamento para o mesmo paciente mais do que uma vez, todas essas prescrições devem ser registradas.

<h4 align="center" color="red"> Solução </h4>
<img src="https://github.com/LucianoSabino/Banco-de-Dados/blob/main/Lista_3/Fotos/Q4.drawio.png?raw=true">

Restrições não capturadas:

Restrição de chave estrangeira: As entidades relacionadas devem ter chaves estrangeiras para estabelecer as relações corretas.
Restrição de unicidade: Não está especificado se há alguma restrição de unicidade além das chaves primárias. Pode ser necessário garantir que não haja duplicatas de registros para um mesmo paciente, médico, medicamento, etc.
Sobre as alterações no projeto:

b) Se cada medicamento tivesse que ser vendido a um preço fixo por todas as farmácias, o atributo de preço seria removido da tabela Farmácia. O preço seria um atributo da tabela Medicamento e seria o mesmo para todas as farmácias.

c) Se todos os registros de prescrições precisassem ser armazenados, seria necessário adicionar uma nova tabela para armazenar as prescrições individuais. Essa tabela teria sua própria chave primária e incluiria as chaves estrangeiras para o paciente, médico e medicamento correspondentes. Além disso, a tabela Prescrição teria um novo atributo para identificar cada prescrição individualmente, além da data e quantidade.

### 5- Projetar um BD para uma instituição financeira (I) cujas características são:
a) I é organizada em agências. Cada agência está localizada numa cidade e tem um nome. Seus
ativos são monitorados por I. 
b) Clientes são identificados por um número. I armazena para cada cliente: nome, rua, cidade. Clientes podem ter contas e fazer empréstimos. Um cliente pode ter um gerente pessoal. 
c) Para cada funcionário de I são armazenados: número, nome, telefone, dependentes, número de
seu gerente, data de admissão. 
d) Cada cliente de I pode possuir mais de uma conta, e cada conta pode possuir mais de um cliente. Cada conta recebe um número. I mantém controle sobre o saldo de cada conta e sobre a data
de seu último acesso.
e) Cada empréstimo tem um número e se origina numa agência, podendo ser mantido por mais de
um cliente. I controla os pagamentos efetuados para cada empréstimo. 6- Elaborar o esquema conceitual para o BD de uma companhia. A companhia é organizada em departamentos. Cada departamento tem um nome.

<h4 align="center" color="red"> Solução </h4>
<img src="https://github.com/LucianoSabino/Banco-de-Dados/blob/main/Lista_3/Fotos/Q5.drawio.png?raw=true">

### 6- Elaborar o esquema conceitual para o BD de uma companhia. 
A companhia é organizada em departamentos. Cada departamento tem um nome e um número. Além
disto, um departamento controla vários projetos, cada um dos quais com um nome, um número de identificação e
o período de tempo no qual deve ser desenvolvido. Na referida companhia, cada projeto somente pode ser
desenvolvido por um departamento específico. Existem somente três tipos de funcionários que trabalham na
companhia: pesquisador, secretário e de limpeza. Para os pesquisadores, deseja-se armazenar: o nome, o endereço, o sexo, a data de aniversário, o
salário e a área de atuação. Para os secretários, deseja-se armazenar: o nome, o endereço, o sexo, a data de
aniversário, o salário e o grau de escolaridade. Já para os funcionários de limpeza, deseja-se armazenar: o nome, o endereço, o sexo, a data de aniversário, o salário, o cargo e a jornada de trabalho. Os cargos dos funcionários responsáveis pela limpeza são hierárquicos. Assim, deseja-se armazenar também, para cada funcionário de limpeza, informações sobre o funcionário de limpeza que o gerencia. Os funcionários
da companhia são identificados por meio de um código de identificação, e podem estar associados a apenas um
único departamento. Funcionários que são pesquisadores podem trabalhar em diversos projetos, independentemente desses projetos
estarem sendo desenvolvidos no mesmo departamento no qual o empregado está associado. Deve-se
armazenar o número de horas semanais trabalhadas por cada pesquisador em cada projeto no qual ele trabalha. Deve-se armazenar também informações sobre os dependentes de cada funcionário para propósitos de ajuda
família. Deve-se armazenar o nome, o sexo e a data de aniversário, além do grau de parentesco com o
funcionário.

<h4 align="center" color="red"> Solução </h4>
<img src="https://github.com/LucianoSabino/Banco-de-Dados/blob/main/Lista_3/Fotos/Q6.drawio.png?raw=true">

### 7- Faça o esquema conceitual para o banco de dados descrito a seguir. Defina restrições de participação total e parcial de forma apropriada. 
Deseja-se criar um BD para uma agência de turismo, contendo informações sobre recursos oferecidos
pelas cidades que fazem parte da programação de turismo da agência. As informações a serem mantidas sobre
cada cidade referem-se a hotéis, restaurantes e pontos turísticos. Sobre os hotéis que a cidade possui deseja-se guardar o código, o nome, o endereço, a categoria (sem
estrela, 1 estrela, 2 estrelas, ...), os tipos de quartos que os formam (por exemplo, luxo, superluxo, ...), o número
dos quartos e o valor da diária de acordo com o tipo do quarto. Sobre cada cidade deve-se armazenar seu nome, seu estado e a população. Além disso, quando uma
nova cidade é cadastrada no banco de dados da agência, um código é a ela oferecido. Cada restaurante da cidade possui um código que o identifica, um nome, um endereço e o tipo de sua
categoria (luxo, simples, ...). Além disso, um restaurante pode pertencer a um hotel e um hotel somente pode ser
associado a um restaurante. Diferentes pontos turísticos da cidade estão cadastrados no sistema: igrejas, casas de show e museus. A
agência de turismo somente trabalha com estes três tipos de pontos turísticos. Além da descrição e do endereço,
igrejas devem possuir como característica a data e o estilo de construção. Já casas de show devem armazenar o
horário de início do show (igual para todos os dias da semana) e o dia de fechamento (apenas um único dia na
semana), além da descrição e do seu endereço. Os museus devem armazenar o seu endereço, descrição, data
de fundação e n. de salas. Um museu pode ter sido fundado por vários fundadores. Para estes, deve-se
armazenar o seu nome, a data de nascimento e a data da morte, a nacionalidade e a atividade profissional que
desenvolvia. Além disso, um mesmo fundador pode ter fundado vários museus. Quando qualquer ponto turístico
é cadastrado no sistema, ele também recebe um código que o identifica. O mesmo é válido para fundadores. Casas de show podem possuir restaurante. Quando o cliente da agência reserva um passeio para uma casa de
show, ele já sabe se esta possui restaurante e qual o preço médio da refeição, além da especialidade (comida
chinesa, japonesa, ...). Dentro de uma casa de show, apenas um único restaurante pode existir.

<h4 align="center" color="red"> Solução </h4>
<img src="https://github.com/LucianoSabino/Banco-de-Dados/blob/main/Lista_3/Fotos/Q1.drawio.png?raw=true">