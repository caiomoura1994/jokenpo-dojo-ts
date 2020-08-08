// https://www.chaijs.com/api/bdd/

// Jokenpo
// Você está resolvendo este problema.
// Jokenpo é uma brincadeira japonesa, onde dois jogadores escolhem um dentre três possíveis itens: Pedra, Papel ou Tesoura.
// O objetivo é fazer um juiz de Jokenpo que dada a jogada dos dois jogadores informa o resultado da partida.
// As regras são as seguintes:
// - Pedra empata com Pedra e ganha de Tesoura
// - Tesoura empata com Tesoura e ganha de Papel
// - Papel empata com Papel e ganha de Pedra

const { expect } = require("chai");

describe("Juiz de Jokenpo TS", function () {
  it("Pedra x Pedra", function () {
    // expect(jokenpoJuiz(PEDRA, PEDRA)).to.eql(EMPATE);
  });
  it("Tesoura x Tesoura", function () {
    // expect(jokenpoJuiz(TESOURA, TESOURA)).to.eql(EMPATE);
  });
  it("Papel x Papel", function () {
    // expect(jokenpoJuiz(PAPEL, PAPEL)).to.eql(EMPATE);
  });
  it("Pedra x Tesoura", function () {
    // expect(jokenpoJuiz(PEDRA, TESOURA)).to.eql(PEDRA);
  });
  it("Tesoura x Pedra", function () {
    // expect(jokenpoJuiz(TESOURA, PEDRA)).to.eql(PEDRA);
  });
  it("Pedra x Papel", function () {
    // expect(jokenpoJuiz(PEDRA, PAPEL)).to.eql(PEDRA);
  });
  it("Tesoura x Papel", function () {
    // expect(jokenpoJuiz(TESOURA, PAPEL)).to.eql(PEDRA);
  });
  it("Foo x Bar", function () {
    // expect(jokenpoJuiz(FOO, BAR)).to.throw();
  });

});
