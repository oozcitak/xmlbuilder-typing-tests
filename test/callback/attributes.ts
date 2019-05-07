import * as __ from "../common";

suite('Attributes:', function() {

  let result = '';
  const data = (chunk, level) => result += chunk;

  test('All forms of att() usage', function() {
    result = '';
    __.doc(data)
      .node('test4')
        .ele('node', {"first":"1", "second":"2"})
          .att("third", "3")
        .up()
        .ele('node').att({"first":"1", "second":"2"}).up()
      .up()
      .end();
  
    return __.eq(
        result,
  
        '<test4>' +
          '<node first="1" second="2" third="3"/>' +
          '<node first="1" second="2"/>' +
        '</test4>'
      );
  });

  test('Skip null attributes', function() {
    result = '';
    __.doc(data)
      .node('test')
        .ele('node', {"first": null})
          .att("third", null)
        .up()
        .ele('node').att({"first": null}).up()
      .up()
      .end();

    return __.eq(
      result,

      '<test>' +
        '<node/>' +
        '<node/>' +
      '</test>'
    );
  });

  test('Keep null attributes', function() {
    result = '';
    __.doc({ keepNullAttributes: true }, data)
      .node('test')
        .ele('node', {"first": null})
          .att("second", null)
        .up()
        .ele('node').att({"first": null}).up()
      .up()
      .end();

    return __.eq(
      result,

      '<test>' +
        '<node first="" second=""/>' +
        '<node first=""/>' +
      '</test>'
    );
  });
});
