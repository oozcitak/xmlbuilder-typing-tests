import * as __ from "../common";

suite('Processing Instructions:', function() {
  test('Simple', () =>
    __.eq(
      __.xml('test17', { headless: true }).ins('pi', 'mypi').end(),
      '<test17><?pi mypi?></test17>'
    )
  );

  test('From object', () =>
    __.eq(
      __.xml('test17', { headless: true }).ins({'pi': 'mypi', 'pi2': 'mypi2', 'pi3': null}).end(),
      '<test17><?pi mypi?><?pi2 mypi2?><?pi3?></test17>'
    )
  );

  test('From array', () =>
    __.eq(
      __.xml('test17', { headless: true }).ins(['pi', 'pi2']).end(),
      '<test17><?pi?><?pi2?></test17>'
    )
  );

  test('Complex', () =>
    __.eq(
      __.xml('test18', { headless: true })
        .ins('renderCache.subset', '"Verdana" 0 0 ISO-8859-1 4 268 67 "#(),-./')
        .ins('pitarget', () => 'pivalue')
        .end(),
      '<test18><?renderCache.subset "Verdana" 0 0 ISO-8859-1 4 268 67 "#(),-./?><?pitarget pivalue?></test18>'
    )
  );

  test('Instructions before and after root', () =>
    __.eq(
      __.xml('ins', { headless: true })
        .instructionBefore('pre' ,'val1').instructionAfter('post', 'val2').end(),
      '<?pre val1?><ins/><?post val2?>'
    )
  );
});
