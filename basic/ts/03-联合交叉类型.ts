type Props={
    onClick:(e:MouseEvent) => void
    onDrag:(e:DragEvent) => void
    news1Types:string
    class2Name:string
}

type t1 = keyof Props & {}
type t2 = keyof Props & `on${string}`

//智能提示
const arr:t2[]=[]