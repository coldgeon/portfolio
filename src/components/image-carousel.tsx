'use client';

import Image from 'next/image';
import * as Dialog from '@radix-ui/react-dialog';
import {ChevronLeft, ChevronRight, Expand, X} from 'lucide-react';
import {useId, useRef, useState, type KeyboardEvent} from 'react';
import type {GalleryImage} from '@/lib/content';

export function ImageCarousel({images, title, compact = false}: {
  images: GalleryImage[]; title: string; compact?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const pointer = useRef<{x: number; y: number} | null>(null);
  const swiped = useRef(false);
  const id = useId();
  if (!images.length) return null;
  const current = images[index];
  const move = (direction: number) => setIndex(value => (value + direction + images.length) % images.length);
  const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    event.stopPropagation();
    if (event.key === 'Home') setIndex(0);
    else if (event.key === 'End') setIndex(images.length - 1);
    else move(event.key === 'ArrowRight' ? 1 : -1);
  };
  const controls = (fullscreen = false) => <div className="carousel-controls">
    <button type="button" className="icon-button" aria-label="이전 이미지" onClick={() => move(-1)} disabled={images.length < 2}><ChevronLeft size={19}/></button>
    <span className="carousel-counter" role="status" aria-live="polite" aria-atomic="true">{index + 1} / {images.length}<span className="sr-only"> · {current.title}</span></span>
    <button type="button" className="icon-button" aria-label="다음 이미지" onClick={() => move(1)} disabled={images.length < 2}><ChevronRight size={19}/></button>
    {fullscreen && <span className="carousel-key-hint">← → 키로 이동</span>}
  </div>;
  return <section className={`image-carousel${compact ? ' carousel-compact' : ''}`} aria-label={title} aria-roledescription="카루셀" onKeyDown={onKeyDown}>
    <div className="carousel-heading"><p className="eyebrow">{compact ? 'STUDY WORKSPACE' : 'PROJECT OVERVIEW'}</p><span>{images.length} images</span></div>
    <Dialog.Root open={expanded} onOpenChange={setExpanded}>
      <div className="carousel-stage" onPointerDown={event => {
        if (event.pointerType === 'mouse') return;
        pointer.current = {x: event.clientX, y: event.clientY}; swiped.current = false;
      }} onPointerUp={event => {
        if (!pointer.current) return;
        const dx = event.clientX - pointer.current.x;
        const dy = event.clientY - pointer.current.y;
        pointer.current = null;
        if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) {swiped.current = true; move(dx < 0 ? 1 : -1);}
      }} onPointerCancel={() => {pointer.current = null;}} onClickCapture={event => {
        if (swiped.current) {event.preventDefault(); event.stopPropagation(); swiped.current = false;}
      }}>
        <Dialog.Trigger asChild><button type="button" className="carousel-image-button" aria-label={`${current.title} 확대 보기`} aria-describedby={`${id}-caption`}>
          <Image src={current.src} alt={current.alt} fill sizes={compact ? '(max-width: 767px) 75vw, 650px' : '(max-width: 800px) 100vw, 760px'}/>
          <span className="carousel-expand"><Expand size={14}/>확대 보기</span>
        </button></Dialog.Trigger>
      </div>
      <div className="carousel-caption" id={`${id}-caption`}><strong>{current.title}</strong>{current.description && <p>{current.description}</p>}</div>
      {controls()}
      <div className="carousel-pagination" role="group" aria-label="이미지 선택">
        {images.map((item, i) => <button type="button" key={item.src} aria-label={`${i + 1}번 이미지: ${item.title}`} aria-pressed={i === index} onClick={() => setIndex(i)}><span/></button>)}
      </div>
      <Dialog.Portal><Dialog.Overlay className="dialog-overlay evidence-overlay"/>
        <Dialog.Content className="carousel-dialog" aria-describedby={undefined} onKeyDown={onKeyDown}>
          <div className="dialog-toolbar"><Dialog.Title>{title}</Dialog.Title><Dialog.Close className="icon-button" aria-label="이미지 닫기"><X size={19}/></Dialog.Close></div>
          <div className="carousel-full-image"><Image src={current.src} alt={current.alt} fill sizes="90vw"/></div>
          <div className="carousel-full-caption"><strong>{current.title}</strong>{current.description && <p>{current.description}</p>}</div>
          {controls(true)}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  </section>;
}
