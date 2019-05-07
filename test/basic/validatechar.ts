import * as __ from "../common";

suite('Validate Input Chars:', function() {

  test('Invalid chars in XML 1.0', function() {
    __.err(() => __.xml('test').txt('invalid char \u{0000}'));
    __.err(() => __.xml('test').txt('invalid char \u{0001}'));
    __.err(() => __.xml('test').txt('invalid char \u{0002}'));
    __.err(() => __.xml('test').txt('invalid char \u{0003}'));
    __.err(() => __.xml('test').txt('invalid char \u{0004}'));
    __.err(() => __.xml('test').txt('invalid char \u{0005}'));
    __.err(() => __.xml('test').txt('invalid char \u{0006}'));
    __.err(() => __.xml('test').txt('invalid char \u{0007}'));
    __.err(() => __.xml('test').txt('invalid char \u{0008}'));
    __.err(() => __.xml('test').txt('invalid char \u{000B}'));
    __.err(() => __.xml('test').txt('invalid char \u{000C}'));
    __.err(() => __.xml('test').txt('invalid char \u{000E}'));
    __.err(() => __.xml('test').txt('invalid char \u{000F}'));
    __.err(() => __.xml('test').txt('invalid char \u{0010}'));
    __.err(() => __.xml('test').txt('invalid char \u{0011}'));
    __.err(() => __.xml('test').txt('invalid char \u{0012}'));
    __.err(() => __.xml('test').txt('invalid char \u{0013}'));
    __.err(() => __.xml('test').txt('invalid char \u{0014}'));
    __.err(() => __.xml('test').txt('invalid char \u{0015}'));
    __.err(() => __.xml('test').txt('invalid char \u{0016}'));
    __.err(() => __.xml('test').txt('invalid char \u{0017}'));
    __.err(() => __.xml('test').txt('invalid char \u{0018}'));
    __.err(() => __.xml('test').txt('invalid char \u{001A}'));
    __.err(() => __.xml('test').txt('invalid char \u{001B}'));
    __.err(() => __.xml('test').txt('invalid char \u{001C}'));
    __.err(() => __.xml('test').txt('invalid char \u{001D}'));
    __.err(() => __.xml('test').txt('invalid char \u{001E}'));
    __.err(() => __.xml('test').txt('invalid char \u{001F}'));
    __.err(() => __.xml('test').txt('invalid char \u{D800}'));
    __.err(() => __.xml('test').txt('invalid char \u{DFFF}'));
    __.err(() => __.xml('test').txt('invalid char \u{FFFE}'));
    return __.err(() => __.xml('test').txt('invalid char \u{FFFF}'));
  });
    
  test('Invalid chars in XML 1.1', function() {
    __.err(() => __.xml('test', { version: '1.1' }).txt('invalid char \u{0000}'));
    __.err(() => __.xml('test', { version: '1.1' }).txt('invalid char \u{D800}'));
    __.err(() => __.xml('test', { version: '1.1' }).txt('invalid char \u{DFFF}'));
    __.err(() => __.xml('test', { version: '1.1' }).txt('invalid char \u{FFFE}'));
    __.err(() => __.xml('test', { version: '1.1' }).txt('invalid char \u{FFFF}'));
    return __.eq(
      __.xml('root', { headless: true, version: '1.1' }).txt('char_\u{0008}_valid_in_XML_1.1').end(),
      '<root>char_\u{0008}_valid_in_XML_1.1</root>'
    );
  });

  test('Invalid names', function() {
    __.err(() => __.xml('.test'));
    return __.err(() => __.xml('_?test'));
  });
});