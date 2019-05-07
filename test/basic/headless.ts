import * as __ from "../common";

suite('Creating XML', () =>
  test('Headless', () =>
    __.eq(
      __.xml('root', {}, {}, { headless: true })
        .ele('xmlbuilder', { 'for': 'node-js' })
          .ele('repo', { 'type': 'git' }, 'git://github.com/oozcitak/xmlbuilder-js.git')
        .end(),

      '<root>' +
        '<xmlbuilder for="node-js">' +
          '<repo type="git">git://github.com/oozcitak/xmlbuilder-js.git</repo>' +
        '</xmlbuilder>' +
      '</root>'
    )
  )
);

