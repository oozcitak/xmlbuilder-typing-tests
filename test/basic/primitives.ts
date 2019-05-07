import * as __ from "../common";

suite('Implicit Conversion to Primitives:', function() {
  test('String', () =>
    __.eq(
      __.xml('test', {}, {}, { headless: true })
        .ele('node', 'hello')
        .nod('node', 'hello')
        .ins('node', 'hello')
        .end(),
      __.xml('test', {}, {}, { headless: true })
        .ele('node', new String('hello'))
        .nod('node', new String('hello'))
        .ins('node', new String('hello'))
        .end()
    )
  );

  test('Boolean', () =>
    __.eq(
      __.xml('test', {}, {}, { headless: true })
        .ele('node', true)
        .end(),
      __.xml('test', {}, {}, { headless: true })
        .ele('node', new Boolean(true))
        .end()
    )
  );

  test('Number', () =>
    __.eq(
      __.xml('test', {}, {}, { headless: true })
        .ele('node', 123)
        .end(),
      __.xml('test', {}, {}, { headless: true })
        .ele('node', new Number(123))
        .end()
    )
  );
});

