import * as __ from "../common";

suite('Stringify:', () =>
  test('Custom function', function() {
    const addns = val => `my:${val}`;
    return __.eq(
      __.xml('test7', { headless: true, stringify: { name: addns } })
        .ele('nodes')
        .ele('node', '1').up()
        .ele('node', '2').up()
        .ele('node', '3')
        .end(),
      '<my:test7><my:nodes><my:node>1</my:node><my:node>2</my:node><my:node>3</my:node></my:nodes></my:test7>'
    );
  })
);

