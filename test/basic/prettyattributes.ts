import * as __ from "../common";

suite('Creating XML with string writer:', function() {
  test('Pretty print attributes - 1', () =>
    __.eq(
      __.xml('test', { headless: true })
        .ele('node', {"first":"1", "second":"2"})
        .end({ pretty: true, width: 20 }),
      `\
<test>
  <node first="1"
    second="2"/>
</test>\
`
    )
  );

  test('Pretty print attributes - 2', () =>
    __.eq(
      __.xml('test', { headless: true })
        .ele('node', {"first":"1", "second":"2", "third":"33333333333333333333", "fourth": 4})
        .end({ pretty: true, width: 10 }),
      `\
<test>
  <node
    first="1"
    second="2"
    third="33333333333333333333"
    fourth="4"/>
</test>\
`
    )
  );

  test('Pretty print attributes - 3', () =>
    __.eq(
      __.xml('test', { headless: true })
        .ele('node', {"first":"1", "second":"2", "third":"33333333333333333333", "fourth": 4})
        .end({ pretty: true, width: 1 }),
      `\
<test>
  <node
    first="1"
    second="2"
    third="33333333333333333333"
    fourth="4"/>
</test>\
`
    )
  );

  test('Pretty print attributes - 4', () =>
    __.eq(
      __.xml('test', { headless: true })
        .ele('node', {"first":"1", "second":"2"}).ele('child')
        .end({ pretty: true, width: 10 }),
      `\
<test>
  <node
    first="1"
    second="2">
    <child/>
  </node>
</test>\
`
    )
  );
});
