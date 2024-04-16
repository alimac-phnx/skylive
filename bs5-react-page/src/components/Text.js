import React from 'react';

function Text({ title, content }) {
  return (
    <div>
      {title && <h1 class="font-weight-light">{title}</h1>}
      {content && <p>{content}</p>}
    </div>
  );
}

export default Text;