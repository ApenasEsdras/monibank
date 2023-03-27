
  // O "g" que você está falando no final de sua expressão regular é chamado de" modificador". O "g" representa o "modificador global". Isso significa que sua substituição substituirá todas as cópias da sequência correspondente pela sequência de substituição fornecida.
  // Uma lista de modificadores úteis:

  // g - Substituição global. Substitua todas as instâncias da sequência correspondente no texto fornecido.
  // eu - Substituição insensível ao caso. Substitua todas as instâncias da sequência correspondente, ignorando as diferenças no caso.
  // m - Substituição de várias linhas. A expressão regular deve ser testada para correspondências em várias linhas.
  // Você pode combinar modificadores, como g e i, para obter uma pesquisa insensível a casos globais.


// Exemplos:
  
//Replace the first lowercase t we find with X
'This is sparta!'.replace(/t/,'X');
//result: 'This is sparXa!'

//Replace the first letter t (upper or lower) with X
'This is sparta!'.replace(/t/i, 'X');
//result: 'Xhis is sparta!'

//Replace all the Ts in the text (upper or lower) with X
'This is sparta!'.replace(/t/gi, 'X' );
//result: 'Xhis is sparXa!'
