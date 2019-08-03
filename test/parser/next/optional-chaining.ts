import { Context } from '../../../src/common';
import { pass, fail } from '../../test-utils';
import * as t from 'assert';
import { parseSource } from '../../../src/parser';

describe('Next - Optional chaining', () => {
  for (const arg of [
    'func?.()',
    'obj?.prop ',
    'func?.(...args)',
    'a?.[x]',
    'a?.()',
    'x?.1:y',
    'a?.[++x]',
    'a?.b.c(++x).d',
    'a?.b[3].c?.(x).d',
    '(a?.b).c',
    'delete a?.b',
    'func?.(a, b)',
    'a?.func?.()',
    'a?.func?.(a, b)',
    'a.func?.()',
    'obj?.[expr]',
    'obj?.[expr]?.[other]',
    `obj?.[true]`,
    'obj?.[true]?.[true]',
    'obj.a?.[expr]',
    `obj.a?.[true]`,
    `foo.bar?.baz`,
    `foo?.bar?.baz`,
    `foo?.bar`,
    'a.b?.c()',
    '(a?.b).c;',
    '(a?.b).c();',
    '(a?.b)?.c.d?.e;',
    `a?.b.c.d.e?.f`,
    `a.b.c?.d.e.f`,
    `if (a?.b?.c) {
      console.log(a?.b?.c);
    } else if (a?.b.c?.d?.e.f) {
      console.log(a?.b.c?.d?.e.f);
    }`,
    'true?.valueOf()',
    '0?.valueOf()',
    '[]?.length',
    'undefined?.["valueOf"]()',
    'const a = b.map(p => p.d?.e?.f);',
    'const a = b.map(p => p.c?.d?.e ?? "(string)");',
    'f?.(arg0, arg1)',
    'true?.(123)',
    `function isInvoked(obj) {
      let invoked = false;
      obj?.a.b.m(invoked = true);
      return invoked;
    }`,
    'a.b?.c?.d',
    'obj ? ["a", "b", "c"].map(x => x+x) : []',
    'const a = b?.c?.[d]?.e;',
    'const a = b?.c();',
    'const { a, b } = c.d?.e;',
    '1?.["valueOf"]()',
    '() => 0?.()',
    '() => 1?.()',
    '() => "hi"?.()',
    '() => ({})?.a["b"]',
    '() => (() => {})?.()()',
    '(() => {})?.()?.()',
    'null?.()().a["b"]',
    'delete undefined?.()',
    'delete null?.()',
    'undefined?.(...a)',
    'null?.(1, ...a)',
    '({}).a?.(...a)',
    '({ a: null }).a?.(...a)',
    'undefined?.(...a)?.(1, ...a)',
    '() => 5?.(...[])',
    'delete o1?.x',
    'o2.x?.["y"];',
    'a?.[foo(a)]',
    'a ?? a.b ?? (a?.b).c();',
    'a ?? foo.bar?.baz ?? a.c',
    'a ?? aobj?.[expr]?.[other] ?? foo.bar?.baz',
    'a?.b[3].c?.(x).d ?? aobj?.[expr]?.[other] ?? foo.bar?.baz',
    'const x = a?.b.c',
    '(null)?.b === null',
    'let a = b?.c',
    'a?.b',
    '!a ? a : a.b',
    'foo(null?.x)',
    'let a = b?? "default";',
    'let a = b.c ?? "default";',
    'let xn = x?.normalize("NFC")',
    'a?.b === undefined',
    'null?.foo === null',
    'var v = a?.b?.c?.d',
    'var v = (((a?.b)?.c)?.d)',
    'a?.b?.c?.d === undefined',
    'o3?.a === o4?.a === undefined',
    'o3?.a?.b === o4?.a?.b === undefined',
    'o3?.a?.b?.c === o4?.a?.b?.c === undefined',
    'x in (o3?.a)',
    'obj.func?.[arg].property;',
    'obj.func?.[arg.property];',
    'a?.b.c.e?.f.g?.h.t.c?.d()?.e;',
    'a?.d().f?.b',
    '(fn()?.a)?.b',
    'a?.[++x]',
    'a?.b.c(++x).d;',
    'undefined?.[++x]',
    'undefined?.b.c(++x).d; ',
    'obj.func?.[arg];',
    'a?.trim()?.indexOf("hello")',
    'foo?.x?.y?.z?()=>{foo}:bar;',
    `if (a?.b?.c === 'foobar') {}
     if (a?.b()?.c) {}
     if (a?.b?.()?.c) {}`,
    'new new class {}().constructor();',
    'System.global.navigator?.toString()',
    '(a?.b).c',
    `a?.b(...args);`,
    `a?.b(...args).c;`,
    '({ x: 1 }).x?.y.z;',
    `a?.b(...args).c(...args);`,
    'let a = b?.c;',
    'o.x?[y]+z:t',
    '({ x: y?.z })',
    'var a = b.c("string")?.d.e || 0;'
  ]) {
    it(`${arg}`, () => {
      t.doesNotThrow(() => {
        parseSource(`${arg}`, undefined, Context.OptionsNext);
      });
    });
    it(`${arg}`, () => {
      t.doesNotThrow(() => {
        parseSource(`${arg}`, undefined, Context.OptionsNext | Context.OptionsWebCompat);
      });
    });
  }

  fail('Expressions - Optional chaining (fail)', [
    ['x?.[y] = foo', Context.OptionsNext],
    ['0, [{ set y(val) {}}?.y] = [23];', Context.OptionsNext],
    ['0, { x: y?.z = 42 } = { x: 23 };', Context.OptionsNext],
    ['0, { x: y?.z = 42 } = { x: 23 };', Context.OptionsNext | Context.OptionsWebCompat],
    ['0, { x: y?.z } = { x: 23 };', Context.OptionsNext],
    ['0, { x: { set y(val) { }}?.y = 42} = {x: 42};', Context.OptionsNext],
    ['0, { x: { set y(val) {}}?.y} = {x: 42};', Context.OptionsNext],
    ['for ([x?.y = 42] in [[23]]) ;', Context.OptionsNext | Context.OptionsWebCompat],
    ['for ([x?.y = 42] in [[23]]) ;', Context.OptionsNext],
    ['for ([x?.y] in [[23]]) ;', Context.OptionsNext],
    ['for ([x?.y] in [[23]]) ;', Context.OptionsNext | Context.OptionsWebCompat],
    ['for ([{ set y(val) {}}?.y = 42] in [[23]]) ;', Context.OptionsNext],
    ['for ([{ set y(val) {}}?.y] in [[23]]) ;', Context.OptionsNext],
    ['for ({ x: y?.z = 42 } in [{ x: 23 }]) ;', Context.OptionsNext],
    ['for ({ x: y?.z } in [{ x: 23 }]) ;', Context.OptionsNext],
    ['for ({ x: { set y(val) { }}?.y = 42} in [{x: 42}]) ;', Context.OptionsNext],
    ['for ({ x: { set y(val) {} }?.y} in [{x: 42}]) ;', Context.OptionsNext],
    ['for ([x?.y = 42] of [[23]]) ;', Context.OptionsNext],
    ['for ([x?.y] of [[23]]) ;', Context.OptionsNext],
    ['for ([{ set y(val) {}}?.y = 42] of [[23]]) ;', Context.OptionsNext],
    ['for ([{ set y(val) { }}?.y] of [[23]]) ;', Context.OptionsNext],
    ['for ({ x: y?.z = 42 } of [{ x: 23 }]) ;', Context.OptionsNext],
    ['for ({ x: y?.z } of [{ x: 23 }]) ;', Context.OptionsNext],
    ['for ({ x: {set y(val) { }}?.y = 42} of [{x: 42}]) ;', Context.OptionsNext],
    ['for ({ x: { set y(val) {}}?.y} of [{x: 42}]) ;', Context.OptionsNext],
    ['0, [x?.y] = [23];', Context.OptionsNext],
    ['0, [x?.y = 42] = [23];', Context.OptionsNext],
    ['0, { x: { set y(val) {}}?.y} = {x: 42};', Context.OptionsNext],
    ['0, [{ set y(val) {}}?.y] = [23];', Context.OptionsNext],
    ['a.?2.3', Context.OptionsNext],
    ['a.?.2', Context.OptionsNext],
    ['a.?2.n', Context.OptionsNext],
    ['a.?2.3', Context.OptionsNext],
    ['a.?2.?n', Context.OptionsNext],
    ['obj?.a = 33;', Context.OptionsNext],
    ['a.? (?) [?]', Context.OptionsNext],
    ['a.?2.3', Context.OptionsNext],
    ['obj?.[expr] func?.(...args) new C?.(...args)', Context.OptionsNext],
    ['o.x?[y]+z', Context.OptionsNext],
    ['obj:?.prop', Context.OptionsNext],
    ['obj:?[expr]', Context.OptionsNext],
    ['func:?(...args)', Context.OptionsNext],
    ['a === null: a?.b.c === undefined', Context.OptionsNext],
    ['a === null: a?.b.c === undefined', Context.OptionsNext],
    ['?.a?.b?.c', Context.OptionsNext],
    ['?.(a.b.c)', Context.OptionsNext],
    ['?. ?[] ?() ?:', Context.OptionsNext],
    ['var b = condition ? a?.x.?y : a?.y?.z;', Context.OptionsNext],
    ['a.?[b.c].d', Context.OptionsNext],
    ['a[?b[c]]', Context.OptionsNext],
    ['delete ?a.b.c', Context.OptionsNext],
    ['delete ?a.b.c', Context.None],
    ['a?.b => (a == null ? a : a.b)', Context.OptionsNext],
    ['foo?.x?.y?.z?()=>foo;', Context.OptionsNext],
    ['const a = { b(){ return super?.c; } }', Context.OptionsNext],
    ['class A{ b(){ return super?.b; } }', Context.OptionsWebCompat],
    ['new a?.();', Context.OptionsNext | Context.Module | Context.Strict],
    ['new C?.b.d()', Context.OptionsNext | Context.OptionsWebCompat],
    ['a.?b.?()', Context.OptionsNext | Context.OptionsWebCompat],
    ['a.?()', Context.OptionsNext | Context.OptionsWebCompat],
    ['a?.b = c', Context.OptionsNext | Context.OptionsWebCompat],
    ['a?.{a} = c', Context.OptionsNext | Context.OptionsWebCompat],
    ['a?.(a) = c', Context.OptionsNext | Context.OptionsWebCompat],
    ['o3?.a in ()', Context.OptionsNext | Context.OptionsWebCompat],
    [
      'a?.b => (a == null ? void 0 : a.b) a?.b.c => (a == null ? void 0 : a.b.c)',
      Context.OptionsNext | Context.OptionsWebCompat
    ],
    ['class C {} class D extends C { foo() { return super?.bar; } }', Context.OptionsNext | Context.OptionsWebCompat],
    ['class C {} class D extends C { foo() { return super?.["bar"]; }', Context.OptionsNext | Context.OptionsWebCompat],
    ['class C {} class D extends C { constructor() { super?.(); } }', Context.OptionsNext | Context.OptionsWebCompat],
    ['const o = { C: class {} }; new o?.C();', Context.OptionsNext | Context.OptionsWebCompat],
    ['const o = { C: class {} }; new o?.["C"]();', Context.OptionsNext | Context.OptionsWebCompat],
    ['class C {} new C?.();', Context.OptionsNext | Context.OptionsWebCompat],
    ['function tag() {} tag?.``', Context.OptionsNext | Context.OptionsWebCompat],
    ['const o = { tag() {} }; o?.tag``', Context.OptionsNext | Context.OptionsWebCompat],
    ['import?.("foo")', Context.OptionsNext | Context.OptionsWebCompat],
    ['new new class {}()?.constructor?.();', Context.OptionsNext | Context.OptionsWebCompat],
    ['a?.{a} = c', Context.None],
    ['a.?()', Context.None]
  ]);

  pass('Next - Optional chaining (pass)', [
    [
      `(a?.b).c();`,
      Context.OptionsNext | Context.OptionsRanges | Context.OptionsWebCompat,
      {
        body: [
          {
            end: 11,
            expression: {
              arguments: [],
              callee: {
                computed: false,
                end: 8,
                object: {
                  end: 5,
                  expression: {
                    computed: false,
                    end: 5,
                    object: {
                      end: 2,
                      name: 'a',
                      start: 1,
                      type: 'Identifier'
                    },
                    optional: true,
                    property: {
                      end: 5,
                      name: 'b',
                      start: 4,
                      type: 'Identifier'
                    },
                    start: 1,
                    type: 'MemberExpression'
                  },
                  start: 5,
                  type: 'OptionalChain'
                },
                property: {
                  end: 8,
                  name: 'c',
                  start: 7,
                  type: 'Identifier'
                },
                start: 0,
                type: 'MemberExpression'
              },
              end: 10,
              optional: false,
              start: 0,
              type: 'CallExpression'
            },
            start: 0,
            type: 'ExpressionStatement'
          }
        ],
        end: 11,
        sourceType: 'script',
        start: 0,
        type: 'Program'
      }
    ],
    [
      `a?.(...args);`,
      Context.OptionsNext,
      {
        body: [
          {
            expression: {
              expression: {
                arguments: [
                  {
                    argument: {
                      name: 'args',
                      type: 'Identifier'
                    },
                    type: 'SpreadElement'
                  }
                ],
                callee: {
                  name: 'a',
                  type: 'Identifier'
                },
                optional: true,
                type: 'CallExpression'
              },
              type: 'OptionalChain'
            },
            type: 'ExpressionStatement'
          }
        ],
        sourceType: 'script',
        type: 'Program'
      }
    ],
    [
      `class A extends B { constructor(){ super()?.b; } }`,
      Context.OptionsNext,
      {
        body: [
          {
            body: {
              body: [
                {
                  computed: false,
                  decorators: [],
                  key: {
                    name: 'constructor',
                    type: 'Identifier'
                  },
                  kind: 'constructor',
                  static: false,
                  type: 'MethodDefinition',
                  value: {
                    async: false,
                    body: {
                      body: [
                        {
                          expression: {
                            expression: {
                              computed: false,
                              object: {
                                arguments: [],
                                callee: {
                                  type: 'Super'
                                },
                                optional: false,
                                type: 'CallExpression'
                              },
                              optional: true,
                              property: {
                                name: 'b',
                                type: 'Identifier'
                              },
                              type: 'MemberExpression'
                            },
                            type: 'OptionalChain'
                          },
                          type: 'ExpressionStatement'
                        }
                      ],
                      type: 'BlockStatement'
                    },
                    generator: false,
                    id: null,
                    params: [],
                    type: 'FunctionExpression'
                  }
                }
              ],
              type: 'ClassBody'
            },
            decorators: [],
            id: {
              name: 'A',
              type: 'Identifier'
            },
            superClass: {
              name: 'B',
              type: 'Identifier'
            },
            type: 'ClassDeclaration'
          }
        ],
        sourceType: 'script',
        type: 'Program'
      }
    ],
    [
      `a?.func?.()`,
      Context.OptionsNext,
      {
        body: [
          {
            expression: {
              expression: {
                arguments: [],
                callee: {
                  computed: false,
                  object: {
                    name: 'a',
                    type: 'Identifier'
                  },
                  optional: true,
                  property: {
                    name: 'func',
                    type: 'Identifier'
                  },
                  type: 'MemberExpression'
                },
                optional: true,
                type: 'CallExpression'
              },
              type: 'OptionalChain'
            },
            type: 'ExpressionStatement'
          }
        ],
        sourceType: 'script',
        type: 'Program'
      }
    ],
    [
      `func?.()`,
      Context.OptionsNext,
      {
        body: [
          {
            expression: {
              expression: {
                arguments: [],
                callee: {
                  name: 'func',
                  type: 'Identifier'
                },
                optional: true,
                type: 'CallExpression'
              },
              type: 'OptionalChain'
            },
            type: 'ExpressionStatement'
          }
        ],
        sourceType: 'script',
        type: 'Program'
      }
    ],
    [
      `obj.a?.[true]`,
      Context.OptionsNext,
      {
        body: [
          {
            expression: {
              expression: {
                computed: true,
                object: {
                  computed: false,
                  object: {
                    name: 'obj',
                    type: 'Identifier'
                  },
                  property: {
                    name: 'a',
                    type: 'Identifier'
                  },
                  type: 'MemberExpression'
                },
                optional: true,
                property: {
                  type: 'Literal',
                  value: true
                },
                type: 'MemberExpression'
              },
              type: 'OptionalChain'
            },
            type: 'ExpressionStatement'
          }
        ],
        sourceType: 'script',
        type: 'Program'
      }
    ],
    [
      `foo?.bar`,
      Context.OptionsNext,
      {
        body: [
          {
            expression: {
              expression: {
                computed: false,
                object: {
                  name: 'foo',
                  type: 'Identifier'
                },
                optional: true,
                property: {
                  name: 'bar',
                  type: 'Identifier'
                },
                type: 'MemberExpression'
              },
              type: 'OptionalChain'
            },
            type: 'ExpressionStatement'
          }
        ],
        sourceType: 'script',
        type: 'Program'
      }
    ],
    [
      `a?.b.c(++x).d`,
      Context.OptionsNext,
      {
        body: [
          {
            expression: {
              expression: {
                computed: false,
                object: {
                  arguments: [
                    {
                      argument: {
                        name: 'x',
                        type: 'Identifier'
                      },
                      operator: '++',
                      prefix: true,
                      type: 'UpdateExpression'
                    }
                  ],
                  callee: {
                    computed: false,
                    object: {
                      computed: false,
                      object: {
                        name: 'a',
                        type: 'Identifier'
                      },
                      optional: true,
                      property: {
                        name: 'b',
                        type: 'Identifier'
                      },
                      type: 'MemberExpression'
                    },
                    property: {
                      name: 'c',
                      type: 'Identifier'
                    },
                    type: 'MemberExpression'
                  },
                  optional: false,
                  type: 'CallExpression'
                },
                property: {
                  name: 'd',
                  type: 'Identifier'
                },
                type: 'MemberExpression'
              },
              type: 'OptionalChain'
            },
            type: 'ExpressionStatement'
          }
        ],
        sourceType: 'script',
        type: 'Program'
      }
    ]
  ]);
});
