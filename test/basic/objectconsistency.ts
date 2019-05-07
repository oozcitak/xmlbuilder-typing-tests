import * as __ from "../common";

suite('Creating XML:', () =>
  test('Object builder consistency', function() {
    const obj = {
        ele: "simple element",
        person: {
            name: "John",
            '@age': 35,
            '?pi': 'mypi',
            '#comment': 'Good guy',
            '#cdata': 'well formed!',
            unescaped: {
              '#raw': '&<>&'
            },
            address: {
                city: "Istanbul",
                street: "End of long and winding road"
              },
            contact: {
                phone: [
                    "555-1234",
                    "555-1235"
                ]
              },
            id() { return 42; },
            details: {
              '#text': 'classified'
            },
            nullval: null
          }
      };
    
    const t1 = __.xml('root', { headless: true }).ele(obj);

    const t2 = __.xml('root', { headless: true })
        .ele('ele', 'simple element')
          .up()
        .ele('person')
          .ele('name', 'John')
            .up()
        .att('age', 35)
        .ins('pi', 'mypi')
        .com('Good guy')
        .dat('well formed!')
        .ele('unescaped')
          .raw('&<>&')
            .up()
        .ele('address')
          .ele('city', 'Istanbul')
            .up()
          .ele('street', 'End of long and winding road')
            .up()
          .up()
        .ele('contact')
          .ele('phone', '555-1234')
            .up()
          .ele('phone', '555-1235')
            .up()
          .up()
        .ele('id', 42)
          .up()
        .ele('details')
          .text('classified')
          .up()
        .ele('nullval', null);

    return __.eq(
      t1.end(),
      t2.end()
    );
  })
);

