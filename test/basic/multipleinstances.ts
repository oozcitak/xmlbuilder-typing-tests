import * as __ from "../common";

suite('Creating XML:', () =>
  test('Multiple Instances', function() {
  
    const xml1 = __.xml('first').ele('node1', { 'testatt1': 'testattval1' }, 'text1');
    __.eq(
      xml1.end(),
      '<?xml version="1.0"?><first><node1 testatt1="testattval1">text1</node1></first>'
    );
    
    const xml2 = __.xml('second').ele('node2', { 'testatt2': 'testattval2' }, 'text2');
    __.eq(
      xml2.end(),
      '<?xml version="1.0"?><second><node2 testatt2="testattval2">text2</node2></second>'
    );
    
    // First instance should remain unchanged
    return __.eq(
      xml1.end(),
      '<?xml version="1.0"?><first><node1 testatt1="testattval1">text1</node1></first>'
    );
  })
);

