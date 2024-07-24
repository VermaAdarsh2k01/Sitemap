import { Handle, Position } from "@xyflow/react";
import { ChangeEvent, useCallback, useState } from "react";

export function InputNode() {
    const [input  , setInput] = useState("")

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }
    return (
      <>
        <Handle type="target" position={Position.Top} />
        <div className="w-full">
          <input id="text" name="text" onChange={onChange} value={input} className="nodrag" />
        </div>
        <Handle type="source" position={Position.Bottom}  />
      </>
    );
  }