import type { ReactNode } from 'react';

function PostalAddress({ children }: { children?: ReactNode }) {
  return (
    <p>
      Mahir Durna
      <br />
      Borkumstr. 3
      <br />
      49696 Molbergen
      {children}
    </p>
  );
}

export default PostalAddress;
