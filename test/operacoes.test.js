const {
  soma, subtracao, multiplicacao, divisao, potencia, raizQuadrada, restoDivisao,
  fatorial, mediaArray, somaArray, maximoArray, minimoArray, valorAbsoluto,
  arredondar, isPar, isImpar, calcularPorcentagem, aumentarPorcentagem,
  diminuirPorcentagem, inverterSinal, seno, cosseno, tangente, logaritmoNatural,
  logaritmoBase10, arredondarParaBaixo, arredondarParaCima, hipotenusa,
  grausParaRadianos, radianosParaGraus, mdc, mmc, isPrimo, fibonacci,
  produtoArray, clamp, isDivisivel, celsiusParaFahrenheit, fahrenheitParaCelsius,
  inverso, areaCirculo, areaRetangulo, perimetroRetangulo, isMaiorQue,
  isMenorQue, isEqual, medianaArray, dobro, triplo, metade
} = require('../src/operacoes');

describe('Suite de Testes para 50 Operacoes Aritmeticas', () => {
  test('1. deve somar dois numeros positivos', () => { expect(soma(2, 3)).toBe(5); });
  test('2. deve subtrair dois numeros positivos', () => { expect(subtracao(5, 2)).toBe(3); });
  test('3. deve multiplicar dois numeros positivos', () => { expect(multiplicacao(3, 4)).toBe(12); });
  test('4. deve dividir e lancar erro para divisao por zero', () => {
    expect(divisao(10, 2)).toBe(5);
    expect(() => divisao(5, 0)).toThrow('Divisão por zero não é permitida.');
  });
  test('5. deve calcular a potencia com expoente positivo', () => { expect(potencia(2, 3)).toBe(8); });
  test('6. deve calcular a raiz quadrada de um quadrado perfeito', () => { expect(raizQuadrada(16)).toBe(4); });
  test('7. deve retornar o resto da divisao', () => { expect(restoDivisao(10, 3)).toBe(1); });
  test('8. deve calcular o fatorial de um numero maior que 1', () => { expect(fatorial(4)).toBe(24); });
  test('9. deve calcular a media de um array com multiplos elementos', () => { expect(mediaArray([10, 20, 30])).toBe(20); });
  test('10. deve somar um array com multiplos elementos', () => { expect(somaArray([1, 2, 3])).toBe(6); });

  test('11. deve encontrar o valor maximo em um array', () => { expect(maximoArray([1, 50, 10])).toBe(50); });
  test('12. deve encontrar o valor minimo em um array', () => { expect(minimoArray([10, 2, 100])).toBe(2); });
  test('13. deve retornar o valor absoluto de um numero negativo', () => { expect(valorAbsoluto(-5)).toBe(5); });
  test('14. deve arredondar um numero para cima', () => { expect(arredondar(9.8)).toBe(10); });
  test('15. deve retornar true para um numero par', () => { expect(isPar(100)).toBe(true); });
  test('16. deve retornar true para um numero impar', () => { expect(isImpar(7)).toBe(true); });
  test('17. deve calcular uma porcentagem simples', () => { expect(calcularPorcentagem(50, 200)).toBe(100); });
  test('18. deve aumentar um valor em uma porcentagem', () => { expect(aumentarPorcentagem(100, 10)).toBeCloseTo(110); });
  test('19. deve diminuir um valor em uma porcentagem', () => { expect(diminuirPorcentagem(100, 10)).toBeCloseTo(90); });
  test('20. deve inverter o sinal de um numero positivo', () => { expect(inverterSinal(42)).toBe(-42); });

  test('21. deve calcular o seno de 0', () => { expect(seno(0)).toBe(0); });
  test('22. deve calcular o cosseno de 0', () => { expect(cosseno(0)).toBe(1); });
  test('23. deve calcular a tangente de 0', () => { expect(tangente(0)).toBe(0); });
  test('24. deve calcular o logaritmo natural de Euler', () => { expect(logaritmoNatural(Math.E)).toBe(1); });
  test('25. deve calcular o logaritmo na base 10', () => { expect(logaritmoBase10(100)).toBe(2); });
  test('26. deve arredondar para baixo', () => { expect(arredondarParaBaixo(5.9)).toBe(5); });
  test('27. deve arredondar para cima', () => { expect(arredondarParaCima(5.1)).toBe(6); });
  test('28. deve calcular a hipotenusa de um triangulo retangulo', () => { expect(hipotenusa(3, 4)).toBe(5); });
  test('29. deve converter graus para radianos', () => { expect(grausParaRadianos(180)).toBeCloseTo(Math.PI); });
  test('30. deve converter radianos para graus', () => { expect(radianosParaGraus(Math.PI)).toBeCloseTo(180); });

  test('31. deve calcular o MDC de dois numeros', () => { expect(mdc(10, 5)).toBe(5); });
  test('32. deve calcular o MMC de dois numeros', () => { expect(mmc(10, 5)).toBe(10); });
  test('33. deve verificar que um numero e primo', () => { expect(isPrimo(7)).toBe(true); });
  test('34. deve calcular o decimo termo de Fibonacci', () => { expect(fibonacci(10)).toBe(55); });
  test('35. deve calcular o produto de um array', () => { expect(produtoArray([2, 3, 4])).toBe(24); });
  test('36. deve manter um valor dentro de um intervalo (clamp)', () => { expect(clamp(5, 0, 10)).toBe(5); });
  test('37. deve verificar se um numero e divisivel por outro', () => { expect(isDivisivel(10, 2)).toBe(true); });
  test('38. deve converter Celsius para Fahrenheit', () => { expect(celsiusParaFahrenheit(0)).toBe(32); });
  test('39. deve converter Fahrenheit para Celsius', () => { expect(fahrenheitParaCelsius(32)).toBe(0); });
  test('40. deve calcular o inverso de um numero', () => { expect(inverso(4)).toBe(0.25); });

  test('41. deve calcular a area de um circulo', () => { expect(areaCirculo(10)).toBeCloseTo(314.159); });
  test('42. deve calcular a area de um retangulo', () => { expect(areaRetangulo(5, 4)).toBe(20); });
  test('43. deve calcular o perimetro de um retangulo', () => { expect(perimetroRetangulo(5, 4)).toBe(18); });
  test('44. deve verificar se um numero e maior que outro', () => { expect(isMaiorQue(10, 5)).toBe(true); });
  test('45. deve verificar se um numero e menor que outro', () => { expect(isMenorQue(5, 10)).toBe(true); });
  test('46. deve verificar se dois numeros sao iguais', () => { expect(isEqual(7, 7)).toBe(true); });
  test('47. deve calcular a mediana de um array impar e ordenado', () => { expect(medianaArray([1, 2, 3, 4, 5])).toBe(3); });
  test('48. deve calcular o dobro de um numero', () => { expect(dobro(10)).toBe(20); });
  test('49. deve calcular o triplo de um numero', () => { expect(triplo(10)).toBe(30); });
  test('50. deve calcular a metade de um numero', () => { expect(metade(20)).toBe(10); });
});

