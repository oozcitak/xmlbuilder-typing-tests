import * as __ from "../common";

suite('Creating XML with string writer:', function() {
  test('Plain text writer', () =>
    __.eq(
      __.xml('root')
        .dtd('hello.dtd')
            .ins('pub_border', 'thin')
            .ele('img', 'EMPTY')
            .com('Image attributes follow')
            .att('img', 'height', 'CDATA', '#REQUIRED')
            .att('img', 'visible', '(yes|no)', '#DEFAULT', "yes")
            .not('fs', { sysID: 'http://my.fs.com/reader' })
            .not('fs-nt', { pubID: 'FS Network Reader 1.0' })
            .not('fs-nt', { pubID: 'FS Network Reader 1.0', sysID: 'http://my.fs.com/reader' })
            .att('img', 'src', 'NOTATION (fs|fs-nt)', '#REQUIRED')
            .dat('<owner>John</owner>')
            .ele('node')
            .ent('ent', 'my val')
            .ent('ent', { sysID: 'http://www.myspec.com/ent' })
            .ent('ent', { pubID: '-//MY//SPEC ENT//EN', sysID: 'http://www.myspec.com/ent' })
            .ent('ent', { sysID: 'http://www.myspec.com/ent', nData: 'entprg' })
            .ent('ent', { pubID: '-//MY//SPEC ENT//EN', sysID: 'http://www.myspec.com/ent', nData: 'entprg' })
            .pent('ent', 'my val')
            .pent('ent', { sysID: 'http://www.myspec.com/ent' })
            .pent('ent', { pubID: '-//MY//SPEC ENT//EN', sysID: 'http://www.myspec.com/ent' })
            .ele('nodearr', ['a', 'b'])
        .root()
        .ele('xmlbuilder', {'for': 'node-js' })
            .com('CoffeeScript is awesome.')
            .nod('repo', {'type': 'git'}, 'git://github.com/oozcitak/xmlbuilder-js.git')
            .up()
        .up()
        .ele('cdata')
            .cdata('<test att="val">this is a test</test>\nSecond line')
        .up()
        .ele('raw')
            .raw('&<>&')
            .up()
        .ele('atttest', { 'att': 'val' }, 'text')
            .up()
        .ele('atttest', 'text')
            .att('att', () => 'val')
        .end(__.builder.stringWriter()),

      '<?xml version="1.0"?>' +
      '<!DOCTYPE root SYSTEM "hello.dtd" [' +
          '<?pub_border thin?>' +
          '<!ELEMENT img EMPTY>' +
          '<!-- Image attributes follow -->' +
          '<!ATTLIST img height CDATA #REQUIRED>' +
          '<!ATTLIST img visible (yes|no) "yes">' +
          '<!NOTATION fs SYSTEM "http://my.fs.com/reader">' +
          '<!NOTATION fs-nt PUBLIC "FS Network Reader 1.0">' +
          '<!NOTATION fs-nt PUBLIC "FS Network Reader 1.0" "http://my.fs.com/reader">' +
          '<!ATTLIST img src NOTATION (fs|fs-nt) #REQUIRED>' +
          '<![CDATA[<owner>John</owner>]]>' +
          '<!ELEMENT node (#PCDATA)>' +
          '<!ENTITY ent "my val">' +
          '<!ENTITY ent SYSTEM "http://www.myspec.com/ent">' +
          '<!ENTITY ent PUBLIC "-//MY//SPEC ENT//EN" "http://www.myspec.com/ent">' +
          '<!ENTITY ent SYSTEM "http://www.myspec.com/ent" NDATA entprg>' +
          '<!ENTITY ent PUBLIC "-//MY//SPEC ENT//EN" "http://www.myspec.com/ent" NDATA entprg>' +
          '<!ENTITY % ent "my val">' +
          '<!ENTITY % ent SYSTEM "http://www.myspec.com/ent">' +
          '<!ENTITY % ent PUBLIC "-//MY//SPEC ENT//EN" "http://www.myspec.com/ent">' +
          '<!ELEMENT nodearr (a,b)>' +
      ']>' +
      '<root>' +
          '<xmlbuilder for="node-js">' +
              '<!-- CoffeeScript is awesome. -->' +
              '<repo type="git">git://github.com/oozcitak/xmlbuilder-js.git</repo>' +
          '</xmlbuilder>' +
          '<cdata><![CDATA[<test att="val">this is a test</test>\nSecond line]]></cdata>' +
          '<raw>&<>&</raw>' +
          '<atttest att="val">text</atttest>' +
          '<atttest att="val">text</atttest>' +
      '</root>'
    )
  );

  test('Pretty printing', () =>
    __.eq(
      __.xml('root')
        .dtd('hello.dtd')
            .ins('pub_border', 'thin')
            .ele('img', 'EMPTY')
            .com('Image attributes follow')
            .att('img', 'height', 'CDATA', '#REQUIRED')
            .att('img', 'visible', '(yes|no)', '#DEFAULT', "yes")
            .not('fs', { sysID: 'http://my.fs.com/reader' })
            .not('fs-nt', { pubID: 'FS Network Reader 1.0' })
            .not('fs-nt', { pubID: 'FS Network Reader 1.0', sysID: 'http://my.fs.com/reader' })
            .att('img', 'src', 'NOTATION (fs|fs-nt)', '#REQUIRED')
            .dat('<owner>John</owner>')
            .ele('node')
            .ent('ent', 'my val')
            .ent('ent', { sysID: 'http://www.myspec.com/ent' })
            .ent('ent', { pubID: '-//MY//SPEC ENT//EN', sysID: 'http://www.myspec.com/ent' })
            .ent('ent', { sysID: 'http://www.myspec.com/ent', nData: 'entprg' })
            .ent('ent', { pubID: '-//MY//SPEC ENT//EN', sysID: 'http://www.myspec.com/ent', nData: 'entprg' })
            .pent('ent', 'my val')
            .pent('ent', { sysID: 'http://www.myspec.com/ent' })
            .pent('ent', { pubID: '-//MY//SPEC ENT//EN', sysID: 'http://www.myspec.com/ent' })
            .ele('nodearr', ['a', 'b'])
        .root()
        .ele('xmlbuilder', {'for': 'node-js' })
            .com('CoffeeScript is awesome.')
            .nod('repo', {'type': 'git'}, 'git://github.com/oozcitak/xmlbuilder-js.git')
            .up()
        .up()
        .ele('cdata')
            .cdata('<test att="val">this is a test</test>\nSecond line')
        .up()
        .ele('raw')
            .raw('&<>&')
            .up()
        .ele('atttest', { 'att': 'val' }, 'text')
            .up()
        .ele('atttest', 'text')
            .att('att', () => 'val')
        .end(__.builder.stringWriter( { pretty: true, indent: '    ' } )),

      `\
<?xml version="1.0"?>
<!DOCTYPE root SYSTEM "hello.dtd" [
    <?pub_border thin?>
    <!ELEMENT img EMPTY>
    <!-- Image attributes follow -->
    <!ATTLIST img height CDATA #REQUIRED>
    <!ATTLIST img visible (yes|no) "yes">
    <!NOTATION fs SYSTEM "http://my.fs.com/reader">
    <!NOTATION fs-nt PUBLIC "FS Network Reader 1.0">
    <!NOTATION fs-nt PUBLIC "FS Network Reader 1.0" "http://my.fs.com/reader">
    <!ATTLIST img src NOTATION (fs|fs-nt) #REQUIRED>
    <![CDATA[<owner>John</owner>]]>
    <!ELEMENT node (#PCDATA)>
    <!ENTITY ent "my val">
    <!ENTITY ent SYSTEM "http://www.myspec.com/ent">
    <!ENTITY ent PUBLIC "-//MY//SPEC ENT//EN" "http://www.myspec.com/ent">
    <!ENTITY ent SYSTEM "http://www.myspec.com/ent" NDATA entprg>
    <!ENTITY ent PUBLIC "-//MY//SPEC ENT//EN" "http://www.myspec.com/ent" NDATA entprg>
    <!ENTITY % ent "my val">
    <!ENTITY % ent SYSTEM "http://www.myspec.com/ent">
    <!ENTITY % ent PUBLIC "-//MY//SPEC ENT//EN" "http://www.myspec.com/ent">
    <!ELEMENT nodearr (a,b)>
]>
<root>
    <xmlbuilder for="node-js">
        <!-- CoffeeScript is awesome. -->
        <repo type="git">git://github.com/oozcitak/xmlbuilder-js.git</repo>
    </xmlbuilder>
    <cdata>
        <![CDATA[<test att="val">this is a test</test>
Second line]]>
    </cdata>
    <raw>&<>&</raw>
    <atttest att="val">text</atttest>
    <atttest att="val">text</atttest>
</root>\
`
    )
  );

  test('Pretty printing with offset', () =>
    __.eq(
      __.xml('root')
        .ele('xmlbuilder', {'for': 'node-js' })
            .com('CoffeeScript is awesome.')
            .nod('repo', {'type': 'git'}, 'git://github.com/oozcitak/xmlbuilder-js.git')
            .up()
        .up()
        .ele('cdata')
            .cdata('<test att="val">this is a test</test>\nSecond line')
        .up()
        .ele('raw')
            .raw('&<>&')
            .up()
        .ele('atttest', { 'att': 'val' }, 'text')
            .up()
        .ele('atttest', 'text')
            .att('att', 'val')
        .end(__.builder.stringWriter( { pretty: true, indent: '    ', offset : 1 } )),

      `\
TEMPORARY_INDENT
    <?xml version="1.0"?>
    <root>
        <xmlbuilder for="node-js">
            <!-- CoffeeScript is awesome. -->
            <repo type="git">git://github.com/oozcitak/xmlbuilder-js.git</repo>
        </xmlbuilder>
        <cdata>
            <![CDATA[<test att="val">this is a test</test>
Second line]]>
        </cdata>
        <raw>&<>&</raw>
        <atttest att="val">text</atttest>
        <atttest att="val">text</atttest>
    </root>\
`.replace(
        new RegExp(`\
TEMPORARY_INDENT\\n\
`),
        ''
      ) //Heredoc format indenting is based on the first non-whitespace character, so we add extra, then replace it
    )
  );


  test('Pretty printing with -ve offset', () =>
    __.eq(
      __.xml('root')
        .ele('xmlbuilder', {'for': 'node-js' })
            .com('CoffeeScript is awesome.')
            .nod('repo', {'type': 'git'}, 'git://github.com/oozcitak/xmlbuilder-js.git')
            .up()
        .up()
        .ele('cdata')
            .cdata('<test att="val">this is a test</test>\nSecond line')
        .up()
        .ele('raw')
            .raw('&<>&')
            .up()
        .ele('atttest', { 'att': 'val' }, 'text')
            .up()
        .ele('atttest', 'text')
            .att('att', 'val')
        .end(__.builder.stringWriter( { pretty: true, indent: '    ', offset : -2 } )),

      `\
TEMPORARY_INDENT
<?xml version="1.0"?>
<root>
<xmlbuilder for="node-js">
<!-- CoffeeScript is awesome. -->
<repo type="git">git://github.com/oozcitak/xmlbuilder-js.git</repo>
</xmlbuilder>
<cdata>
<![CDATA[<test att="val">this is a test</test>
Second line]]>
</cdata>
<raw>&<>&</raw>
<atttest att="val">text</atttest>
<atttest att="val">text</atttest>
</root>\
`.replace(
        new RegExp(`\
TEMPORARY_INDENT\\n\
`),
        ''
      ) //Heredoc format indenting is based on the first non-whitespace character, so we add extra, then replace it
    )
  );

  test('Pretty printing with empty indent', () =>
    __.eq(
      __.xml('root')
        .ele('xmlbuilder', {'for': 'node-js' })
            .com('CoffeeScript is awesome.')
            .nod('repo', {'type': 'git'}, 'git://github.com/oozcitak/xmlbuilder-js.git')
            .up()
        .up()
        .ele('cdata')
            .cdata('<test att="val">this is a test</test>\nSecond line')
        .up()
        .ele('raw')
            .raw('&<>&')
            .up()
        .ele('atttest', { 'att': 'val' }, 'text')
            .up()
        .ele('atttest', 'text')
            .att('att', 'val')
        .end(__.builder.stringWriter( { pretty: true, indent: '' } )),

      `\
<?xml version="1.0"?>
<root>
<xmlbuilder for="node-js">
<!-- CoffeeScript is awesome. -->
<repo type="git">git://github.com/oozcitak/xmlbuilder-js.git</repo>
</xmlbuilder>
<cdata>
<![CDATA[<test att="val">this is a test</test>
Second line]]>
</cdata>
<raw>&<>&</raw>
<atttest att="val">text</atttest>
<atttest att="val">text</atttest>
</root>\
`
    )
  );


  test('Pretty printing with dontprettytextnodes, no mixed content', () =>
    __.eq(
      __.xml('root')
        .ele('atttest', { 'att': 'val' }, 'text')
            .up()
        .ele('atttest', 'text')
            .att('att', 'val')
        .end(__.builder.stringWriter( { pretty: true, indent: '    ', dontPrettyTextNodes: true } )),

      `\
<?xml version="1.0"?>
<root>
    <atttest att="val">text</atttest>
    <atttest att="val">text</atttest>
</root>\
`
    )
  );

  test('Pretty printing with mixed content, dontprettytextmode unset', () =>
    __.eq(
      __.xml('root')
        .ele('atttest', { 'att': 'val' }, 'mixed content')
        .ele('atttest', 'text')
            .att('att', 'val')
            .up()
        .txt('moretext after node')
        .end(__.builder.stringWriter( { pretty: true, indent: '    '} )),

      `\
<?xml version="1.0"?>
<root>
    <atttest att="val">
        mixed content
        <atttest att="val">text</atttest>
        moretext after node
    </atttest>
</root>\
`
    )
  );

  test('Pretty printing with mixed content, dontprettytextmode set to true', () =>
    __.eq(
      __.xml('root')
        .ele('atttest', { 'att': 'val' }, 'mixed content')
        .ele('atttest', 'text')
            .att('att', 'val')
            .up()
        .txt('moretext after node')
        .end(__.builder.stringWriter( { pretty: true, indent: '    ', dontPrettyTextNodes: true} )),

      `\
<?xml version="1.0"?>
<root>
    <atttest att="val">mixed content<atttest att="val">text</atttest>moretext after node</atttest>
</root>\
`
    )
  );

  test('Throw with unknown node types', function() {
    __.err(
      function() {
        const root = __.xml('test4');
        root.children.push(<any>new String("Invalid node"));
        return root.end();
    },
      Error,
      "Unknown XML node type: String"
    );
    return __.err(
      function() {
        const dtd = __.xml('test4').dtd();
        dtd.children.push(<any>new String("Invalid DTD node"));
        return dtd.end();
    },
      Error,
      "Unknown DTD node type: String"
    );
  });

  test('Overwrite writer properties with new writer', function() {
    const doc = __.xml('test').cdata('data');
    const xmlwriter = __.writer({ writer: { cdata() { return ''; } } });
    return __.eq(
      doc.end(xmlwriter),
      '<?xml version="1.0"?><test></test>'
    );
  });
});
