import React from 'react';
import { Handle, Position } from '@xyflow/react';
import useStore from '~/app/store';

interface CustomNodeData {
    heading: string;
    description: string;
    // onChange: (event: React.ChangeEvent<HTMLInputElement>, field: 'heading' | 'description') => void;
  }

interface CustomNodeProps {
  id: string;
  data: CustomNodeData;
}

const CustomNode = ({ id , data}:CustomNodeProps) => {
  
  const updateNodeHeading = useStore((state) => state.updateNodeHeading);
  const updateNodeDescription = useStore((state) => state.updateNodeDescription);

  const handleHeadingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateNodeHeading(id, e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateNodeDescription(id, e.target.value);
  };

  return (
    <div className="flex flex-col p-4 bg-white divide-y-2">
      <input 
        type="text" 
        placeholder="Heading" 
        value={data.heading}
        onChange={handleHeadingChange}
        className=''
      />
      <input 
        type="text" 
        placeholder="Description" 
        value={data.description}
        onChange={handleDescriptionChange}
 
      />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default CustomNode;