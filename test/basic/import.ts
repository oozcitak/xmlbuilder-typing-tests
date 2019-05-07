import * as __ from "../common";

suite('Edit:', () =>
  test('Import', function() {
    const test13imported = __.xml('test13imported', {}, {}, { headless: true })
      .ele('node', 'imported');

    __.eq(
      __.xml('test13', {}, {}, { headless: true })
        .importDocument(test13imported.doc())
        .end(),
      '<test13><test13imported><node>imported</node></test13imported></test13>'
    );

    return __.eq(
      __.xml('test13', {}, {}, { headless: true })
        .importDocument(test13imported.doc())
        .end(),
      '<test13><test13imported><node>imported</node></test13imported></test13>'
    );
  })
);
