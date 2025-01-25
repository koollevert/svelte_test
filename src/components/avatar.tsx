import { component$, Slot } from '@builder.io/qwik';

export const Avatar = component$(({ className }: { className?: string }) => {
  const baseClass = 'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full';

  return (
    <div class={`${baseClass} ${className || ''}`}>
      <Slot />
    </div>
  );
});

export const AvatarImage = component$(({ className, src, alt }: { className?: string; src: string; alt?: string }) => {
  const baseClass = 'aspect-square h-full w-full';

  return <img src={src} alt={alt || 'Avatar'} class={`${baseClass} ${className || ''}`} />;
});

export const AvatarFallback = component$(({ className, fallback }: { className?: string; fallback: string }) => {
  const baseClass = 'flex h-full w-full items-center justify-center rounded-full bg-muted';

  return <div class={`${baseClass} ${className || ''}`}>{fallback}</div>;
});
