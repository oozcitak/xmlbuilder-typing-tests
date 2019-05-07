import * as __ from "../common";

suite('Convert to String:', function() {
  test('end() method', () =>
    __.eq(
      __.xml('test16', { 'version': '1.1' } ).ele('node').txt('test').end(),
      '<?xml version="1.1"?><test16><node>test</node></test16>'
    )
  );

  test('end() method of builder', () =>
    __.eq(
      __.xml('test').doc().end(),
      '<?xml version="1.0"?><test/>'
    )
  );
});
