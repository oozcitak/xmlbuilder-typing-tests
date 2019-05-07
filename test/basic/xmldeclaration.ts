import * as __ from "../common";

suite('XML Declaration:', function() {
  test('From create() without arguments', () =>
    __.eq(
      __.xml('test').end(),
      '<?xml version="1.0"?><test/>'
    )
  );

  test('From create() with arguments', () =>
    __.eq(
      __.xml('test', { version: '1.1', encoding: 'UTF-8', standalone: true }).end(),
      '<?xml version="1.1" encoding="UTF-8" standalone="yes"?><test/>'
    )
  );
    
  test('From dec() without arguments', () =>
    __.eq(
      __.xml('test', { headless: true }).dec().ele('node').end(),
      '<?xml version="1.0"?><test><node/></test>'
    )
  );

  test('From dec() with arguments', () =>
    __.eq(
      __.xml('test').dec({ version: '1.1', encoding: 'UTF-8', standalone: true }).ele('node').end(),
      '<?xml version="1.1" encoding="UTF-8" standalone="yes"?><test><node/></test>'
    )
  );
});

