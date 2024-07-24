import create from 'zustand';
import { nanoid } from 'nanoid';
import { initialEdges, initialNodes } from '~/components/constant';
import { Node, Edge, Connection, addEdge, NodeChange, EdgeChange, applyNodeChanges, applyEdgeChanges } from '@xyflow/react';

interface FlowState {
  nodes: Node[];
  edges: Edge[];
  addNode: () => void;
  updateNodeHeading: (id: string, heading: string) => void;
  updateNodeDescription: (id: string, description: string) => void;
  onNodesChange: (changes: NodeChange[]) => void;
  onEdgesChange: (changes: EdgeChange[]) => void;
  onConnect: (params: Connection) => void;
  setNodes: (nodes: Node[]) => void;
  setEdges: (edges: Edge[]) => void;
}

const useStore = create<FlowState>((set , get) => ({
  nodes: initialNodes,
  edges: initialEdges,
  addNode: () =>
    set((state) => ({
      nodes: [
        ...state.nodes,
        {
          id: nanoid(),
          position: { x: Math.random() * 1500, y: Math.random() * 700 },
          data: {
            heading: '',
            description: '',
          },
          type: 'custom',
        },
      ],
    })),
    updateNodeHeading: (id, heading) =>
      set((state) => ({
        nodes: state.nodes.map((node) =>
          node.id === id ? { ...node, data: { ...node.data, heading } } : node
        ),
      })),
    updateNodeDescription: (id, description) =>
      set((state) => ({
        nodes: state.nodes.map((node) =>
          node.id === id ? { ...node, data: { ...node.data, description } } : node
        ),
      })),
  onNodesChange: (changes) =>
    set({
      nodes: applyNodeChanges( changes, get().nodes)
    }),

  onEdgesChange: (changes) =>
    set({
      edges: applyEdgeChanges( changes , get().edges)
    }),
  onConnect: (params) =>
    set((state) => ({
      edges: addEdge(params, state.edges),
    })),

  setNodes: (nodes) => {
    set( {nodes})
  },

  setEdges: (edges) => {
    set( {edges})
  }
}));

export default useStore;