import * as __ from "../common";

suite('Creating XML:', function() {
  test('begin()', () =>
    __.eq(
      __.doc().ele('root', { att: 'val' }).ele('test').end(),
      '<root att="val"><test/></root>'
    )
  );

  test('begin() with prolog', () =>
    __.eq(
      __.doc().dec().dtd().up().ele('root').end(),
      '<?xml version="1.0"?><!DOCTYPE root><root/>'
    )
  );
});
