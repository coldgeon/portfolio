'use client';
import Link from 'next/link';
import type { ComponentProps } from 'react';

export const projectReturn: {trigger: HTMLElement | null} = {trigger:null};
export function ProjectLink({onClick, ...props}:ComponentProps<typeof Link>) {
  return <Link {...props} scroll={false} onClick={event=>{
    if (!event.metaKey && !event.ctrlKey && !event.shiftKey && event.button === 0) projectReturn.trigger = event.currentTarget;
    onClick?.(event);
  }}/>;
}
