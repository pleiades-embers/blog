export {}

class NodeType {}

type Expr =
  | { type: "choice"; exprs: Expr[] }
  | { type: "seq"; exprs: Expr[] }
  | { type: "plus"; expr: Expr }
  | { type: "star"; expr: Expr }
  | { type: "opt"; expr: Expr }
  | { type: "range"; min: number; max: number; expr: Expr }
  | { type: "name"; value: NodeType };

type Edge = { term: NodeType | undefined; to: number | undefined };

function nfa(expr: Expr): Edge[][] {
  let nfa: Edge[][] = [[]];
  connect(compile(expr, 0), node());
  return nfa;

  function node() {
    return nfa.push([]) - 1;
  }
  function edge(from: number, to?: number, term?: NodeType) {
    let edge = { term, to };
    nfa[from].push(edge);
    return edge;
  }
  function connect(edges: Edge[], to: number) {
    edges.forEach((edge) => (edge.to = to));
  }

  function compile(expr: Expr, from: number): Edge[] {
    if (expr.type == "choice") {
      return expr.exprs.reduce(
        (out, expr) => out.concat(compile(expr, from)),
        [] as Edge[]
      );
    } else if (expr.type == "seq") {
      for (let i = 0; ; i++) {
        let next = compile(expr.exprs[i], from);
        if (i == expr.exprs.length - 1) return next;
        connect(next, (from = node()));
      }
    } else if (expr.type == "star") {
      let loop = node();
      edge(from, loop);
      connect(compile(expr.expr, loop), loop);
      return [edge(loop)];
    } else if (expr.type == "plus") {
      let loop = node();
      connect(compile(expr.expr, from), loop);
      connect(compile(expr.expr, loop), loop);
      return [edge(loop)];
    } else if (expr.type == "opt") {
      return [edge(from)].concat(compile(expr.expr, from));
    } else if (expr.type == "range") {
      let cur = from;
      for (let i = 0; i < expr.min; i++) {
        let next = node();
        connect(compile(expr.expr, cur), next);
        cur = next;
      }
      if (expr.max == -1) {
        connect(compile(expr.expr, cur), cur);
      } else {
        for (let i = expr.min; i < expr.max; i++) {
          let next = node();
          edge(cur, next);
          connect(compile(expr.expr, cur), next);
          cur = next;
        }
      }
      return [edge(cur)];
    } else if (expr.type == "name") {
      return [edge(from, undefined, expr.value)];
    } else {
      throw new Error("Unknown expr type");
    }
  }
}

let expr:Expr = {
  type: "seq",
  exprs: [
    {
      type: "star",
      expr: { type: "name", value: "paragraph" },
    },
    {
      type: "plus",
      expr: { type: "name", value: "image" },
    },
    {
      type: "opt",
      expr: { type: "name", value: "caption" },
    },
  ],
};

const result = nfa(expr);

console.log(result);
