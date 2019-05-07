import * as __ from "../common";

suite('Creating XML with stream writer:', function() {
  let hook = null;
  setup('hook stdout.write', function() {
    hook = __.captureStream(process.stdout);
  });
  teardown('unhook stdout.write', function() {
    hook.unhook();
  });
    
  test('Pretty print attributes - 1', function() {
    __.xml('test', { headless: true })
      .ele('node', {"first":"1", "second":"2"})
      .end(__.builder.streamWriter(process.stdout, { pretty: true, width: 20 }));
    return __.eq(
      hook.captured(),
      `\
<test>
  <node first="1"
    second="2"/>
</test>\
`
    );
  });

  test('Pretty print attributes - 2', function() {
    __.xml('test', { headless: true })
      .ele('node', {"first":"1", "second":"2", "third":"33333333333333333333", "fourth": 4})
      .end(__.builder.streamWriter(process.stdout, { pretty: true, width: 10 }));
    return __.eq(
      hook.captured(),
      `\
<test>
  <node
    first="1"
    second="2"
    third="33333333333333333333"
    fourth="4"/>
</test>\
`
    );
  });

  test('Pretty print attributes - 3', function() {
    __.xml('test', { headless: true })
      .ele('node', {"first":"1", "second":"2", "third":"33333333333333333333", "fourth": 4})
      .end(__.builder.streamWriter(process.stdout, { pretty: true, width: 1 }));
    return __.eq(
      hook.captured(),
      `\
<test>
  <node
    first="1"
    second="2"
    third="33333333333333333333"
    fourth="4"/>
</test>\
`
    );
  });

  test('Pretty print attributes - 4', function() {
    __.xml('test', { headless: true })
      .ele('node', {"first":"1", "second":"2"}).ele('child')
      .end(__.builder.streamWriter(process.stdout, { pretty: true, width: 10 }));
    return __.eq(
      hook.captured(),
      `\
<test>
  <node
    first="1"
    second="2">
    <child/>
  </node>
</test>\
`
    );
  });
});
