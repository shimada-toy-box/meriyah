export interface _Node {
    start?: number;
    end?: number;
    loc?: SourceLocation | null;
}
export interface SourceLocation {
    source?: string | null;
    start: Position;
    end: Position;
}
export interface Position {
    line: number;
    column: number;
}
export declare type Labels = any;
export declare type IdentifierOrExpression = Identifier | Expression | ArrowFunctionExpression;
export declare type ArgumentExpression = ArrayExpression | AssignmentExpression | ConditionalExpression | Literal | SpreadElement | BinaryExpression | LogicalExpression | CoalesceExpression | SequenceExpression;
export declare type CommentType = 'Line' | 'Block' | 'HTMLOpen' | 'HTMLClose';
export interface Comment {
    type: CommentType;
    value: string;
    start?: number;
    end?: number;
    loc?: SourceLocation | null;
}
export declare type Node = ArrayExpression | ArrayPattern | ArrowFunctionExpression | AssignmentExpression | AssignmentPattern | AwaitExpression | BigIntLiteral | BinaryExpression | BlockStatement | BreakStatement | CallExpression | OptionalExpression | ImportExpression | CatchClause | ClassBody | ClassDeclaration | ClassExpression | ClassProperty | ConditionalExpression | ContinueStatement | DebuggerStatement | Decorator | DoWhileStatement | EmptyStatement | ExportAllDeclaration | ExportDefaultDeclaration | ExportNamespaceSpecifier | ExportNamedDeclaration | ExportSpecifier | ExpressionStatement | FieldDefinition | ForInStatement | ForOfStatement | ForStatement | FunctionDeclaration | FunctionExpression | Identifier | IfStatement | Import | ImportDeclaration | ImportDefaultSpecifier | ImportNamespaceSpecifier | ImportSpecifier | JSXNamespacedName | JSXAttribute | JSXClosingElement | JSXClosingFragment | JSXElement | JSXEmptyExpression | JSXExpressionContainer | JSXFragment | JSXIdentifier | JSXOpeningElement | JSXOpeningFragment | JSXSpreadAttribute | JSXSpreadChild | JSXMemberExpression | JSXText | LabeledStatement | Literal | LogicalExpression | CoalesceExpression | MemberExpression | MetaProperty | MethodDefinition | NewExpression | ObjectExpression | ObjectPattern | ParenthesizedExpression | PrivateName | Program | Property | RestElement | ReturnStatement | SequenceExpression | SpreadElement | Super | SwitchCase | SwitchStatement | TaggedTemplateExpression | TemplateElement | TemplateLiteral | ThisExpression | ThrowStatement | TryStatement | UpdateExpression | UnaryExpression | VariableDeclaration | VariableDeclarator | WhileStatement | WithStatement | YieldExpression;
export declare type BindingPattern = ArrayPattern | ObjectPattern | ArrayExpression | AssignmentExpression | ObjectExpression | Identifier;
export declare type BindingName = BindingPattern | Identifier;
export declare type ClassElement = ClassProperty | FunctionExpression | MethodDefinition;
export declare type DeclarationStatement = ClassDeclaration | ClassExpression | ExportDefaultDeclaration | ExportNamespaceSpecifier | ExportAllDeclaration | ExportNamedDeclaration | FunctionDeclaration;
export declare type EntityName = Identifier;
export declare type ExportDeclaration = ClassDeclaration | ClassExpression | FunctionDeclaration | VariableDeclaration;
export declare type Expression = ArrowFunctionExpression | AssignmentExpression | BinaryExpression | ConditionalExpression | MetaProperty | OptionalExpression | JSXClosingElement | JSXClosingFragment | JSXExpressionContainer | JSXOpeningElement | JSXOpeningFragment | JSXSpreadChild | LogicalExpression | CoalesceExpression | NewExpression | RestElement | SequenceExpression | SpreadElement | AwaitExpression | LeftHandSideExpression | UnaryExpression | UpdateExpression | YieldExpression;
export declare type ForInitialiser = Expression | VariableDeclaration;
export declare type ImportClause = ImportDefaultSpecifier | ImportNamespaceSpecifier | ImportSpecifier;
export declare type IterationStatement = DoWhileStatement | ForInStatement | ForOfStatement | ForStatement | WhileStatement;
export declare type JSXChild = JSXElement | JSXExpression | JSXFragment | JSXText;
export declare type JSXExpression = JSXEmptyExpression | JSXSpreadChild | JSXExpressionContainer;
export declare type JSXTagNameExpression = JSXIdentifier | JSXMemberExpression | JSXNamespacedName;
export declare type LeftHandSideExpression = CallExpression | OptionalExpression | ImportExpression | ClassExpression | ClassDeclaration | FunctionExpression | LiteralExpression | MemberExpression | PrimaryExpression | TaggedTemplateExpression;
export declare type LiteralExpression = BigIntLiteral | Literal | TemplateLiteral;
export declare type ObjectLiteralElementLike = MethodDefinition | Property | RestElement | SpreadElement;
export declare type Parameter = AssignmentPattern | RestElement | ArrayPattern | ObjectPattern | Identifier;
export declare type PrimaryExpression = ArrayExpression | ArrayPattern | ClassExpression | FunctionExpression | Identifier | Import | JSXElement | JSXFragment | JSXOpeningElement | Literal | LiteralExpression | MetaProperty | ObjectExpression | ObjectPattern | Super | TemplateLiteral | ThisExpression;
export declare type PrimaryExpressionExtended = ArrayExpression | ArrowFunctionExpression | ArrayPattern | AwaitExpression | Expression | ClassExpression | FunctionExpression | Identifier | Import | JSXElement | JSXFragment | JSXOpeningElement | Literal | LiteralExpression | MetaProperty | ObjectExpression | ObjectPattern | PrivateName | NewExpression | Super | TemplateLiteral | ThisExpression | UnaryExpression | UpdateExpression;
export declare type PropertyName = Identifier | Literal;
export declare type Statement = BlockStatement | BreakStatement | ContinueStatement | DebuggerStatement | DeclarationStatement | EmptyStatement | ExpressionStatement | IfStatement | IterationStatement | ImportDeclaration | LabeledStatement | ReturnStatement | SwitchStatement | ThrowStatement | TryStatement | VariableDeclaration | WithStatement;
interface ClassDeclarationBase extends _Node {
    id: Identifier | null;
    body: ClassBody;
    superClass: Expression | null;
    decorators?: Decorator[];
}
interface ClassPropertyBase extends _Node {
    key: Expression;
    value: Expression;
    computed: boolean;
    static: boolean;
    decorators?: Decorator[];
}
interface FunctionDeclarationBase extends _Node {
    id: Identifier | null;
    generator: boolean;
    async: boolean;
    params: Parameter[];
    body?: BlockStatement | null;
}
interface MethodDefinitionBase extends _Node {
    key: Expression | PrivateName | null;
    value: FunctionExpression;
    computed: boolean;
    static: boolean;
    kind: 'method' | 'get' | 'set' | 'constructor';
    decorators?: Decorator[];
}
export interface ArrayExpression extends _Node {
    type: 'ArrayExpression';
    elements: any[];
}
export interface ArrayPattern extends _Node {
    type: 'ArrayPattern';
    elements: Expression[];
}
export interface ArrowFunctionExpression extends _Node {
    type: 'ArrowFunctionExpression';
    params: Parameter[];
    body: Expression | BlockStatement;
    async: boolean;
    expression: boolean;
}
export interface AssignmentExpression extends _Node {
    type: 'AssignmentExpression';
    operator: string;
    left: Expression;
    right: Expression;
}
export interface AssignmentPattern extends _Node {
    type: 'AssignmentPattern';
    left: BindingName;
    right?: Expression;
}
export interface AwaitExpression extends _Node {
    type: 'AwaitExpression';
    argument: Expression;
}
export interface BigIntLiteral extends _Node {
    type: 'BigIntLiteral';
    value: number | null;
    bigint: string;
    raw?: string;
}
export interface BinaryExpression extends _Node {
    type: 'BinaryExpression';
    operator: string;
    left: Expression;
    right: Expression;
}
export interface BlockStatement extends _Node {
    type: 'BlockStatement';
    body: Statement[];
}
export interface BreakStatement extends _Node {
    type: 'BreakStatement';
    label: Identifier | null;
}
export interface ImportExpression extends _Node {
    type: 'ImportExpression';
    source: Expression;
}
export interface OptionalExpression extends _Node {
    type: 'OptionalExpression';
    expression: any;
}
export interface CallExpression extends _Node {
    type: 'CallExpression';
    callee: any;
    arguments: (Expression | SpreadElement)[];
    optional?: boolean;
}
export interface CatchClause extends _Node {
    type: 'CatchClause';
    param: BindingName | null;
    body: BlockStatement;
}
export interface ClassBody extends _Node {
    type: 'ClassBody';
    body: (ClassElement | FieldDefinition)[];
}
export interface FieldDefinition extends _Node {
    type: 'FieldDefinition';
    key: PrivateName | Expression;
    value: any;
    decorators?: Decorator[] | null;
    computed: boolean;
    static: boolean;
}
export interface PrivateName extends _Node {
    type: 'PrivateName';
    name: string;
}
export interface ClassDeclaration extends ClassDeclarationBase {
    type: 'ClassDeclaration';
}
export interface ClassExpression extends ClassDeclarationBase {
    type: 'ClassExpression';
}
export interface ClassProperty extends ClassPropertyBase {
    type: 'ClassProperty';
}
export interface ConditionalExpression extends _Node {
    type: 'ConditionalExpression';
    test: Expression;
    consequent: Expression;
    alternate: Expression;
}
export interface ContinueStatement extends _Node {
    type: 'ContinueStatement';
    label: Identifier | null;
}
export interface DebuggerStatement extends _Node {
    type: 'DebuggerStatement';
}
export interface Decorator extends _Node {
    type: 'Decorator';
    expression: LeftHandSideExpression;
}
export interface DoWhileStatement extends _Node {
    type: 'DoWhileStatement';
    test: Expression;
    body: Statement;
}
export interface EmptyStatement extends _Node {
    type: 'EmptyStatement';
}
export interface ExportAllDeclaration extends _Node {
    type: 'ExportAllDeclaration';
    source: Literal;
}
export interface ExportNamespaceSpecifier extends _Node {
    type: 'ExportNamespaceSpecifier';
    specifier: Identifier;
}
export interface ExportDefaultDeclaration extends _Node {
    type: 'ExportDefaultDeclaration';
    declaration: ExportDeclaration | Expression;
}
export interface ExportNamedDeclaration extends _Node {
    type: 'ExportNamedDeclaration';
    declaration: ExportDeclaration | null;
    specifiers: (ExportNamespaceSpecifier | ExportSpecifier)[];
    source: Literal | null;
}
export interface ExportSpecifier extends _Node {
    type: 'ExportSpecifier';
    local: Identifier;
    exported: Identifier;
}
export interface ExpressionStatement extends _Node {
    type: 'ExpressionStatement';
    expression: Expression;
}
export interface ForInStatement extends _Node {
    type: 'ForInStatement';
    left: ForInitialiser;
    right: Expression;
    body: Statement;
}
export interface ForOfStatement extends _Node {
    type: 'ForOfStatement';
    left: ForInitialiser;
    right: Expression;
    body: Statement;
    await: boolean;
}
export interface ForStatement extends _Node {
    type: 'ForStatement';
    init: Expression | ForInitialiser | null;
    test: Expression | null;
    update: Expression | null;
    body: Statement;
}
export interface FunctionDeclaration extends FunctionDeclarationBase {
    type: 'FunctionDeclaration';
}
export interface FunctionExpression extends FunctionDeclarationBase {
    type: 'FunctionExpression';
}
export interface Identifier extends _Node {
    type: 'Identifier';
    name: string;
    optional?: boolean;
}
export interface IfStatement extends _Node {
    type: 'IfStatement';
    test: Expression;
    consequent: Statement;
    alternate: Statement | null;
}
export interface Import extends _Node {
    type: 'Import';
}
export interface ImportDeclaration extends _Node {
    type: 'ImportDeclaration';
    source: Expression;
    specifiers: ImportClause[];
}
export interface ImportDefaultSpecifier extends _Node {
    type: 'ImportDefaultSpecifier';
    local: Identifier;
}
export interface ImportNamespaceSpecifier extends _Node {
    type: 'ImportNamespaceSpecifier';
    local: Identifier;
}
export interface ImportSpecifier extends _Node {
    type: 'ImportSpecifier';
    local: Identifier;
    imported: Identifier;
}
export interface JSXNamespacedName extends _Node {
    type: 'JSXNamespacedName';
    namespace: JSXIdentifier | JSXMemberExpression;
    name: JSXIdentifier;
}
export declare type JSXAttributeValue = JSXIdentifier | Literal | JSXElement | JSXFragment | JSXExpressionContainer | JSXSpreadChild | null;
export interface JSXAttribute extends _Node {
    type: 'JSXAttribute';
    name: JSXNamespacedName | JSXIdentifier;
    value: JSXAttributeValue;
}
export interface JSXClosingElement extends _Node {
    type: 'JSXClosingElement';
    name: JSXTagNameExpression;
}
export interface JSXClosingFragment extends _Node {
    type: 'JSXClosingFragment';
}
export interface JSXElement extends _Node {
    type: 'JSXElement';
    openingElement: JSXOpeningElement;
    closingElement: JSXClosingElement | null;
    children: JSXChild[];
}
export interface JSXEmptyExpression extends _Node {
    type: 'JSXEmptyExpression';
}
export interface JSXExpressionContainer extends _Node {
    type: 'JSXExpressionContainer';
    expression: Expression | JSXEmptyExpression;
}
export interface JSXFragment extends _Node {
    type: 'JSXFragment';
    openingFragment: JSXOpeningFragment;
    closingFragment: JSXClosingFragment;
    children: JSXChild[];
}
export interface JSXIdentifier extends _Node {
    type: 'JSXIdentifier';
    name: string;
}
export interface JSXMemberExpression extends _Node {
    type: 'JSXMemberExpression';
    object: JSXTagNameExpression;
    property: JSXIdentifier;
}
export interface JSXOpeningElement extends _Node {
    type: 'JSXOpeningElement';
    selfClosing: boolean;
    name: JSXTagNameExpression;
    attributes: (JSXAttribute | JSXSpreadAttribute)[];
}
export interface JSXOpeningFragment extends _Node {
    type: 'JSXOpeningFragment';
}
export interface JSXSpreadAttribute extends _Node {
    type: 'JSXSpreadAttribute';
    argument: Expression;
}
export interface JSXSpreadChild extends _Node {
    type: 'JSXSpreadChild';
    expression: Expression | JSXEmptyExpression;
}
export interface JSXText extends _Node {
    type: 'JSXText';
    value: string;
    raw?: string;
}
export interface LabeledStatement extends _Node {
    type: 'LabeledStatement';
    label: Identifier;
    body: Statement;
}
export interface Literal extends _Node {
    type: 'Literal';
    value: boolean | number | string | null;
    raw?: string;
}
export interface CoalesceExpression extends _Node {
    type: 'CoalesceExpression';
    operator: string;
    left: Expression;
    right: Expression;
}
export interface LogicalExpression extends _Node {
    type: 'LogicalExpression';
    operator: string;
    left: Expression;
    right: Expression;
}
export interface MemberExpression extends _Node {
    type: 'MemberExpression';
    object: Expression | Super;
    property: Expression | PrivateName;
    computed?: boolean;
    optional?: boolean;
}
export declare type Pattern = Identifier | ObjectPattern | ArrayPattern | RestElement | AssignmentPattern | MemberExpression;
export interface MetaProperty extends _Node {
    type: 'MetaProperty';
    meta: Identifier;
    property: Identifier;
}
export interface MethodDefinition extends MethodDefinitionBase {
    type: 'MethodDefinition';
}
export interface NewExpression extends _Node {
    type: 'NewExpression';
    callee: LeftHandSideExpression;
    arguments: Expression[];
}
export interface ObjectExpression extends _Node {
    type: 'ObjectExpression';
    properties: ObjectLiteralElementLike[];
}
export interface ObjectPattern extends _Node {
    type: 'ObjectPattern';
    properties: ObjectLiteralElementLike[];
}
export interface Program extends _Node {
    type: 'Program';
    body: Statement[];
    sourceType: 'module' | 'script';
}
export interface ParenthesizedExpression extends _Node {
    type: 'ParenthesizedExpression';
    expression: Expression;
}
export interface Property extends _Node {
    type: 'Property';
    key: Expression;
    value: Expression | AssignmentPattern | BindingName;
    computed: boolean;
    method: boolean;
    shorthand: boolean;
    kind: 'init' | 'get' | 'set';
}
export interface RestElement extends _Node {
    type: 'RestElement';
    argument: BindingName | Expression | PropertyName;
    value?: AssignmentPattern;
}
export interface ReturnStatement extends _Node {
    type: 'ReturnStatement';
    argument: Expression | null;
}
export interface SequenceExpression extends _Node {
    type: 'SequenceExpression';
    expressions: Expression[];
}
export declare type SpreadArgument = BindingName | Expression | PropertyName | SpreadElement;
export interface SpreadElement extends _Node {
    type: 'SpreadElement';
    argument: SpreadArgument;
}
export interface Super extends _Node {
    type: 'Super';
}
export interface SwitchCase extends _Node {
    type: 'SwitchCase';
    test: Expression | null;
    consequent: Statement[];
}
export interface SwitchStatement extends _Node {
    type: 'SwitchStatement';
    discriminant: Expression;
    cases: SwitchCase[];
}
export interface TaggedTemplateExpression extends _Node {
    type: 'TaggedTemplateExpression';
    tag: Expression;
    quasi: TemplateLiteral;
}
export interface TemplateElement extends _Node {
    type: 'TemplateElement';
    value: {
        raw: string;
        cooked: string;
    };
    tail: boolean;
}
export interface TemplateLiteral extends _Node {
    type: 'TemplateLiteral';
    quasis: TemplateElement[];
    expressions: Expression[];
}
export interface ThisExpression extends _Node {
    type: 'ThisExpression';
}
export interface ThrowStatement extends _Node {
    type: 'ThrowStatement';
    argument: Expression;
}
export interface TryStatement extends _Node {
    type: 'TryStatement';
    block: BlockStatement;
    handler: CatchClause | null;
    finalizer: BlockStatement | null;
}
export declare type UnaryOperator = '-' | '+' | '!' | '~' | 'typeof' | 'void' | 'delete';
export declare type UpdateOperator = '++' | '--';
export interface UpdateExpression extends _Node {
    type: 'UpdateExpression';
    operator: UpdateOperator;
    argument: Expression;
    prefix: boolean;
}
export interface UnaryExpression extends _Node {
    type: 'UnaryExpression';
    operator: UnaryOperator;
    prefix: true;
    argument: Expression;
}
export interface VariableDeclaration extends _Node {
    type: 'VariableDeclaration';
    declarations: VariableDeclarator[];
    kind: 'let' | 'const' | 'var';
}
export interface VariableDeclarator extends _Node {
    type: 'VariableDeclarator';
    id: Expression | BindingName;
    init: Expression | null;
    definite?: boolean;
}
export interface WhileStatement extends _Node {
    type: 'WhileStatement';
    test: Expression;
    body: Statement;
}
export interface WithStatement extends _Node {
    type: 'WithStatement';
    object: Expression;
    body: Statement;
}
export interface YieldExpression extends _Node {
    type: 'YieldExpression';
    delegate: boolean;
    argument?: Expression | null;
}
export {};
//# sourceMappingURL=estree.d.ts.map