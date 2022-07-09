import React from 'react';


const BtnCellRenderer = (props) => {

  const handleClick = () => {
    if (props.colDef.field === 'Download') {
      const data = props.data;
      const link = document.createElement('a');
      link.href = data.fileUrl;
      link.setAttribute('download', data.fileName);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    }
  }

  return (
    <button style={{'lineHeight': 'initial'}} onClick={handleClick}>{props.colDef.field}</button>
  )
}

export default BtnCellRenderer;