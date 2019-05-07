import * as __ from "../common";

suite('Editing:', () =>
  test('Remove item', () =>
    __.eq(
      __.xml('test3', {}, {}, { headless: true })
        .e('node', 'first instance')
        .u()
        .e('node', 'second instance')
        .remove()
        .e('node', 'third instance')
        .end(),
      '<test3><node>first instance</node><node>third instance</node></test3>'
    )
  )
);

