import * as __ from "../common";

suite('Text Processing:', function() {
  test('Escape "', () =>
    __.eq(
      __.xml('test8', {}, {}, { headless: true }).ele('node', '"').end(),
      '<test8><node>"</node></test8>'
    )
  );

  test('Text node with empty string', () =>
    __.eq(
      __.xml('test9', {}, {}, { headless: true }).text('').end(),
      '<test9/>'
    )
  );
    
  test('Text node with empty string (pretty print)', () =>
    __.eq(
      __.xml('test10', {}, {}, { headless: true }).text('').end(),
      '<test10/>'
    )
  );
});
