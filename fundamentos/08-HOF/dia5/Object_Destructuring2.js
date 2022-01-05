const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
  };
  
  const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
  };

  // 1 - Temos dois objetos, um com informações pessoais de uma pessoa usuária e outro com informações 
  // referentes ao cargo desta pessoa usuária na empresa trappistEnterprise . Precisamos criar um terceiro
  // objeto, que terá os dados pessoais e os dados de cargo juntos. Para isso, utilize o spread operator.

  const userCompleto = {
    ...user,
    ...jobInfos
};
  console.log(userCompleto);

  // 2 - Com o objeto em mãos, imprima no console uma frase de sua escolha utilizando os dados do objeto 
  // criado anteriormente. Para isso, utilize a desestruturação de objetos em conjunto com template literals.

  const { name, age, nationality, profession, squad, squadInitials} = userCompleto;
  // A sintaxe da desestruturação de objetos pede para passarmos o nome das propriedades que queremos acessar
  // do lado esquerdo, entre chaves, e o objeto do lado direito. O nome tem que ser o ''userCompleto, o obj.

  console.log(`Oi, meu nome é ${name} e eu tenho ${age} anos`);