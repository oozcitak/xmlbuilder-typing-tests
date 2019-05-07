import * as __ from "../common";

suite('Test toString() function with built-in XML writer:', function() {
  test('Nodes', function() {
    __.eq(__.xml('root').doc().toString(), '<?xml version="1.0"?><root/>');
    __.eq(__.xml('root').toString(), '<root/>');
    __.eq(__.xml('root').att('att', 'val').attribs['att'].toString(), ' att="val"');
    __.eq(__.xml('root').dat('val').children[0].toString(), '<![CDATA[val]]>');
    __.eq(__.xml('root').com('val').children[0].toString(), '<!-- val -->');
    __.eq(__.xml('root').ins('target', 'val').children[0].toString(), '<?target val?>');
    __.eq(__.xml('root').raw('val').children[0].toString(), 'val');
    return __.eq(__.xml('root').text('val').children[0].toString(), 'val');
  });

  test('DTD', function() {
    __.eq(
      __.xml('root').dtd({pubID: 'pub', sysID: 'sys'}).toString(),
      '<!DOCTYPE root PUBLIC "pub" "sys">'
    );
    __.eq(
      __.xml('root').dtd().att('img', 'visible', '(yes|no)', '#DEFAULT', "yes").children[0].toString(),
      '<!ATTLIST img visible (yes|no) "yes">'
    );
    __.eq(
      __.xml('root').dtd().ele('img', 'EMPTY').children[0].toString(),
      '<!ELEMENT img EMPTY>'
    );
    __.eq(
      __.xml('root').dtd().ent('ent', 'my val').children[0].toString(),
      '<!ENTITY ent "my val">'
    );
    return __.eq(
      __.xml('root').dtd().not('fs', { sysID: 'http://my.fs.com/reader' }).children[0].toString(),
      '<!NOTATION fs SYSTEM "http://my.fs.com/reader">'
    );
  });

  test('XML Declaration', () =>
    __.eq(
      __.xml('root').dec().doc().children[0].toString(),
      '<?xml version="1.0"?>'
    )
  );
});