describe('Casos de borda para fortalecer a suite contra mutantes', () => {
  test('deve validar mensagens de erro especificas nas operacoes com excecao', () => {
    expect(() => divisao(1, 0)).toThrow('Divisão por zero não é permitida.');
    expect(() => raizQuadrada(-1)).toThrow('Não é possível calcular a raiz quadrada de um número negativo.');
    expect(() => fatorial(-1)).toThrow('Fatorial não é definido para números negativos.');
    expect(() => inverso(0)).toThrow('Não é possível inverter o número zero.');
  });

  test('deve cobrir casos de borda do fatorial', () => {
    expect(fatorial(0)).toBe(1);
    expect(fatorial(1)).toBe(1);
  });

  test('deve tratar corretamente arrays vazios', () => {
    expect(mediaArray([])).toBe(0);
    expect(produtoArray([])).toBe(1);
    expect(() => maximoArray([])).toThrow('Array vazio');
    expect(() => minimoArray([])).toThrow('Array vazio');
    expect(() => medianaArray([])).toThrow('Array vazio');
  });

  test('deve diferenciar respostas verdadeiras e falsas para paridade', () => {
    expect(isPar(3)).toBe(false);
    expect(isImpar(8)).toBe(false);
    expect(isImpar(0)).toBe(false);
  });

  test('deve validar casos limite e compostos na verificacao de primalidade', () => {
    expect(isPrimo(1)).toBe(false);
    expect(isPrimo(2)).toBe(true);
    expect(isPrimo(9)).toBe(false);
  });

  test('deve limitar valores abaixo, acima e nas bordas do intervalo', () => {
    expect(clamp(-1, 0, 10)).toBe(0);
    expect(clamp(11, 0, 10)).toBe(10);
    expect(clamp(0, 0, 10)).toBe(0);
    expect(clamp(10, 0, 10)).toBe(10);
  });

  test('deve identificar quando a divisibilidade e falsa', () => {
    expect(isDivisivel(10, 3)).toBe(false);
  });

  test('deve converter temperaturas com valores diferentes de zero', () => {
    expect(celsiusParaFahrenheit(100)).toBe(212);
    expect(fahrenheitParaCelsius(212)).toBe(100);
  });

  test('deve distinguir comparacoes falsas e casos de igualdade', () => {
    expect(isMaiorQue(5, 10)).toBe(false);
    expect(isMaiorQue(5, 5)).toBe(false);
    expect(isMenorQue(10, 5)).toBe(false);
    expect(isMenorQue(5, 5)).toBe(false);
    expect(isEqual(7, 8)).toBe(false);
  });

  test('deve calcular a mediana de arrays nao ordenados e de tamanho par', () => {
    expect(medianaArray([7, 1, 5])).toBe(5);
    expect(medianaArray([8, 2, 4, 6])).toBe(5);
  });

  test('deve cobrir os casos base de raiz quadrada e Fibonacci', () => {
    expect(raizQuadrada(0)).toBe(0);
    expect(fibonacci(0)).toBe(0);
    expect(fibonacci(1)).toBe(1);
  });
});
