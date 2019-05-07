import * as __ from "../common";

const xmloriginal = __.xml('test', { headless: true})
  .att('att', 'val')
  .ele('nodes')
    .ele('node', '1').up()
    .ele('node', '2')
      .att('att2', 'val2')
  .root();

const xmlcloned = xmloriginal.root().clone();
xmlcloned.ele('added', '3');
const newxml = __.xml('test2', { headless: true}).importDocument(xmlcloned);

suite('Clone:', function() {
  test('Original should remain unchanged', () =>
    __.eq(
      xmloriginal.end(),
      '<test att="val"><nodes><node>1</node><node att2="val2">2</node></nodes></test>'
    )
  );

  test('Cloned should contain all nodes including added node', () =>
    __.eq(
      newxml.end(),
      '<test2><test att="val"><nodes><node>1</node><node att2="val2">2</node></nodes><added>3</added></test></test2>'
    )
  );

  test('Clone each node type', function() {
    const org = __.xml('test', { headless: true})
      .cdata('val1')
      .raw('val2')
      .ele('node')
        .ins('pi', 'target')
        .com('comment');
    return __.eq(
      __.xml('test2', { headless: true}).importDocument(org.root().clone()).end(),
      '<test2><test><![CDATA[val1]]>val2<node><?pi target?><!-- comment --></node></test></test2>'
    );
  });
});

