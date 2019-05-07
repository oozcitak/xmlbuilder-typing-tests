import * as __ from "../common";

suite('Comments', function() {
  test('Nothing gets escaped', () =>
    __.eq(
      __.xml('comment', { headless: true })
        .comment('<>\'"&\t\n\r').end(),
      '<comment><!-- <>\'"&\t\n\r --></comment>'
    )
  );

  test('Comments before and after root', () =>
    __.eq(
      __.xml('comment', { headless: true })
        .commentBefore('pre').commentAfter('post').end(),
      '<!-- pre --><comment/><!-- post -->'
    )
  );
});
