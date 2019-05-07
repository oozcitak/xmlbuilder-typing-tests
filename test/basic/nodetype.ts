import * as __ from "../common";

suite('Check node type:', function() {
  test('Document node types', function() {
    const obj = {
        root: {
            '@age': 35,
            '#raw': '',
            '#text': '',
            '#cdata': '',
            '#comment': '',
            '?pi': ''
          }
      };

    const doc = __.xml(obj, { sysID: 'hello.dtd' }).doc();
    const root = doc.root();

    __.eq(doc.type, __.builder.nodeType.Document);
    __.eq(doc.children[0].type, __.builder.nodeType.Declaration);
    __.eq(doc.children[1].type, __.builder.nodeType.DocType);
    __.eq(root.type, __.builder.nodeType.Element);
    __.eq(root.children[0].type, __.builder.nodeType.Raw);
    __.eq(root.children[1].type, __.builder.nodeType.Text);
    __.eq(root.children[2].type, __.builder.nodeType.CData);
    __.eq(root.children[3].type, __.builder.nodeType.Comment);
    return __.eq(root.children[4].type, __.builder.nodeType.ProcessingInstruction);
  });

  test('DTD node types', function() {
    const dtd = __.xml('root', { headless: true }).dtd()
      .att('img', 'height', 'CDATA', '#REQUIRED')
      .ele('img', 'EMPTY')
      .ent('ent', 'my val')
      .pent('ent', 'my val')
      .not('fs', { sysID: 'http://my.fs.com/reader' });

    __.eq(dtd.type, __.builder.nodeType.DocType);
    __.eq(dtd.children[0].type, __.builder.nodeType.AttributeDeclaration);
    __.eq(dtd.children[1].type, __.builder.nodeType.ElementDeclaration);
    __.eq(dtd.children[2].type, __.builder.nodeType.EntityDeclaration);
    __.eq(dtd.children[3].type, __.builder.nodeType.EntityDeclaration);
    return __.eq(dtd.children[4].type, __.builder.nodeType.NotationDeclaration);
  });
});
