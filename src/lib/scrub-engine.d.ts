export type ScrollWorldConfig = {
  brand?: { name: string; href?: string };
  cta?: { label: string; href?: string };
  hint?: string;
  diveScroll?: number;
  connScroll?: number;
  crossfade?: number;
  nav?: boolean;
  atmosphere?: boolean;
  mobileStaticFallback?: boolean;
  directCrossfade?: boolean;
  releaseAfterScenes?: boolean;
  releaseScroll?: number;
  tailScroll?: number;
  sections: Array<{
    id: string;
    label?: string;
    still?: string;
    stillMobile?: string;
    clip?: string;
    clipMobile?: string;
    accent?: string;
    scroll?: number;
    linger?: number;
    eyebrow?: string;
    title?: string;
    body?: string;
    tags?: string[];
    cta?: {
      primary?: { label: string; href: string };
      secondary?: { label: string; href: string };
    };
  }>;
  connectors?: Array<string | null>;
  connectorsMobile?: Array<string | null>;
};

export function mountScrollWorld(container: HTMLElement, config: ScrollWorldConfig): () => void;
