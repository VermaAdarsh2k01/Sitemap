"use client"
import { useState, useCallback, useMemo } from 'react';
import { ReactFlow, Background , Controls, Connection,type OnConnect, addEdge, useEdgesState, useNodesState, useReactFlow, ReactFlowProvider } from '@xyflow/react';
import '@xyflow/react/dist/style.css'; 
import CustomNode from './node/CustomNode';
import useStore from '~/app/store';



const FlowComponent = () => {
  
  const nodeTypes = useMemo(() => ({ custom: CustomNode }), []);
  
  const { nodes, edges, addNode, onNodesChange, onEdgesChange, onConnect } = useStore();

  const handleClick = () => {
    addNode();
};

    return (
    
    <div className='w-full h-full relative'>
        <div className="w-[100%] h-full border-2 border-black">
            <ReactFlow 
              nodes={nodes} 
              edges={edges} 
              onNodesChange={onNodesChange} 
              onEdgesChange={onEdgesChange} 
              onConnect={onConnect as OnConnect}
              nodeTypes={nodeTypes}
            >
                <Background/>
                <Controls/>
            </ReactFlow>
        </div>
        <button
            onClick={handleClick}
            className='absolute bottom-10 left-1/2 w-16 h-10 bg-white rounded-full border-2 border-black'
        >   
            Add 
        </button>
    </div>

  )
}



export default FlowComponent