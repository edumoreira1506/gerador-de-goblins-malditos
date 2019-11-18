import gerarNomeDoGoblin from '../data/nomes';
import gerarEquipamento from '../data/equipamentos';
import tabelaGoblin from '../data/tabelaGoblin';
import tabelaDeEquipamentos from '../data/tabelaDeEquipamentos';
import gerarCaracteristica from '../data/caracteristicas';

describe('gerador', () => {
  describe('gerarNomeDoGoblin', () => {
    it('retorna uma string', () => {
      expect(typeof gerarNomeDoGoblin()).toBe('string');
    });

    it('retorna uma string de 4 letras', () => {
      const palavra = gerarNomeDoGoblin();
      expect(palavra.length).toBe(4);
    });

    it('retorna nome compost com opções da tabela', () => {
      const nome = gerarNomeDoGoblin();
      const primeiroNome = nome.substring(0, 2);
      const segundoNome = nome.substring(2, 4);

      expect(tabelaGoblin.comecoDoNome.includes(primeiroNome)).toBeTruthy();
      expect(tabelaGoblin.fimDoNome.includes(segundoNome)).toBeTruthy();
    });
  });

  describe('gerarEquipamento', () => {
    it('gera uma string', () => {
      expect(typeof gerarEquipamento('Mercenário')).toBe('string');
    });

    it('equipamento válido para Mercenário', () => {
      const ocupacao = 'Mercenário';
      const equipamento = gerarEquipamento(ocupacao);
      expect(tabelaDeEquipamentos[ocupacao].includes(equipamento)).toBeTruthy();
    });

    it('equipamento válido para Caçador', () => {
      const ocupacao = 'Caçador';
      const equipamento = gerarEquipamento(ocupacao);
      expect(tabelaDeEquipamentos[ocupacao].includes(equipamento)).toBeTruthy();
    });

    it('equipamento válido para Gatuno', () => {
      const ocupacao = 'Gatuno';
      const equipamento = gerarEquipamento(ocupacao);
      expect(tabelaDeEquipamentos[ocupacao].includes(equipamento)).toBeTruthy();
    });

    it('equipamento válido para Líder', () => {
      const ocupacao = 'Líder';
      const equipamento = gerarEquipamento(ocupacao);
      expect(tabelaDeEquipamentos[ocupacao].includes(equipamento)).toBeTruthy();
    });

    it('equipamento válido para Piromaníaco', () => {
      const ocupacao = 'Piromaníaco';
      const equipamento = gerarEquipamento(ocupacao);
      expect(tabelaDeEquipamentos[ocupacao].includes(equipamento)).toBeTruthy();
    });

    it('equipamento válido para Xamã', () => {
      const ocupacao = 'Xamã';
      const equipamento = gerarEquipamento(ocupacao);
      expect(equipamento).toBe('Cajado');
    });
  });

  describe('gerarCaracteristica', () => {
    const opcoesValidas = [1, 2, 3, 4, 5];
    const opcoesInvalidas = [7, 8, 9, 10];

    opcoesValidas.forEach((opcao) => {
      describe(`quando o número é ${opcao}`, () => {
        it('retorna uma string', () => {
          expect(typeof gerarCaracteristica(opcao)).toBe('string');
        });

        it('retorna uma string válida', () => {
          expect(Boolean(gerarCaracteristica(opcao))).toBeTruthy();
        });
      });
    });

    opcoesInvalidas.forEach((opcao) => {
      describe(`quando o número é ${opcao}`, () => {
        it('retorna uma string', () => {
          expect(typeof gerarCaracteristica(opcao)).toBe('string');
        });

        it('retorna uma string inválida', () => {
          expect(Boolean(gerarCaracteristica(opcao))).toBeFalsy();
        });
      });
    });

    describe('quando o número é 6', () => {
      it('retorna um array', () => {
        expect(typeof gerarCaracteristica(6)).toBe('object');
      });
    });
  });
});
