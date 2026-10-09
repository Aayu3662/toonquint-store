import React, { Children, cloneElement, isValidElement, type ReactElement, type ReactNode } from 'react';

interface ContentListContextProps {
  field?: string;
  className?: string;
  children: ReactNode;
}

export function ContentListContext({ field, className, children }: ContentListContextProps) {
  if (!field) {
    return className ? <div className={className}>{children}</div> : <>{children}</>;
  }

  const direct = Children.toArray(children);

  if (direct.length === 1 && isValidElement(direct[0])) {
    const wrapper = direct[0] as ReactElement<{ children?: ReactNode }>;
    const inner = Children.toArray(wrapper.props.children);
    if (inner.length > 1) {
      return (
        <div className={className} style={className ? undefined : { display: 'contents' }}>
          {cloneElement(wrapper, {}, inner)}
        </div>
      );
    }
  }

  return (
    <div className={className} style={className ? undefined : { display: 'contents' }}>
      {children}
    </div>
  );
}

export default ContentListContext;
