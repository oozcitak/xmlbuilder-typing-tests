import * as __ from "../common";

suite('Navigation:', function() {
  test('Prev/next/root', () =>
    __.eq(
      __.xml('test5', { headless: true })
        .e('node','1')
        .up()
        .e('node','element')
        .up()
        .e('node','2')
        .prev()
        .prev()
        .att('prev','yes')
        .next()
        .next()
        .att('next','yes')
        .root()
        .att('root', 'yes')
        .end(),
      '<test5 root="yes"><node prev="yes">1</node><node>element</node><node next="yes">2</node></test5>'
    )
  );

  test('up() in dtd', () =>
    __.eq(
      __.xml('test', { headless: true }).dtd().com('internal subset').up().ele('node').end(),
      '<!DOCTYPE test [<!-- internal subset -->]>' +
      '<test><node/></test>'
    )
  );

  test('doc() in element', () =>
    __.isan(
      __.xml('test').ele('node').doc(),
      'XMLDocument'
    )
  );

  test('doc() in dtd', () =>
    __.isan(
      __.xml('test').dtd().doc(),
      'XMLDocument'
    )
  );
});

