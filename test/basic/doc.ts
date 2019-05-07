import * as __ from "../common";

suite('Navigation:', () =>
  test('Doc', () =>
    __.eq(
      __.xml('test7', {}, {}, { headless: true })
        .ele('nodes')
          .ele('node', '1').up()
          .ele('node', '2').up()
          .ele('node', '3')
        .end(),
      '<test7><nodes><node>1</node><node>2</node><node>3</node></nodes></test7>'
    )
  )
);
