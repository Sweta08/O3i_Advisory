import React, { useState } from 'react';
import { CustomButton, Title } from './style';

const TreeNode = ({ node, onDelete, onAdd }) => {
  return (
    <div style={{ marginLeft: 20 }}>
     
      <span>{node.value}</span>

     
      <CustomButton onClick={() => onDelete(node.id)}>Delete</CustomButton>
      <CustomButton onClick={() => onAdd(node.id)}>Add Child</CustomButton>

     
      {node.children && node.children.length > 0 && (
        <div>
          {node.children.map((childNode) => (
            <TreeNode
              key={childNode.id}
              node={childNode}
              onDelete={onDelete}
              onAdd={onAdd}
            />
          ))}
        </div>
      )}
    </div>
  );
};

function AddNode () {
 
  const [tree, setTree] = useState({
    id: 1,
    value: 'Parent Node',
    children: []
  });

  
  const addNode = (parentId) => {
    const addRecursive = (node) => {
      if (node.id === parentId) {
        const newNode = {
          id: Date.now(),
          value: `${Date.now()}`,
          children: []
        };
        node.children.push(newNode);
      } else {
        node.children.forEach(addRecursive);
      }
    };

    const updatedTree = { ...tree };
    addRecursive(updatedTree);
    setTree(updatedTree);
  };
  const deleteNode = (nodeId) => {
    const deleteRecursive = (node) => {
      node.children = node.children.filter((child) => child.id !== nodeId);

      node.children.forEach(deleteRecursive);
    };

    const updatedTree = { ...tree };
    deleteRecursive(updatedTree);
    setTree(updatedTree);
  };

  return (
    <div>
      <Title>Add Node</Title>
      <TreeNode node={tree} onDelete={deleteNode} onAdd={addNode} />
    </div>
  );
};

export default AddNode;
