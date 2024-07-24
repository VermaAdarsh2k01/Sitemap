
import { nanoid } from "nanoid"
import { AppNode } from "~/app/types"

export const initialNodes = [
    {
        id: nanoid(),
        position:{x:0 , y:0},
        data: {
            heading:'',
            description:'',
            onchange: () => {}
        },
        type: 'custom',
    }
] as AppNode[]

export const initialEdges = []