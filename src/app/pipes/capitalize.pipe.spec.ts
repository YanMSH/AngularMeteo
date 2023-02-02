import {CapitalizePipe} from './capitalize.pipe';

describe('CapitalizePipe', () => {
  it('должен создавать инстанс класса пайпа', () => {
    const pipe = new CapitalizePipe();
    expect(pipe).toBeTruthy();
  });

  it('должен корректно преобразовывать строку с одним словом', () => {
    const testString = 'городок';
    const pipe = new CapitalizePipe();
    expect(pipe.transform(testString)).toBe('Городок');
  });
  it('должен корректно преобразовывать строку с двумя словами', () => {
    const testString = 'самара городок';
    const pipe = new CapitalizePipe();
    expect(pipe.transform(testString)).toBe('Самара городок');
  });
  it('должен возвращать пустую строку, если на вход пришла пустая строка', () => {
    const testString = '';
    const pipe = new CapitalizePipe();
    expect(pipe.transform(testString)).toBe('');
  });
  it('должен выкидывать ошибку, если на вход пришло что-то с типом отличным от "string"', async () => {
    const testString = 12;
    const pipe = new CapitalizePipe();
    // Здесь придется использовать ts-ignore потому что этот случай надо протестировать, а тайпскрипт не дает
    // Важно понимать, что в рантайме никакого тайпскрипта нет и с бекенда может прийти значение с любым типом
    // @ts-ignore
    expect(() => pipe.transform(testString)).toThrowError('Неправильный тип аргумента на входе в пайп');
  });
});
